import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { startBudgetUser } from "../actions/budgetAction";
import Form from "./Form";
import { Card ,Button} from "antd";
import "../App.css"


const Budget = () => {
  const [toggle, setToggle] = useState(false)
  const budget = useSelector((state) => {
    return state.budget.budget
  })
  console.log("amount", budget.amount)
  const dispatch = useDispatch()

  const handleEdit = () => {
    setToggle(!toggle)
  }


  useEffect(() => {
    dispatch(startBudgetUser())
  }, [dispatch])
  return (
    <div className="mid">
      <Card style={{
        width: 400,
        backgroundColor: "skyblue",

      }}>
        {
          toggle ?
            <div>
              {
                <div>
                  <Form handleEdit={handleEdit} />
                  <button onClick={handleEdit}>cancel</button>
                </div>

              }
            </div>
            :

            <div>

              <h1>Budget:{budget.amount}</h1>
              <Button type="primary" htmlType="edit" onClick={handleEdit}  >
              Edit
            </Button>
             


            </div>

        }
      </Card>
    </div>
  )
}

export default Budget