// Define the reducer function
function counterReducer(state = 0, action) {
    switch (action.type) {
      case 'INCREMENT':
        return state + 1;
      case 'DECREMENT':
        return state - 1;
      case 'RESET':
        return 0;
      default:
        return state;
    }
  }
  
  // Define the store
  function createStore(reducer) {
    let state = reducer(undefined, {}); // Initialize the state with the default value
    const subscribers = []; // Array to hold the subscription functions
  
    // Function to dispatch actions
    function dispatch(action) {
      state = reducer(state, action);
      // Notify subscribers about the state change
      subscribers.forEach(subscriber => subscriber());
    }
  
    // Function to get the current state
    function getState() {
      return state;
    }
  
    // Function to subscribe to state changes
    function subscribe(subscriber) {
      subscribers.push(subscriber);
  
      // Function to unsubscribe from state changes
      return function unsubscribe() {
        const index = subscribers.indexOf(subscriber);
        if (index !== -1) {
          subscribers.splice(index, 1);
        }
      };
    }
  
    // Return the store object
    return {
      dispatch,
      getState,
      subscribe
    };
  }
  
  // Create the store with the counter reducer
  const store = createStore(counterReducer);
  
  // Subscribe to state changes
  const unsubscribe = store.subscribe(() => {
    console.log('State:', store.getState());
  });
  
  // Dispatch actions
  store.dispatch({ type: 'INCREMENT' }); // State: 1
  store.dispatch({ type: 'INCREMENT' }); // State: 2
  store.dispatch({ type: 'DECREMENT' }); // State: 1
  store.dispatch({ type: 'RESET' });     // State: 0
  
  // Unsubscribe from state changes
  unsubscribe();
  

  /***************************************
  In this implementation, we first define the reducer function counterReducer that takes the current state and an action as 
  input and returns the new state based on the action type.

Then, we define the createStore function that creates the store. It initializes the state by calling the reducer with an 
undefined state and an empty action, and sets up an array subscribers to hold the subscription functions.

The dispatch function is used to dispatch actions. It updates the state by calling the reducer with the current state and the 
action, and then notifies all subscribers about the state change.

The getState function returns the current state of the store.

The subscribe function is used to subscribe to state changes. It adds the subscriber function to the subscribers array and returns 
an unsubscribe function that can be used to unsubscribe from state changes.

Finally, we create the store using createStore and pass in the counterReducer as the reducer function. We subscribe to state changes 
by calling store.subscribe and providing a subscriber function that logs the new state to the console. We then dispatch actions using 
store.dispatch and see the state changes being logged to the console.

The unsubscribe function is used to unsubscribe from state changes, which can be called later if needed.*/