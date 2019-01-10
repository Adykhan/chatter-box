import React from 'react';
import moment from 'moment';
import { Link } from 'react-router-dom';

const Notifications = (props) => {
  const { notifications, users, loggedUser } = props;
  const clickHandler = () => {
    console.log("Notification Clicked");
  }
  const getDetailedUser = () => {
    let temp = {};
    for(let i in users) {
      temp = {
        ...temp,
        [users[i].id] : {
          ...users[i]
        }
      }
      delete temp[users[i].id].id;
    }
    return temp;
  }
  const detailedUser = users && getDetailedUser();

  const notificationList = notifications && detailedUser && notifications.length ? (
    notifications.map((notification, index) => {
      // console.log(!notification.receiver || notification.receiver == loggedUser);
      if(!notification.receiver || notification.receiver == loggedUser) {
        switch(notification.type) {
          case 'messageCreated':
          return(
            <Link className="notification" to={'/chat/'+notification.user} key={ index }>
              <h3 className="title notification-title">{detailedUser[notification.user].firstName} {detailedUser[notification.user].lastName}</h3>
              <p className="notification-content">
                {notification.content}
                <span className="notification-date pull-right">{moment(notification.time.toDate()).fromNow()}</span>
              </p>
            </Link>
          );
          case 'newUserJoined':
          return(
            <Link className="notification" to={'/chat/'+notification.user} key={ index }>
              <h3 className="title notification-title">{notification.user} </h3>
              <p className="notification-content">
                {notification.content}
                <span className="notification-date pull-right">{moment(notification.time.toDate()).fromNow()}</span>
              </p>
            </Link>
          );
          default:
          console.log("Notification type not defined");
        }
      }
    })
  ) : (
    <div className="notification">
      <p className="notification-noNotification"> No Notification </p>
    </div>
  )


    // console.log("Notification:",notifications);

  return(
    <div className="notifications">
      { notificationList }
    </div>
  );
}

export default Notifications;
