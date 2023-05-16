import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { startUpdateUser } from "../actions/budgetAction";
//import { useFormik } from "formik";

const Form = (props) => {
  const { handleEdit } = props

  const budget = useSelector((state) => {
    return state.budget.budget
  })


  const [amount, setAmount] = useState(budget.amount ? budget.amount : '')
  const [_id] = useState(budget._id ? budget._id : '')
  const dispatch = useDispatch()



  const handleChange = (e) => {
    setAmount(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const formData = {
      _id: _id,
      amount: amount
    }
    dispatch(startUpdateUser(formData))
    handleEdit()

  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" value={amount} onChange={handleChange} />
        <input type="submit" value="update" />
      </form>
    </div>
  )
}

export default Form