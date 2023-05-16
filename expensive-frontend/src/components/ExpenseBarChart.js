import React from "react";
import { Chart } from "react-google-charts"
import { useSelector } from "react-redux";

const ExpenseBarChart = () => {

  const expense = useSelector((state) => {
    return state.expense.data
  })
  const category = useSelector((state) => {
    return state.category.category
  })

  let result = [['categornName', 'amount']]

  category.forEach((ele) => {
    let sum = 0
    expense.forEach((category) => {
      if (ele._id === category.categoryId) {
        sum = sum + Number(category.amount)
      }
    })
    result = [...result, [ele.name, sum]]
  })





  const data = result

  return (
    <div>

      <Chart
        chartType="Bar" width={"50%"}
        height={"200px"} data={data}

      />
    </div>
  )
}

export default ExpenseBarChart