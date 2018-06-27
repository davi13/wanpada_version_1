export default function display(state = false, action){
  switch (action.type) {
    case 'userSignin':
      return true
      break;

    case 'userSignUp':
      return true
    break;

    case 'poweroff':
    console.log("depuis le reducer : click!")
      return false
    break;

    default:
      return state
  }
}
