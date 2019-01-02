import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect} from 'react-router-dom';

// Custom Component
import Notifications from './Notifications';
import Friends from './Friends';

class Dashboard extends Component {
  // both friend and notification should be changed to plular and they will become
  // array of objects which will pass the invidual friend and notification
  state = {
    friends: [
      {
        img: "/img/users/steveRogers.jpg",
        name: "Steve Rogers"
      },
      {
        img: "/img/users/bruceBanner.jpg",
        name: "Bruce Banner"
      },
      {
        img: "/img/users/thor.jpg",
        name: "Thor"
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
            <Notifications notifications={this.state.notifications}/>
          </section>
        </div>
        <div className="col-md-5">
          <section className="Friends">
            <h3 className="mainHeading">Friends</h3>
            <Friends friends={this.state.friends}/>
          </section>
        </div>
      </section>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    auth: state.firebase.auth
  }
}

export default connect(mapStateToProps)(Dashboard);
