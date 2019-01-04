import React from 'react';
import moment from 'moment'



const Chat = (props) => {
  const { receiverId } = props.meta;
  const { chats } = props;
  const chatList = chats ? (
    chats.map(chat => {
      return(
        <div className={receiverId === chat.receiver ? "chat chat-sender" : "chat chat-receiver"} key={chat.id}>
          <p className="chat-message">{chat.message}</p>
          <span className="chat-date">{moment(chat.date.toDate()).fromNow()}</span>
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
