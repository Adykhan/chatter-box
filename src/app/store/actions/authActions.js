export const signIn = (credentials) => {
  return (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();
    firebase.auth().signInWithEmailAndPassword(
      credentials.email,
      credentials.password
    ).then(() => {
      dispatch({ type: 'SIGNIN_ERRORIN_SUCCESS' })
    }).catch(() => {
      dispatch({ type: 'SIGNIN_ERROR' })
    })
  }
}

export const signOut = () => {
  return (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();
    firebase.auth().signOut().then(() => {
      dispatch({ type: 'SIGNOUT_SUCCESS' })
    })
  }
}

export const signUp = (newUser) => {
  return (dispatch, getState, { getFirebase, getFirestore}) => {
    const firebase = getFirebase();
    const firestore = getFirestore();
    console.log(newUser);
    firebase.auth().createUserWithEmailAndPassword(
      newUser.email,
      newUser.password
    ).then((response) => {
      return firestore.collection('users').doc(response.user.uid).set({
        firstName: newUser.firstName,
        lastName: newUser.lastName,
        img: '/img/users/' + response.user.uid + '.jpg'    // later make it dynamic
      })
    }).then(() => {
      dispatch({ type: 'SIGNUP_SUCCESS' });
    }).catch(() => {
      dispatch({ type: 'SIGNUP_ERROR' });
    })
  }
}
