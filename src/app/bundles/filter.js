// export const filters = {
//   users: (data) => {
//     console.log('%c In filter.users', 'color: red', data);
//
//   },
//   notifications: (data, loggedUser) => {
//     console.log('%c In filter.notifications', 'color: red');
//     // const tempNotifications = [...this.props.notifications];
//     // if(notification.receiver === this.props.auth.uid)
//     return data;
// 
//   },
//   blah: () => {
//     console.log('%c BLAH BLAH', 'color: green; padding: 2rem; background: #aaa');
//   }
// }

export const filters = {
  users: (data) => {
    console.log('%c In updateReducer.users', 'color: pink', data);
    const tempUser = {};
    data.map((user, index) => {
      tempUser[user.id] = user;
    })
    return tempUser;
    // this.props.updateUsers(tempUser);
  },
  notifications: (data, loggedUser) => {
    const tempNotifications = data.filter(notification => notification.receiver === loggedUser)
    return tempNotifications;
    // this.props.updateNotifications(tempNotifications);
  }
}
