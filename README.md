## React - Component Side Effects & useEffect Hook

In the context of React, the terms "Component Side Effects" and "useEffect" are closely related to how you manage asynchronous or non-active operations within functional components.

1. **Component Side Effects:**

    - CSEs refer to any operations or behaviors that occur within a React component beyond the initial render and updates due to state or props changes.
    
    - Examples of CSEs include data fetching, DOM manipulation, setting up subscriptions to external data sources, and other asynchronous tasks.
    
    - Performing side effects directly within the component can lead to issues like memory leaks, unexpected behaviors, and inefficient rendering.

2. **useEffect:**

    - `useEffect` is a built-in hook in React that allows you to manage side effects in functional components.
    
    - It's used to perform actions that are not related to the component's render, such as data fetching, DOM manipulation, or subscription setup.
    
    - `useEffect` takes two arguments:
    
        1. A function that contains the code for the side effect (callback function).
        2. An array of dependencies that change between renders. If omitted, the side effect will run after every render.
    
    - The function passed to `useEffect` is where you place your side-effect code.

---

## Double Call Issue and Cleanup Function

In React, when using the `useEffect` hook, it's important to understand how cleanup functions work and why you might experience double calls to your effect. The cleanup function is returned by the `useEffect` hook and is used to clean up any resources or side effects created by the effect when the component unmounts or when the dependencies change.

---

## useReducer

`useReducer` is a React hook that is used for managing state in functional components. It is an alternative to the `useState` hook, and it is particularly useful when you have complex state logic that involves multiple sub-values or when you need to perform actions that depend on the previous state.

Steps:

1. Import the `useReducer` hook.
2. Define a reducer function. The reducer function takes two arguments: the current state and an action. It returns a new state based on the action type and payload.
3. It returns the current state and a dispatch function that you can use to dispatch actions.

---

## Context API & createContext

The Context API is a feature that allows you to share state and data between components without having to explicitly pass data through props at every level of the component tree. It provides a way to manage and access global state within your application.

- Creating a context:

    You can create a context using the `React.createContext()` method. This method returns an object with two properties:

    1. Provider: Used to wrap the components that will share the state.
    2. Consumer: Used to access that state within your components.

- Using the context in your components:

    With the introduction of React Hooks, you can also use the `useContext` hook to consume context within functional components.

The Context API is particularly useful for managing global state, themes, authentication status, and other data that needs to be accessed by multiple components without prop drilling.
