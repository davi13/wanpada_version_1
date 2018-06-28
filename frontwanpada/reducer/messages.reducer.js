export default function newmessages(state=[], action) {
  if (action.type == 'newmessage') {
    // console.log('newmessage', action.message)
    var content = [...state]
        content.push({
          messageid: action.messageid,
          comments: action.message,
          date_at: action.date_at,
          likes: action.likes,
          userid: action.userid,
          username: action.username
        })

    return content
  }
  else if (action.type == 'getall'){
    var initialMessages = [...action.messages]
    return initialMessages
  }
  else {
    return state;
  }
}



// Object {
//   "__v": 0,
//   "_id": "5b3509814f5933216ef842a2",
//   "comments": "Encore un test !",
//   "date": "Encore un test !",
//   "nbOfLikes": "Encore un test !",
//   "userid": "5b34b70bce74d70c7ccc06f2",
// }
