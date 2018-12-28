import React, { Component } from 'react';
import { connect } from 'react-redux';

import Chat from './Chat';

class Chatbox extends Component {
  state = {
    meta : {
      sender: this.props.firebase.auth.uid ? this.props.firebase.auth.uid : null,
      receiver: this.props.match.params.uid ? this.props.match.params.uid : null
    },
    chats : [
      {
        sender: 'cYTYnZ3sungpispTV7yklW81F5l2',
        receiver : 'zHMFSUHRp5YW9xKnaiMuMmoFif43',
        message: 'Hi',
        sendOn: '28 Dec 2019'
      },
      {
        sender: 'cYTYnZ3sungpispTV7yklW81F5l2',
        receiver : 'zHMFSUHRp5YW9xKnaiMuMmoFif43',
        message: 'Are you going to save Tony?',
        sendOn: '28 Dec 2019'
      },
      {
        sender: 'zHMFSUHRp5YW9xKnaiMuMmoFif43',
        receiver : 'cYTYnZ3sungpispTV7yklW81F5l2',
        message: 'Nope, he might already be dead by now.',
        sendOn: '28 Dec 2019'
      }
    ]
  }




  render() {
    console.log(this.state)
    return(
      <section className="Chatbox">
        <col-md-6>
          <section className="Chat">
            <h3 className="mainHeading">{this.state.meta.receiver}</h3>
            <Chat meta={ this.state.meta } chats={ this.state.chats }></Chat>
          </section>
          <input type="text" className="Chat-input" placeholder="Enter your thought..."/>
        </col-md-6>
      </section>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    ...state
  }
}

export default connect(mapStateToProps)(Chatbox);
