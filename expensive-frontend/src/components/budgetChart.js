import React from "react";
import { Chart } from "react-google-charts"
import { useSelector } from "react-redux";
import "../App.css"
const BudgetChart = () => {

  const budget = useSelector((state) => {
    return state.budget.budget
  })


  const expense = useSelector((state) => {
    return state.expense.data
  })


  let sum = 0
  expense.map((ele) => {
    return sum = sum + Number(ele.amount)

  })

  const data = [
    ["Task", "Hours per Day"],
    ["Budget", Number(budget.amount)],
    ["Expense", sum],

  ]
  return (
    <div >

      <Chart chartType="PieChart" width={"50%"}
        height={"200px"} data={data} radius={100}
      />

    </div>
  )
}

export default BudgetChart