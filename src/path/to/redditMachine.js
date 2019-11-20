import { Machine, assign } from "xstate";

// function invokeFetchSubreddit(context) {
//   const { subreddit } = context;
//   return fetch(`https://www.reddit.com/r/${subreddit}.json`)
//     .then(response => response.json())
//     .then(json => json.data.children.map(child => child.data));
// }

export const redditMachine = Machine({
  id: "reddit",
  initial: "idle",
  context: {
    subreddit: null
  },
  states: {
    idle: {},
    selected: {} // no invocations!
  },
  on: {
    SELECT: {
      target: ".selected",
      actions: assign({
        subreddit: (context, event) => event.name
      })
    }
  }
});

////////////////////////
// const selectedEvent = {
//   type: "SELECT",
//   name: "reactjs"
// };

///////////////////////
