import React, { useState } from "react";
import { Pagination } from "antd";
import { useDispatch, useSelector } from "react-redux";
import ExpenseData from "./ExpenseData";
import { startRemoveExpense, startExpenseUpdate, startExpenseSoftDelete, startExpenseUpdateInvoice } from "../actions/expenseAction";
import { Modal, Button } from "antd";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons"
import Swal from 'sweetalert2'
import "../App.css"
//import ExpenseForm from "./ExpenseForm";

const ExpenseDataList = () => {

  const [number, setNumber] = useState(3)
  const [value, setValue] = useState('')
  const dispatch = useDispatch()
  const [modal, setModal] = useState(false)
  const [file, setFile] = useState({})
  const [editId, setEditId] = useState('')


  const expenseList = useSelector((state) => {
    return state.expense.data
  })
  console.log("expenseList", expenseList)

  const removeList = (id) => {
    dispatch(startRemoveExpense(id))
  }

  const removeSoftDelete = (id) => {
    dispatch(startExpenseSoftDelete(id))
  }

  const showModal = (_id) => {
    setModal(!modal)
    setEditId(_id)
  }

  const handleOk = () => {
    setModal(false)
  }


  const handleCancle = () => {
    setModal(false)
  }



  const formSubmission = (formData, editId) => {
    dispatch(startExpenseUpdate(formData, editId))
    showModal()
  }



  const handleInvoiceSubmit = (e) => {
    e.preventDefault()
    const formData = new FormData()
    formData.append("invoice", file)
    dispatch(startExpenseUpdateInvoice(formData, editId))
  }



  const category = useSelector((state) => {
    return state.category.category
  })
  console.log("category", category)



  const handleSliceChange = () => {
    setNumber(number + 1)

  }



  const handleValueChange = (e) => {
    setValue(e.target.value)
  }

  const serachValue = () => {
    return expenseList.filter(ele => ele.name.toLowerCase().includes(value))
  }
  const sliced = serachValue().slice(0, number)

  return (
    <div>
      {

        modal ? <div>
          <Modal
            visible={modal}
            onOk={handleOk}
            onCancel={handleCancle}
          >
            <ExpenseData editId={editId} formSubmission={formSubmission} />
            <Button onClick={showModal}  >cancle</Button>
          </Modal>

        </div>
          : <div >
            <div className="exp">

              {
                expenseList.length > 0 && <form >
                  <input type="text" placeholder="search" value={value} onChange={handleValueChange} />
                </form>
              }
            </div >
            {
              expenseList.length > 0 && <div className="table">
                <table border="1" class="table table-skyblue table-striped" >
                  <thead >
                    <tr>
                      <th >Category Name</th>
                      <th >Item Name</th>
                      <th >Amount</th>
                      <th >Expense date</th>
                      <th > </th>
                      <th > </th>
                      <th > </th>
                   
                      <th >invoice</th>
                    </tr>
                  </thead>

                  <tbody>

                    {
                      sliced.map((ele) => {
                        const categoryName = category.filter((category) => {
                          return ele.categoryId === category._id
                        })

                        console.log(categoryName)

                        const name = categoryName.map((ele) => {
                          return ele.name
                        })

                        return (
                          <tr key={ele._id}>
                            <td className="space">{name}</td>
                            <td className="space">{ele.name}</td>
                            <td className="space">{ele.amount}</td>
                            <td className="space">{ele.date}</td>
                            <td className="space"><EditOutlined style={{ color: "blue" }} onClick={() => {
                              showModal(ele._id)
                            }} /></td>
                            <td className="space"><DeleteOutlined style={{ color: "red" }} onClick={() => {
                              Swal.fire({
                                title: 'Are you sure?',
                                text: "You won't be able to revert this!",
                                icon: 'warning',
                                showCancelButton: true,
                                confirmButtonColor: '#3085d6',
                                cancelButtonColor: '#d33',
                                confirmButtonText: 'Yes, delete it!'
                              }).then((result) => {
                                if (result.isConfirmed) {
                                  removeList(ele._id)
                                }
                              })

                            }

                            } /></td>
                            <td className="space"><DeleteOutlined style={{ color: "green" }} onClick={() => {
                              Swal.fire({
                                title: 'Are you sure?',
                                icon: 'warning',
                                showCancelButton: true,
                                confirmButtonColor: '#3085d6',
                                cancelButtonColor: '#d33',
                                confirmButtonText: 'Yes, delete it!'
                              }).then((result) => {
                                if (result.isConfirmed) {
                                  removeSoftDelete(ele._id)
                                }
                              })


                            }

                            } /></td>
                            {
                              ele.invoice ? <a href={`http://localhost:3055/${ele.invoice}`}
                                target='_blank' rel="noreferrer">{ele.invoice}</a> : (
                                <td >
                                  <form onSubmit={handleInvoiceSubmit}>
                                    <input type="file" palceholder="choose file" onChange={(e) => {
                                      setFile(e.target.files[0])
                                      setEditId(ele._id)
                                    }} />
                                    <input type="submit" />
                                  </form>
                                </td>
                              )

                            }


                          </tr>
                        )

                      })

                    }
                  </tbody>
                </table>
              </div>
            }
            <div className="page">
              {
                expenseList.length > 0 &&

                <Pagination defaultCurrent={1} total={expenseList.length * 10} onChange={handleSliceChange} showQuickJumper={true} />

              }
            </div>

          </div>
      }




    </div>


  )
}

export default ExpenseDataList