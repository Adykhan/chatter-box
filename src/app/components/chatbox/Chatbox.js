import React, { Component } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom'
import { createChat, getChats } from '../../store/actions/chatAction';
import { firestoreConnect } from 'react-redux-firebase';
import PropTypes from 'prop-types'
import { isLoaded, isEmpty, withFirebase } from 'react-redux-firebase';

import Chat from './Chat';
import Chat0 from './Chat0';

class Chatbox extends Component {


  state = {
    chats: [],
    meta: {
      receiverId: this.props.match.params.uid ? this.props.match.params.uid : null,
      senderId: this.props.auth.uid ? this.props.auth.uid : null,
      message: ''
    },
    receiver: this.receiver ? this.receiver[0] : null
  }

  static contextTypes = {
    store: PropTypes.object.isRequired
  }
  static propTypes = {
    chats: PropTypes.object
  }

  submitHandler = (e) => {

    const { firestore } = this.context.store;
    e.preventDefault();
    this.props.createChat(this.state.meta);
    document.querySelector('#message').value = ''
    console.log('STATE:', this.state);
  }

  changeHandler = (e) => {
    this.setState({
      meta: {
        ...this.state.meta,
        [e.target.id]: e.target.value}
    })
  }

  // --- Setting Receiver
  /*
  setReciver = () => {
    const temp = this.props.users ? this.props.users.filter((user) => {
      if(user.id == this.state.meta.receiverId && !this.state.meta.receiver) {
        return user;
      }
    }) : null;
    if(temp && (!this.state.meta.receiver)) {
      this.setState((prevState, props) => ({
        meta: {
          ...prevState.meta,
          receiver: temp[0]
        }
      }))
    }
  }
  */

  render() {
    const { auth } = this.props;

    if(!auth.uid) {
      return(<Redirect to='/signin' />)
    }

    console.log("CHATBOX_PROPS: ", this.props);

    return(
      <section className="Chatbox">
        <col-md-6>
          <form onSubmit={ this.submitHandler }>
          <section className="Chat">
            <Chat users={ this.props.users } meta={ this.state.meta } chats={ this.props.chats }></Chat>
          </section>
          <input type="text" className="Chat-input" id="message" placeholder="Enter your thought..." onChange={ this.changeHandler }/>
          </form>
        </col-md-6>
      </section>
    );
  }
}

const mapStateToProps = (state) => {
  console.log('state from mapStateToProps: ', state);
  // console.log('props from mapStateToProps: ', thprops);
  return {
    auth: state.firebase.auth,
    profile: state.firebase.profile,
    users: state.firestore.ordered.users,
    chats: state.firestore.ordered.chats
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    createChat: (message) => dispatch(createChat(message)),
    getChats: () => dispatch(getChats())
  }
}


export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  firestoreConnect([
    { collection: 'chats', orderBy: ['date'] },
    { collection: 'users' }
  ])
)(Chatbox)
;

/*
firestoreConnect([
  { collection: 'chats', orderBy: ['date'], where: [
      ['sender', '==', 'zHMFSUHRp5YW9xKnaiMuMmoFif43'],
      ['receiver', '==', 'cYTYnZ3sungpispTV7yklW81F5l2']
    ]
  },
  { collection: 'users' }
])
*/
