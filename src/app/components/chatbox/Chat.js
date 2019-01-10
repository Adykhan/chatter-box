

import React from 'react';
import moment from 'moment'



const Chat = (props) => {
  const { receiverId, senderId } = props.meta;
  const { chats, users } = props;
  // console.log("CHATS: ",chats);
  const chatList = chats && chats.map(chat => {
    if ((chat.sender === senderId && chat.receiver === receiverId) || (chat.receiver === senderId && chat.sender === receiverId)) {
      return(
        <div className={senderId === chat.sender ? "chat chat-sender" : "chat chat-receiver"} key={chat.id}>
          <p className="chat-message">{chat.message}</p>
          <span className="chat-date">{moment(chat.date.toDate()).fromNow()}</span>
        </div>
      )
    }
  })

  const receiver = users && users.find(user => {
    if(receiverId === user.id) {
      // console.log('USER = ', user);
      return user
    }
  })



  // <h3 className="mainHeading">{this.state.receiver ? this.state.receiver.firstName + ' ' + this.state.receiver.lastName   : null} </h3>
  // console.log(receiver);
  return(
    <>
      <h3 className="mainHeading">{receiver ? receiver.firstName + ' ' + receiver.lastName   : null} </h3>
      <div className='chats'>
        { chatList }
      </div>
    </>
  )
}

export default Chat;
