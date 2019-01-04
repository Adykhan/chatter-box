export const getUser = () => {
  return (dispatch, getState, { getFirestore }) => {
    const firestore = getFirestore();

      dispatch({type: 'GET_USER_SUCCESS'})
    console.log("In userAction");
    firestore.collection('users').get().then((response) => {
      dispatch({type: 'GET_USER_SUCCESS', response})
    }).catch(() => {
      dispatch({ type: 'GET_USER_ERROR' })
    })
  }
}
