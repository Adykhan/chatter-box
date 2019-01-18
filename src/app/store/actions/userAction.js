export const updateUsers = (users) => {
  return (dispatch, getState) => {
    // const firestore = getFirestore();

      dispatch({type: 'UPDATE_USER', users})


    //   dispatch({type: 'GET_USER_SUCCESS'})
    // console.log("In userAction");
    // firestore.collection('users').get().then((response) => {
    //   dispatch({type: 'GET_USER_SUCCESS', response})
    // }).catch(() => {
    //   dispatch({ type: 'GET_USER_ERROR' })
    // })
  }
}
