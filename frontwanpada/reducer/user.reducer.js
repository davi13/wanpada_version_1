export default function user(state={}, action) {
  if (action.type == 'userSignin') {
    console.log("test depuis le reducer")
    return state.user
  }
  else if (action.type == 'userSignup') {
    return state.user
  }
  else {
    return state;
  }
}
