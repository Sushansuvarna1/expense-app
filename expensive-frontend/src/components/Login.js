import React from "react";
import { useFormik } from 'formik'
import { validationLoginSchema } from "../validationSchema";
import { useDispatch, useSelector } from "react-redux"
import { startLoginUser } from "../actions/userAction";
import { Input, Button, Card } from "antd"
import "../App.css"

const Login = (props) => {
  const { handleAuth } = props

  const error = useSelector((state) => {
    return state.user.errors
  })

  const dispatch = useDispatch()
  const initialValues = {

    email: "",
    password: ""

  }

  const { values, handleChange, handleSubmit, errors, touched } = useFormik({
    initialValues: initialValues,
    validationSchema: validationLoginSchema,
    onSubmit: (values) => {
      console.log(values)
      dispatch(startLoginUser(values, props.history.push, handleAuth))

    }

  })



  return (
    <div className="form">

      <Card style={{
        width: 400,
        backgroundColor: "skyblue",
      }}>
        <form onSubmit={handleSubmit}>

          <h1>Login Here</h1>

          <label>email</label><br />
          <Input type="text" value={values.email} name="email" onChange={handleChange} /><br />
          {
            errors.email && touched.email ? <span>{errors.email} </span> : null
          }

          {
            error && <span>{error.errors}</span>
          }

          <label>password</label><br />
          <Input type="text" value={values.password} name="password" onChange={handleChange} /><br />
          {
            errors.password && touched.password ? <span>{errors.password} </span> : null
          }

          {
            error && <span>{error.errors}</span>
          }
          <div className="logo" >
            <Button type="primary" htmlType="login"   >
              Login
            </Button>
          </div>
        </form>
      </Card>

    </div>

  )
}
export default Login