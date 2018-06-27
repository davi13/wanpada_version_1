export default function updateUser(state=false, action) {
    if (action.type == 'update') {
      console.log("le reducer du changestate est actif")
      console.log(state.user)
      return state
    }
    else {
      return state;
    }
  }
  









