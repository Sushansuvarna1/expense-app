import React from "react";
import { useFormik } from 'formik'
import { validationRegisterSchema } from "../validationSchema";
import { useDispatch } from "react-redux"
import { startGetUser } from "../actions/userAction";
import { Input, Button, Card } from "antd"
import "../App.css"

const Register = (props) => {

  const dispatch = useDispatch()
  const initialValues = {
    username: "",
    email: "",
    password: "",


  }

  const { values, handleChange, handleSubmit, errors, touched } = useFormik({
    initialValues: initialValues,
    validationSchema: validationRegisterSchema,
    onSubmit: (values) => {
      dispatch(startGetUser(values, props.history.push))

    }

  })

  return (
    <div >

      <div className="form" >

        <Card style={{
          width: 400,
          backgroundColor: "skyblue",
        }}>

          <form onSubmit={handleSubmit}>

            <h1>Register Here</h1>


            <label>username</label><br />
            <Input type="text" style={{ maxWidth: 300 }} value={values.username} name="username" onChange={handleChange} /> <br />
            {errors.username && touched.username ? <span>{errors.username} </span> : null}

            <label>email</label><br />
            <Input type="text" style={{ maxWidth: 300 }} value={values.email} name="email" onChange={handleChange} /><br />
            {
              errors.email && touched.email ? <span>{errors.email} </span> : null
            }
            <label>password</label><br />
            <Input
              type="text" style={{ maxWidth: 300 }} value={values.password} name="password" onChange={handleChange} /><br />
            {
              errors.password && touched.password ? <span>{errors.password} </span> : null
            }

            <div className="logo" >

              <Button type="primary" htmlType="submit"   >
                Register
              </Button>
            </div>

          </form>
        </Card>

      </div>
    </div>





  )
}
export default Register