import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { startDeleteAccount } from "../actions/deleteAction";
import { Card } from "antd"
import { DeleteOutlined } from "@ant-design/icons"
import "../App.css"


const Account = (props) => {
  const { handleAuth } = props
  const account = useSelector((state) => {
    return state.user
  })
  console.log("account", account.user)
  const dispatch = useDispatch()

  const handleClick = (props, handleAuth) => {
    dispatch(startDeleteAccount(props, handleAuth))
  }
  return (

    Object.keys(account.user).length > 0 ?
      <div className="form">
        <Card style={{
          width: 500,
          backgroundColor: "white",
        }}>
          <h2>User Account</h2>
          < h5>UserName&nbsp;&nbsp; : <em>{account.user.username}</em></h5>
          <h5>Email&nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;:<em> {account.user.email}</em></h5>

          <DeleteOutlined onClick={() => {
            handleClick(props.history.push, handleAuth)
          }} />
        </Card>
      </div>
      :
      <div>
        <p>User is not logged in</p>

      </div>




  )
}

export default Account