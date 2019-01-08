export const createChat = (meta) => {
  return (dispatch, getState, { getFirestore, getFirebase }) => {
    const firestore = getFirestore();
    const { profile } = getState().firebase;
    const sender = getState().firebase.auth.uid;

    const postData = {
      message: meta.message,
      receiver: meta.receiverId,
      sender,
      date: new Date()
    }

    firestore.collection('chats').add({
      ...postData,
    }).then(() => {
      dispatch({type: 'CREATE_CHAT'})
    }).catch(() => {
      dispatch({type: 'CREATE_CHAT_ERROR'})
    })
  }
};

export const getChats = () => {
  return (dispatch, getState, {getFirebase, getFirestore}) => {
    const firestore = getFirestore();
    firestore.collection.get('chats').then(()=>{
      console.log()
    })
  }
};
