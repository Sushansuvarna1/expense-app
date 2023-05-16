const initialValue = {
  category: [],


}


const categoryReducer = (state = initialValue, action) => {
  console.log("state", state)
  console.log("action", action.payload)
  switch (action.type) {

    case "SET_CATEGORY": {
      return { ...state, category: action.payload }
    }

    case "SET_USER": {
      return { ...state, category: [...state.category, action.payload] }
    }
    case "REMOVE_ITEM": {
      return { ...state, category: state.category.filter(ele => ele._id !== action.payload) }
    }
    case "REMOVE_ALL": {
      return { ...state, category: [] }
    }
    default: {
      return { ...state }
    }
  }

}


export default categoryReducer

