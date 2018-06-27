export default function addFollower(state=[], action) {
  // L'objet action, contient obligatoirement un type. celui-ci nous permet de définir le type d'action.
  if (action.type == 'addfollow') {
    var followings = [...state];
    console.log(followings);
    // Et nous y ajoutons ensuite, le nouveau following sur lequel nous venons de cliquer
    followings.push({id: action.id, like: action.like});
      return followings

  }

  else if (action.type == 'deletefollow') {
    var followings = [...state];
    console.log(followings);

    var index = followings.indexOf(action.id);
    if (index > -1) {
      followings.splice(index, 1);
    }
      return followings

  } else {
    // Par défaut, si aucun type d'action n'est défini, followings est un tableau vide.
    return state
  }
}
