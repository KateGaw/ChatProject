import React, { useState, useEffect } from "react";
import "./App.css";
import * as firebase from "firebase";

function App() {
  const db = firebase.database();
  const [messages, setMessages] = useState(null);
  const [text, setText] = useState();

  useEffect(() => {
    const mess = db.ref("messages");
    mess.on("value", (elem) => {
      setMessages(elem.val());
    });
  }, [db]);

  const onSubmitHandler = (event) => {
    event.preventDefault();
    setText("");
    db.ref("messages").push(text);
  };

  return (
    <div className="App">
      {messages !== null ? (
        Object.keys(messages).map((item) => (
          <div key={item} id={item}>
            message: {messages[item]}
          </div>
        ))
      ) : (
        <div>No messages yet...</div>
      )}
      <form onSubmit={onSubmitHandler}>
        <textarea
          value={text}
          onChange={(event) => setText(event.target.value)}
        />
        <input type="submit" value='Send' />
      </form>
    </div>
  );
}

export default App;
