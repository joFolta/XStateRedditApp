import React from "react";
import { useMachine } from "@xstate/react";
import { redditMachine } from "../path/to/redditMachine";
import Subreddit from "./Subreddit";

const subreddits = ["frontend", "reactjs", "vuejs"];

const App = () => {
  const [current, send] = useMachine(redditMachine);
  const { subreddit } = current.context;

  return (
    <main>
      <header>
        <select
          onChange={e => {
            send("SELECT", { name: e.target.value });
          }}
        >
          <option>Select One</option>
          {subreddits.map(subreddit => {
            return <option key={subreddit}>{subreddit}</option>;
          })}
        </select>
      </header>
      {subreddit && <Subreddit name={subreddit} key={subreddit} />}
      {/* <section>
        <h1>{current.matches("idle") ? "Select a subreddit" : subreddit}</h1>
        {current.matches({ selected: "loading" }) && <div>Loading...</div>}
        {current.matches({ selected: "loaded" }) && (
          <ul>
            {posts.map(post => (
              <li key={post.title}>{post.title}</li>
            ))}
          </ul>
        )}
      </section> */}
    </main>
  );
};

export default App;
