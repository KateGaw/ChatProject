import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import * as firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyA2-qTeDp0LkCQMUf5j-t13iphVndcMlHY",
  authDomain: "chatproject-c2766.firebaseapp.com",
  databaseURL: "https://chatproject-c2766.firebaseio.com",
  projectId: "chatproject-c2766",
  storageBucket: "chatproject-c2766.appspot.com",
  messagingSenderId: "540349531243",
  appId: "1:540349531243:web:fe5282ed2bc80b38b41d2e",
};

firebase.initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
