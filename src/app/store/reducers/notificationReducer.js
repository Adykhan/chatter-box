const initState = {
  notifications: [
    {
      content:"Hey",
      id: "QqlOcD1MN2hNIX47wdYG",
      receiver: "8d5oJpbkUiXus7Fxg41JEsIpFe93",
      type: "messageCreated",
      user: "MY4iyII8yoZ6Bdzg9yU6ZjyLtbM2"
    },
    {
      content: "Hi",
      id: "uXjhXSg6PR3puFqYY610",
      receiver: "MY4iyII8yoZ6Bdzg9yU6ZjyLtbM2",
      type: "messageCreated",
      user: "8d5oJpbkUiXus7Fxg41JEsIpFe93"
    }
  ]
};

const notificationReducer = (state = initState, action) => {
  switch (action.type) {
    case 'UPDATE_NOTIFICAIONS':
      return {
        notifications: action.notifications
      }
    default:
      return state;
  }
}

export default notificationReducer;
