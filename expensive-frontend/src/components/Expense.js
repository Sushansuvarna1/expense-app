import React, { useEffect, useState } from "react";
import AddExpense from "./Addxpense";
import ExpenseDataList from "./ExpenseDataList";
import { useDispatch, useSelector } from "react-redux";
import "../App.css"
import { startExpenseList } from "../actions/expenseAction";
import { Modal, Button } from "antd";
import BudgetChart from "./budgetChart";
import ExpenseChart from "./ExpenseChat";
import ExpenseBarChart from "./ExpenseBarChart";





const Expense = () => {
  const [modal, setModal] = useState(false)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(startExpenseList())
  }, [dispatch])

 
  const showModal = () => {
    setModal(!modal)
  }
  const handleOk = () => {
    setModal(false)
  }


  const HandleCancle = () => {
    setModal(false)
  }
 
  const expense = useSelector((state) => {
    return state.expense.data
  })
  console.log("length", expense.length)

  return (

    <div >
      <Modal
        visible={modal}
        isOpen={modal}
        onOk={handleOk}
        onCancel={HandleCancle}
      >
        <AddExpense />

      </Modal>
      {
        Object.keys(expense).length >0 && <div className="expense">

        <BudgetChart />

      </div>
      }
      <div className="add">
        <Button onClick={showModal} >Add</Button>
      </div>
      <ExpenseDataList />
      {
        expense.length>0 && <div className="chart">
        {
          expense.length >= 5 ? <ExpenseBarChart /> : <ExpenseChart />

        }

      </div>
      }
    </div>

  )
}

export default Expense