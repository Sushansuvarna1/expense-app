import { createStore, combineReducers, applyMiddleware } from "redux"
import thunk from "redux-thunk"
import userReducer from "../reducers/userReducers"
import categoryReducer from "../reducers/categoryReducers"
import budgetReducer from "../reducers/budgetReducers"
import expenseReducers from "../reducers/expenseReducers"
import profileReducer from "../reducers/profileReducer"

const configStore = () => {
  const store = createStore(combineReducers({
    user: userReducer,
    category: categoryReducer,
    budget: budgetReducer,
    expense: expenseReducers,
    profile: profileReducer
  }), applyMiddleware(thunk))
  return store
}

export default configStore