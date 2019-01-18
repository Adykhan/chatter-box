import { combineReducers } from 'redux';
import { firestoreReducer } from 'redux-firestore';
import { firebaseReducer } from 'react-redux-firebase'

import authReducer from './authReducer';
import chatReducer from './chatReducer';
import userReducer from './userReducer';
import notificationReducer from './notificationReducer';

const rootReducer = combineReducers({
  auth: authReducer,
  userReducer: userReducer,
  notificationReducer: notificationReducer,
  firebase: firebaseReducer,
  firestore: firestoreReducer
})

export default rootReducer;
