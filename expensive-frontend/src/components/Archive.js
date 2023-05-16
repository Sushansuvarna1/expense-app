import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { startSoftExpenseList } from "../actions/expenseAction";
import { DeleteOutlined } from "@ant-design/icons"
import { startRemoveExpense } from "../actions/expenseAction";
import { startSoftRestore } from "../actions/expenseAction";
import "../App.css"

const Archive = () => {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(startSoftExpenseList())
  }, [dispatch])


  const softData = useSelector((state) => {
    return state.expense.soft
  })
  const category = useSelector((state) => {
    return state.category.category
  })

  const removeSoftDelete = (id) => {

    dispatch(startRemoveExpense(id))
  }
  const softRestore = (id) => {
    dispatch(startSoftRestore(id))
  }

  return (
    <div className="table">
      {
        softData.length > 0 &&
        <table  border="1" class="table table-skyblue table-striped">
          <thead>
           <tr>
           <th>Category Name</th>
            <th>Item Name</th>
            <th>Amount</th>
            <th>Expense date</th>
           </tr>
          </thead>
          <tbody>
            {
              softData.map((expense) => {

                const newArr = category.filter((ele) => {
                  return ele._id === expense.categoryId
                })
                console.log("new", newArr)
                const newData = newArr.map((ele) => {
                  return ele.name
                })
                return (
                  <tr key={expense._id}>
                    <td>{newData}</td>
                    <td>{expense.name}</td>
                    <td>{expense.amount}</td>
                    <td>{expense.date.slice(0, 10)}</td>
                    <td><DeleteOutlined style={{ color: "red" }} onClick={() => {
                      removeSoftDelete(expense._id)
                    }

                    } /></td>
                    <td><DeleteOutlined style={{ color: "green" }} onClick={() => {
                      softRestore(expense._id, softData)
                    }

                    } /></td>
                     <td>{expense.invoice}</td>
                  </tr>

                )

              })

            }

          </tbody>
        </table>
      }
    </div>
  )
}
export default Archive