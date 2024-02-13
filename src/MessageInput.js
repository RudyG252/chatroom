import React from "react";

function MessageInput(props) {
  return (
    <div className="chat-message-input">
      <form onSubmit={props.onSubmit}>
        <input
          placeholder = "Enter Your Message"
          type="text"
          name="message-input"
          id="message-input"
          value={props.messageInput}
          onChange={props.onChange}
        />
      </form>
    </div>
  );
}

export default MessageInput;
