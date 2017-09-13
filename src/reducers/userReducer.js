const intialState = {
  users: [],
  current: {}
}

export default function(state = intialState, action) {
  switch (action.type) {
    case 'GET_USERS':
      return {...state, users:[...action.users, ...state.users]}

    default:
        return state

  }
}
