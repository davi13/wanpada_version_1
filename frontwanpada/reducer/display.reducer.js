export default function display(state = false, action){
  switch (action.type) {
    case 'userSignin':
      return true
      break;

    case 'userSignUp':
      return true
    break;
    default:
      return state
  }
}
