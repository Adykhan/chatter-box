import React from 'react';

const Notifications = (props) => {
  const { notifications } = props;
  const clickHandler = () => {
    console.log("Notification Clicked");
  }

  const notificationList = notifications ? (
    notifications.map((notification, index) => {
      return (
        <div className="notification" onClick={ clickHandler } key={ index }>
          <h3 className="title notification-title">{notification.title} </h3>
          <p className="notification-content">
            {notification.content}
            <span className="notification-date pull-right">{notification.date}</span>
          </p>
        </div>
      )
    })
  ) : (
    <div className="notification" onClick={ clickHandler }>
      <p className="notification-noNotification"> No Notification </p>
    </div>
  )

  return(
    <>
      { notificationList }
    </>
  );
}

export default Notifications;
