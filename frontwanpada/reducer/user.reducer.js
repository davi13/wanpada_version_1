export default function user(state={}, action) {
  if (action.type == 'userSignin') {
    console.log('!!!!!!!!!!!!!!!!!!!!!!', action.user)
    return action.user
  }
  else if (action.type == 'userSignup') {
    return action.user
  }
  else {
    return state;
  }
}
