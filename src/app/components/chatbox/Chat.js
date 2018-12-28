import React from 'react';



const Chat = (props) => {
  const { sender, receiver } = props.meta;
  const { chats } = props;
  const chatList = chats ? (
    chats.map(chat => {
      return(
        <div className={sender === chat.sender ? "chat chat-sender" : "chat chat-receiver"}>
          <p className="chat-message">{chat.message}</p>
          <span className="chat-date">{chat.sendOn}</span>
        </div>
      )
    })
  ) : (
    null
  )

  return(
    <>
      { chatList }
    </>
  )
}

export default Chat;
