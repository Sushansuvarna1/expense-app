//import { Card } from "antd";
import React from "react";
import { Chart } from "react-google-charts"
import { useSelector } from "react-redux";

const ExpenseChart = () => {

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

  const options = {
    title: "My Daily Activities",
    pieHole: 0.4,
    is3D: false,
  }




  return (
    <div>

      <Chart
        chartType="PieChart" width={"50%"}
        height={"200px"} data={data}
        options={options}
      />

    </div>
  )
}
export default ExpenseChart