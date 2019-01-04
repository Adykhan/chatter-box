import React from 'react';
import { Link } from 'react-router-dom';


const Friends = (props) => {
  const { friends } = props;

  let imgLink = '';

  const friendsList = friends ? (
    friends.map(friend => {
      imgLink = false ? (<img className="friend-img" src={friend.img} alt={friend.firstName}/>) : <button className="friend-initials">{ friend.firstName[0] }{ friend.lastName[0] }</button>;
      return (
        <Link className="friend" to={'/chat/'+friend.id} key={friend.id}>
          { imgLink }
          <span className="friend-name">{friend.firstName} {friend.lastName}</span><span className="friend-status pull-right">{friend.status ? 'online' : 'offline'}</span>
        </Link>
      );
    })
  ) : (
    <div className="friend">
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
