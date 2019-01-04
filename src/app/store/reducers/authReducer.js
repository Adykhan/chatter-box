const initState = {
  authError: null
}

const authReducer = (state = initState, action) => {
  switch (action.type) {
    case 'SIGNIN_SUCCESS':
      console.log("Signin Success");
      return {
        ...state,
        authError: null
      }
    case 'SIGNIN_ERROR':
      console.log("Signin Error");
      return {
        ...state,
        authError: "Login Failed"
      }
    case 'SIGNOUT_SUCCESS':
      console.log("SignOut success");
      return {
        ...state
      }
    case 'SIGNUP_SUCCESS':
      console.log("Sigup Success");
      return {
        ...state
      }
    case 'SIGNUP_ERROR':
      console.log("Sigup Error");
      return {
        ...state
      }
    default:
      return state;
  }
}

export default authReducer;
