import React from "react";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";




const ExpenseData = (props) => {
  const { editId, formSubmission } = props
   console.log('id',editId)
  const expense = useSelector((state) => {
    return state.expense.data
  })


  console.log("expense", expense)

  const [name, setName] = useState( '')
  const [amount, setAmount] = useState( '')
  const [categoryId, setCategoryId] = useState( '')
  const [date, setdate] = useState( '')
  const [_id,setId] = useState( '')

  console.log("date", date)


  const data = useSelector((state) => {
    return state.category.category
  })

  const expenseList=expense.filter((ele)=>{
     return ele._id===editId
  })

 


  const hanldeNameChange = (e) => {
    setName(e.target.value)
  }

  const hanldeAmountChange = (e) => {
    setAmount(e.target.value)
  }

  const hanldeIdChange = (e) => {
    setCategoryId(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const formData = {

      name: name,
      amount: amount,
      categoryId: categoryId,
      date: date

    }
    formSubmission(formData,editId)
    console.log("d", formData)


  }

  useEffect(() => {
    setAmount('')
    setCategoryId('')
    setName('')
    setdate('')


  }, [expense])

  useEffect(() => {
    if(editId){
      const map=expenseList.find((ele)=>{
        return ele
      })
      setAmount(map.amount)
      setCategoryId(map.categoryId)
      setName(map.name)
      setdate(map.date)
      setId(map._id)
    }
   


  }, [editId])

  const pickDateChange = (e) => {
    setdate(e.target.value)
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>name</label><br />
      <input type="text" value={name} onChange={hanldeNameChange} /><br />
      <label>Amount</label><br />
      <input type="text" value={amount} onChange={hanldeAmountChange} /><br />
      <input type="date" value={date} onChange={pickDateChange} /><br />
      <select value={categoryId} onChange={hanldeIdChange}>
        <option value=''>Select category</option>

        {
          data.map((ele) => {
            return <option key={ele._id} value={ele._id}  >{ele.name}</option>
          })
        }

      </select>

      <input type="submit" />

    </form>
  )
}

export default ExpenseData