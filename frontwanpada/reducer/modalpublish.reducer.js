export default function modal(state = false, action){

    if (action.type == 'exitmodal') {
      return false
    }
    else if (action.type == 'openmodal') {
        return true
      }
    else {
      return state;
    }
}