import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';

// Custom Component
import Notifications from './Notifications';
import Friends from './Friends';

class Dashboard extends Component {
  // both friend and notification should be changed to plular and they will become
  // array of objects which will pass the invidual friend and notification
  state = {
    friends: [
      {
        id: '8d5oJpbkUiXus7Fxg41JEsIpFe93',
        img: "/img/users/cYTYnZ3sungpispTV7yklW81F5l2.jpg",
        name: "Steve Rogers"
      },
      {
        id: '8HLgB9SIcngOPdwEBXkYf0hnN4j1',
        img: "/img/users/bruceBanner.jpg",
        name: "Bruce Banner"
      },
      {
        id: 'pMrJzUopddWyZ6G05YUcdcixbuB2',
        img: "/img/users/thor.jpg",
        name: "Thor"
      },
      {
        id: 'MY4iyII8yoZ6Bdzg9yU6ZjyLtbM2',
        img: "/img/users/pepperPotts.jpg",
        name: "Pepper Potts"
      }
    ],
    notifications: [
      {
        title: "Tony Stark",
        content: "I'm lost in space.",
        date: "26 Dec 2018"
      },
      {
        title: "Tony Stark",
        content: "Will you Rescue me",
        date: "27 Dec 2018"
      },
      {
        title: "Tony Stark",
        content: "Food and water ran out 4 days ago",
        date: "28 Dec 2018"
      },
      {
        title: "Tony Stark",
        content: "By tomorrow even the Oxygen will run out",
        date: "28 Dec 2018"
      }
    ]
  }

  render() {
    const { auth } = this.props;
    console.log("Props:", this.props);

    if(!auth.uid) {
      return(<Redirect to='/signin' />)
    }

    return(
      <section className="Dashboard">
        <div className="col-md-7">
          <section className="Notifications">
            <h3 className="mainHeading">Notifications</h3>
            <Notifications loggedUser={ this.props.auth.uid } users={ this.props.users } notifications={ this.props.notifications }/>
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

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: 'users' },
    { collection: 'notifications', orderBy: ['time', 'desc'] }
  ])
)(Dashboard);
