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
      receiver: this.receiver ? this.receiver[0] : null,
      message: ''
    }
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
    console.log("SUBMIT: ",this.state);
    this.props.createChat(this.state.meta);
    // this.filterChats();
    firestore.get({ collection: 'chats', orderBy: ['date']  }).then(() => {
      this.filterChats();
    })
  }

  changeHandler = (e) => {
    this.setState({
      meta: {
        ...this.state.meta,
        [e.target.id]: e.target.value}
    })
  }

  // --- Setting Receiver
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

        // console.log('props: ', this.props);
        // console.log('localstate: ',this.state);
        // console.log('receiver: ',this.state.meta.receiver);
        // console.log('users: ',this.props.users);
  }

  // ---Filtering Chat
  filterChats = () => {
    const tempChats = this.props.chats ? this.props.chats.filter((chat) => {
      if((chat.sender === this.props.auth.uid && chat.receiver === this.state.meta.receiverId) || (chat.receiver === this.props.auth.uid && chat.sender === this.state.meta.receiverId)) {
        return chat;
      }
    }) : null;
    console.log("props.chats: ",this.props.chats);
    console.log("tempChats: ",tempChats);
    console.log("state.chats: ",this.state.chats);
    if(tempChats && (tempChats.length !== this.state.chats.length )) {
      this.setState({
        chats: tempChats
      })
    }
  }

  componentDidUpdate() {
    this.setReciver();
    // this.filterChats();
  }

  componentDidMount() {
    // const { firestore, firebase } = this.context.store;
    // firestore.setListener({ collection: 'chats' })
    // console.log('IMPORTANT', this.props.firebase.watchEvent('value', 'chats'));
    // this.props.firebase.watchEvent('value', 'todos')

     // this.props.firebase.unWatchEvent('value', 'chats');
    // this.props.firestore.setListener({ collection: 'chats', orderBy: ['date'] })
    // this.props.firestore.get('users').then(() => {
      // this.setReciver();
      // firestore.get({ collection: 'chats', orderBy: ['date']  }).then(() => {
      //   this.filterChats();
      // })
    // })



  }

  componentWillUnmount() {
    const { firestore } = this.context.store;
    // firestore.unsetListener('chats')
    // firebase.unsetListener({ collection: 'todos' }) // or object notation
  }

  render() {
    const { auth } = this.props;

    if(!auth.uid) {
      return(<Redirect to='/signin' />)
    }

    console.log("CHATBOX_PROPS: ", this.props);

    // if(this.receiver) {
    //   this.setState({
    //     meta: {
    //       ...this.state.meta,
    //       receiver: this.receiver
    //     }
    //   })
    // }

    return(
      <section className="Chatbox">
        <col-md-6>
          <form onSubmit={ this.submitHandler }>
          <section className="Chat">
            <h3 className="mainHeading">{this.state.meta.receiver ? this.state.meta.receiver.firstName + ' ' + this.state.meta.receiver.lastName   : null} </h3>
            <div className='chats'>
            <Chat meta={ this.state.meta } chats={ this.props.chats }></Chat>
            </div>
          </section>
          <input type="text" className="Chat-input" id="message" placeholder="Enter your thought..." onChange={ this.changeHandler }/>
          </form>
        </col-md-6>
      </section>
    );
  }
}

const mapStateToProps = (state) => {
  // console.log('state from mapStateToProps: ', state);
  // console.log('props from mapStateToProps: ', thprops);
  return {
    auth: state.firebase.auth,
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
