![Preview](/public/preview2.png)
![Preview](/public/preview.png)

# XStateRedditApp

## Description: Manage state with XState State Machine
This app uses state machines to handle state changes. The purpose of the app is to allow the user to select a subreddit and see a listing of the posts contained within the subreddit. There are two possible main **states** of "idle" and "selected". Within "selected" there are 3 **substates** of "loading", "loaded", or "failed". The "loading" state invokes the function that makes the API call to reddit. There are 3 **events** "SELECT", "onDone", and "onError", which allow the transitions between the states.

Followed XState Tutorial: https://xstate.js.org/docs/tutorials/reddit.html

### More about state machines... (Source: Medium)

general formula for a state machine is:

*Current State + Some Action / Event= Another State*

                                
#### Benefits of State Machine:
1. You get rid of hard coding conditions in your code. State machine abstracts all logic regarding states & transitions on behalf of you. In the next post, we will explore few ways other than State Machine to create state oriented systems, you will see the problems in those systems there.

2. In reality, state machines usually have a finite number of states & definite transitions are defined in the states, so it’s easy to track which transition/data/ event caused the current condition of a request.
3. Developers can just concentrate on defining actions & preconditions after a state machine is configured. With proper validation & precondition, state machine prevents out of order operations. Like in the Uber example, a driver cannot be paid unless the trip ends.
4. State machines can be highly maintainable. Logically action performed during each transition is independent of each other. So corresponding piece of code can be isolated.
5. Usually, state machines are stable & less prone to change. So if current & future use cases are very clear, it becomes very easy to maintain such systems.

#### Disadvantages with State Machines:
1. Usually, state machines are synchronous in nature. So if you need asynchronous execution of background API calls/job execution, you might need to judge properly to choose the best one.
2. The code can become very messy easily. Since state machine is data driven, depending on different data/input parameter, your product team might ask you to execute different transitions from the same state. So this kind of requirements can cause having several transitions with messy precondition check. It completely depends on the product & the current implementation of the machine.
3. If it is required to load balance state machine instances, choose the one which has persistence enabled, otherwise you might need to add your own persistence layer & proper validations so that multiple requests fired towards different state machine instances can give a consistent result.
4. Not a lot of resources or communities are available for different state machine implementation, so support might not be that great once you choose a particular library.


## Citation:
https://medium.com/datadriveninvestor/state-machine-design-pattern-why-how-example-through-spring-state-machine-part-1-f13872d68c2d