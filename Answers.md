1. What problem does the context API help solve?

the context API gives us a central location to store data or state and then share it between components without having to pass it down as props. this becomes helpful with larger applications where props or state need to get passed down through components that dont utilize the props directly. 



2. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

actions- send data to the store
reducers- will change the app state based on actions sent to the store
store- where the state is stored in an app

3. What is the difference between Application state and Component state? When would be a good time to use one over the other?

application state is global state, meaning all components have access to that state.
component state is localized to that specific component. Application State is where you should store state that will be used in many parts of the application. while Component state is needed in that component or perhaps immediate children.


4. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?


5. What is your favorite state management system you've learned and this sprint? Please explain why!

I do not have a favorite :)
