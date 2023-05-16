import React, { useEffect } from "react";
import Budget from "./Budget";
import Categories from "./Categories";
import CategoriesList from "./CatergoryList";
import { startListCategory } from "../actions/categoryAction";
import { useDispatch } from "react-redux";
import "../App.css"






const Setting = (props) => {

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(startListCategory())
  }, [dispatch])
  return (
    <div className="App">
      <Budget />
      <Categories />
      <CategoriesList />
    </div>

  )
}

export default Setting