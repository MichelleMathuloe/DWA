// Define action types
const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';
const RESET = 'RESET';

// Define action creators
function increment() {
  return { type: INCREMENT };
}

function decrement() {
  return { type: DECREMENT };
}

function reset() {
  return { type: RESET };
}

// Define reducer function
function tallyReducer(state = 0, action) {
  switch (action.type) {
    case INCREMENT:
      return state + 1;
    case DECREMENT:
      return state - 1;
    case RESET:
      return 0;
    default:
      return state;
  }
}

// Define store
function createStore(reducer) {
  let state = reducer(undefined, {});
  let listeners = [];

  function getState() {
    return state;
  }

  function dispatch(action) {
    state = reducer(state, action);
    listeners.forEach(listener => listener());
  }

  function subscribe(listener) {
    listeners.push(listener);
    return function unsubscribe() {
      listeners = listeners.filter(l => l !== listener);
    };
  }

  return {
    getState,
    dispatch,
    subscribe
  };
}

// Create store with tallyReducer
const store = createStore(tallyReducer);

// Subscribe to store changes and log new state
const unsubscribe = store.subscribe(() => {
  console.log('New state:', store.getState());
});

// Dispatch actions
store.dispatch(increment());
store.dispatch(increment());
store.dispatch(decrement());
store.dispatch(reset());

// Unsubscribe from store changes
unsubscribe();
