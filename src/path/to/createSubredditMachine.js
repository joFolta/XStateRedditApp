import { Machine, assign } from "xstate";

function invokeFetchSubreddit(context) {
  const { subreddit } = context;
  return fetch(`https://www.reddit.com/r/${subreddit}.json`)
    .then(response => response.json())
    .then(json => json.data.children.map(child => child.data));
}

export const createSubredditMachine = subreddit => {
  return Machine({
    id: "subreddit",
    initial: "loading",
    context: {
      subreddit, //subreddit name passed in
      posts: null,
      lastUpdated: null
    },
    states: {
      loading: {
        invoke: {
          id: "fetch-subreddit",
          src: invokeFetchSubreddit,
          onDone: {
            target: "loaded",
            actions: assign({
              posts: (_, event) => event.data,
              lastUpdated: () => Date.now()
            })
          },
          onError: "failure"
        }
      },
      loaded: {
        on: {
          REFRESH: "loading"
        }
      },
      failure: {
        on: {
          RETRY: "loading"
        }
      }
    }
  });
};
