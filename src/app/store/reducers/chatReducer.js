const initState = {
  chats : [
    {
      sender: 'cYTYnZ3sungpispTV7yklW81F5l2',
      receiver : 'zHMFSUHRp5YW9xKnaiMuMmoFif43',
      message: 'Hi form reducer',
      date: '28 Dec 2019'
    },
    {
      sender: 'cYTYnZ3sungpispTV7yklW81F5l2',
      receiver : 'zHMFSUHRp5YW9xKnaiMuMmoFif43',
      message: 'Are you going to save Tony?',
      date: '28 Dec 2019'
    },
    {
      sender: 'zHMFSUHRp5YW9xKnaiMuMmoFif43',
      receiver : 'cYTYnZ3sungpispTV7yklW81F5l2',
      message: 'Nope, he might already be dead by now.',
      date: '28 Dec 2019'
    }
  ]
}

const chatReducer = (state = initState, action) => {
  console.log('in chatReducer');
  switch (action.type) {
    case 'CREATE_CHAT':
      console.log("Message send");
      return state;
    case 'CREATE_CHAT_ERROR':
      console.log("Message not sent");
      return state;
    default:
      return state;
  }
}

export default chatReducer;
