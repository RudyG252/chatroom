import React, { useState } from "react";
import "./App.css";

function LoginPage(props) {
  const onChange = (evt) => setUsername(evt.target.value);
  const [username, setUsername] = useState("");
  const onClick = () => {
    props.onLogin(username);
  };

  return (
    <div className="chat-login-page-container">
      <div className="chat-login-page-controls-container">
        <h4>Set your username</h4>
        <form onSubmit={onClick}>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={onChange}
          />
        </form>     
        <button type="button" onClick={onClick}>
          Login
        </button>
      </div>
    </div>
  );
}

export default LoginPage;
