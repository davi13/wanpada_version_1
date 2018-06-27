export default function user(state={}, action) {
  if (action.type == 'userSignIn') {
    return action.user
  }
  else if (action.type == 'userSignUp') {
    return action.user
  }
  else if (action.type == 'update') {
    var user = {
      ...state,
      nom: action.nom,
      prenom: action.prenom,
      email: action.email,
      password: action.password,
      ville: action.ville,
      company: action.entreprise,
      university: action.universite
    }
    return user;
  }
  else {
    return state;
  }
}
