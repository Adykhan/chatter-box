import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';

// Custom Component
import Notifications from './Notifications';
import Friends from './Friends';

import { updateUsers } from '../../store/actions/userAction'
import { updateNotifications } from '../../store/actions/notificationAction'
import { filters } from '../../bundles/filter'

class Dashboard extends Component {
  // both friend and notification should be changed to plular and they will become
  // array of objects which will pass the invidual friend and notification
  state = {
    // friends: [
    //   {
    //     id: '8d5oJpbkUiXus7Fxg41JEsIpFe93',
    //     img: "/img/users/cYTYnZ3sungpispTV7yklW81F5l2.jpg",
    //     name: "Steve Rogers"
    //   },
    //   {
    //     id: '8HLgB9SIcngOPdwEBXkYf0hnN4j1',
    //     img: "/img/users/bruceBanner.jpg",
    //     name: "Bruce Banner"
    //   },
    //   {
    //     id: 'pMrJzUopddWyZ6G05YUcdcixbuB2',
    //     img: "/img/users/thor.jpg",
    //     name: "Thor"
    //   },
    //   {
    //     id: 'MY4iyII8yoZ6Bdzg9yU6ZjyLtbM2',
    //     img: "/img/users/pepperPotts.jpg",
    //     name: "Pepper Potts"
    //   }
    // ],
    // notifications: [
    //   {
    //     title: "Tony Stark",
    //     content: "I'm lost in space.",
    //     date: "26 Dec 2018"
    //   },
    //   {
    //     title: "Tony Stark",
    //     content: "Will you Rescue me",
    //     date: "27 Dec 2018"
    //   },
    //   {
    //     title: "Tony Stark",
    //     content: "Food and water ran out 4 days ago",
    //     date: "28 Dec 2018"
    //   },
    //   {
    //     title: "Tony Stark",
    //     content: "By tomorrow even the Oxygen will run out",
    //     date: "28 Dec 2018"
    //   }
    // ]
  }

  // filters = {
  //   users: () => {
  //     console.log('%c In filter.users', 'color: red', this.props);
  //     const tempUser = {};
  //     this.props.users.map((user, index) => {
  //       tempUser[user.id] = user;
  //     })
  //     return tempUser;
  //   },
  //   notifications: () => {
  //     console.log('%c In filter.notifications', 'color: red');
  //     // const tempNotifications = [...this.props.notifications];
  //
  //     // if(notification.receiver === this.props.auth.uid)
  //
  //   }
  // }
  //
  // updateReducers = {
  //   users: () => {
  //     console.log('%c In updateReducer.users', 'color: green', this.props);
  //     const tempUser = this.props.users && this.filters.users();
  //     this.props.updateUsers(tempUser);
  //   },
  //   notifications: () => {
  //     console.log('%c In updateReducer.notifications', 'color: green', this.props);
  //     const tempNotifications = this.props.notifications && this.filters.notifications();
  //
  //       console.log('%c In updateReducer.notifications', 'color: purple', tempNotifications, this.props.notifications);
  //     this.props.updateNotifications(tempNotifications);
  //   }
  // }


  // componentWillReceiveProps() {
  //   console.log("PROPS from componentWillReceiveProps:", this.props);
  //   this.props.users && this.updateReducers.users();
  //   // this.props.notifications && this.updateReducers.notifications();
  //
  //   if(this.props.notifications) {
  //       console.log('%c Hurry', 'color: red; padding: 2rem; background: #aaa', this.props);
  //   }
  // }
  static getDerivedStateFromProps(props, state) {
    const updatedUsers = props.users && filters.users(props.users);
    const updatedNotifications = props.notifications && filters.notifications(props.notifications, props.auth.uid);

    // if ( props.userReducer && props.userReducer.user !== updateUsers)

    props.updateUsers && props.updateUsers(updatedUsers);
    props.updateNotifications && props.updateNotifications(updatedNotifications);

    // if (updatedUsers != props.userReducer.users) {
    //   props.updateUsers(updatedUsers);
    //   console.log("UPDATED USER REDUCER", updatedUsers, props.users);
    // }


    // const tempNotifications = props.notifications && props.notifications.filter((notification) => {
    //
    //         if(notification.receiver === props.auth.uid) {return notification}
    // })
    // if(props.notifications) {
    //     console.log('%c WOW', 'color: green; padding: 2rem; background: #aaa', props.auth.uid, props.notifications, tempNotifications);
    //     props.updateNotifications(tempNotifications);
    // }

    console.log("%c PROPS: ",'color: purple', props, updatedUsers, updatedNotifications);
  }

  render() {
    const { auth } = this.props;

    if(!auth.uid) {
      return(<Redirect to='/signin' />)
    }

    // filters.blah();

    return(
      <section className="Dashboard">
        <div className="col-md-7">
          <section className="Notifications">
            <h3 className="mainHeading">Notifications</h3>
            <Notifications loggedUser={ this.props.auth.uid } notifications={ this.props.notifications }/>
          </section>
        </div>
        <div className="col-md-5">
          <section className="Friends">
            <h3 className="mainHeading">Friends</h3>
            <Friends friends={this.props.users}/>
          </section>
        </div>
      </section>
    );
  }
}

const mapStateToProps = (state) => {
  console.log("STATE",state);
  return {
    auth: state.firebase.auth,
    users: state.firestore.ordered.users,
    notifications: state.firestore.ordered.notifications
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateUsers: (user) => dispatch(updateUsers(user)),
    updateNotifications: (notifications) => dispatch(updateNotifications(notifications))
  }
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  firestoreConnect([
    { collection: 'users' },
    { collection: 'notifications', orderBy: ['time', 'desc'] }
  ])
)(Dashboard);
