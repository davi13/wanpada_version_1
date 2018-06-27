export default function newmessages(state={}, action) {
  if (action.type == 'newmessage') {
    console.log('newmessage', action.newmessage)
    return action.newmessage
  }
  else {
    return state;
  }
}
