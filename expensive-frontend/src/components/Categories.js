import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";
import { validationCategorySchema } from "../validationSchema";
import { startCategoryUser } from "../actions/categoryAction";
import { Card,Button } from "antd";
import "../App.css"



const Categories = () => {


  const dispatch = useDispatch()
  const category = useSelector((state) => {
    return state.category.category
  })



  const initialValues = {
    name: ''
  }

  const { values, handleChange, handleSubmit, errors, touched, resetForm } = useFormik({
    initialValues: initialValues,
    validationSchema: validationCategorySchema,
    onSubmit: (values) => {
      dispatch(startCategoryUser(values))
      console.log("values", values)
    }

  })

  useEffect(() => {
    resetForm({ values: '' })
  }, [category, resetForm])


  return (
    <div className="left">
      <Card style={{
        width: 400,
        backgroundColor: "skyblue",
      }}>
        <form onSubmit={handleSubmit}>
          <label><b>Categories</b></label><br />
          <input type="text" value={values.name} name="name" onChange={handleChange} /><br />
          {errors.name && touched.name ? <span>{errors.name} </span> : null}

          <div className="category">
          <Button type="primary" htmlType="Add">
            Add
          </Button>
          </div>
        </form>
      </Card>
    </div>

  )
}

export default Categories