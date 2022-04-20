import { IS_LOGGED_IN } from '../action/actionType'

const initialState = {
  isLoggedIn: false,
}

function user(state = initialState, action) {
  switch (action.type) {
    case IS_LOGGED_IN:
      return {
        ...state,
        isLoggedIn: action.data,
      }
    default:
      return state
  }
}

export default user
