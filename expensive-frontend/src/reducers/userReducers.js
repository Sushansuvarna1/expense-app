const initialValue = {
  user: {},
  errors: {},

}

const userReducer = (state = initialValue, action) => {
  switch (action.type) {
    case "SET_ACCOUNT": {
      return { ...state, user: { ...state.user, ...action.payload } }
    }
    case "SET_ERROR": {
      return { ...state, errors: action.payload }
    }
    case "REMOVE_ALL": {
      return { ...state, user: {} }
    }
    default: {
      return { ...state }
    }
  }
}

export default userReducer