const initState = {
  users: [
    {
      id: '8d5oJpbkUiXus7Fxg41JEsIpFe93',
      img: "/img/users/cYTYnZ3sungpispTV7yklW81F5l2.jpg",
      name: "Steve Rogers"
    },
    {
      id: '8HLgB9SIcngOPdwEBXkYf0hnN4j1',
      img: "/img/users/bruceBanner.jpg",
      name: "Bruce Banner"
    },
    {
      id: 'pMrJzUopddWyZ6G05YUcdcixbuB2',
      img: "/img/users/thor.jpg",
      name: "Thor"
    }
  ]
}

const userReducer = (state = initState, action) => {
  switch (action.type) {
    case 'UPDATE_USER':
      return {
        users: action.users
      }
    default:
      return state;
  }
}

export default userReducer;
