import React from 'react';

const Friends = (props) => {
  const { friends } = props;
  const clickHandler = (e) => {
    console.log(e.target);
  }

  const friendsList = friends ? (
    friends.map(friend => {
      return (
        <div className="friend" onClick={ clickHandler } key={friend.id}>
          <img className="friend-img" src={friend.img} alt={friend.name}/>
          <span className="friend-name">{friend.name}</span><span className="friend-status pull-right">{friend.name ? 'online' : 'offline'}</span>
        </div>
      );
    })
  ) : (
    <div className="friend" onClick={ clickHandler }>
      <p className="friend-noFirend">You have no friend</p>
    </div>
  )

  return(
    <>
      { friendsList }
    </>
  );
}

export default Friends;
