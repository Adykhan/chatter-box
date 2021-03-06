import { combineReducers } from 'redux';
import { firestoreReducer } from 'redux-firestore';
import { firebaseReducer } from 'react-redux-firebase'

import authReducer from './authReducer';
import chatReducer from './chatReducer';
import userReducer from './userReducer';

const init = {

}

const rootReducer = combineReducers({
  auth: authReducer,
  firebase: firebaseReducer,
  firestore: firestoreReducer
})

export default rootReducer;
