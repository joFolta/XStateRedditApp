import React, { useMemo } from "react";
import { useMachine } from "@xstate/react";
import { createSubredditMachine } from "../path/to/createSubredditMachine";

//imports

const Subreddit = ({ name }) => {
  // Only create the machine based on the subreddit name once
  const subredditMachine = useMemo(() => {
    return createSubredditMachine(name);
  }, [name]);

  const [current, send] = useMachine(subredditMachine);

  if (current.matches("failure")) {
    return (
      <div>
        Failed to load posts.{" "}
        <button onClick={_ => send("RETRY")}>Retry?</button>
      </div>
    );
  }

  const { subreddit, posts, lastUpdated } = current.context;

  return (
    <section>
      <p>
        {subredditMachine.id} state: {current.toStrings().join(" ")}
      </p>
      {current.matches("loading") && <div>Loading posts...</div>}
      {posts && (
        <>
          <header>
            <h2>{subreddit}</h2>
            <small>
              Last updated:{" "}
              {new Intl.DateTimeFormat("en-US", { timeStyle: "long" }).format(
                lastUpdated
              )}{" "}
              <button onClick={_ => send("REFRESH")}>Refresh</button>
            </small>
          </header>
          <ul>
            {posts.map(post => {
              return <li key={post.id}>{post.title}</li>;
            })}
          </ul>
        </>
      )}
    </section>
  );
};

export default Subreddit;
