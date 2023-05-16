import React from "react";
import ExpenseData from "./ExpenseData";
import { useDispatch } from "react-redux";
import { startExpenseData } from "../actions/expenseAction";

const AddExpense = () => {
   const dispatch = useDispatch()
   const formSubmission = (formData) => {
      dispatch(startExpenseData(formData))
   }
   return (

      <ExpenseData formSubmission={formSubmission} />
   )

}

export default AddExpense