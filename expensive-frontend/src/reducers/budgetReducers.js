
const initialValue = {

  budget: {},

}

const budgetReducer = (state = initialValue, action) => {
  switch (action.type) {

    case "SET_BUDGET": {
      return { ...state, budget: { ...state.budget, ...action.payload } }
    }
    case "SET_UPDATE": {
      return { ...state, budget: { ...state.budget, ...action.payload } }
    }
    case "REMOVE_ALL": {
      return { ...state, budget: {} }
    }

    default: {
      return { ...state }
    }
  }
}

export default budgetReducer