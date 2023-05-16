const initialValues = {
    data: [],
    errors: {},
    soft: []
}

const expenseReducers = (state = initialValues, action) => {
  
    switch (action.type) {
        case "ADD_EXPENSE": {
            return { ...state, data: [...state.data, action.payload] }
        }
        case "LIST_EXPENSE": {
            return { ...state, data:action.payload }
        }
        case "REMOVE_EXPENSE": {
            return { ...state, data: state.data.filter(ele => ele._id !== action.payload) }
        }
        case "SOFT_EXPENSE": {
            return { ...state, soft: state.soft.filter(ele => ele._id !== action.payload) }
        }
        case "DELETE_SOFT": {
            return { ...state, data: state.data.filter(ele => ele._id !== action.payload) }
        }
        case "SOFT_LIST": {
            return { ...state, soft: action.payload }
        }
        case "SOFT_RESTORE": {
            return { ...state, data: [...state.data, action.payload] }
        }
        case "DATA_DELETE": {
            return { ...state, soft: state.soft.filter(ele => ele._id !== action.payload) }
        }
        case "REMOVE_ALL": {
            return { ...state, data: [] }
        }
        case "EDIT_EXPENSE": {
            return {
                ...state, data: state.data.map((ele) => {
                    if (ele._id === action.payload._id) {
                        return { ...ele, ...action.payload }
                    } else {
                        return { ...ele }
                    }
                })
            }
        }
        default: {
            return { ...state }
        }
    }
}

export default expenseReducers