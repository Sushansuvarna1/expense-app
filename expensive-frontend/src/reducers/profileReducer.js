const initialValue = {
  profile: {},


}

const profileReducer = (state = initialValue, action) => {
  switch (action.type) {
    case "SET_PROFILE": {
      return { ...state, profile: action.payload }
    }
    case "UPDATE_PROFILE": {
      return { ...state, profile: action.payload }
    }
    case "UPDATE_PROFILE_PIC": {
      return { ...state, profile: action.payload }
    }
    case "REMOVE_ALL": {
      return { ...state, profile: {} }
    }

    default: {
      return { ...state }
    }
  }
}

export default profileReducer