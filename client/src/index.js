import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
import {configureStore} from '@reduxjs/toolkit'
import './index.css'
import postsReducer from "./reducers/posts";

const store = configureStore({
    reducer: {
        posts: postsReducer
    }
});

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
