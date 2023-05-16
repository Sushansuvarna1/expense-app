import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { startRemoveList } from "../actions/categoryAction";
import "../App.css"
import { DeleteOutlined } from "@ant-design/icons"
import Swal from 'sweetalert2'



const CategoriesList = (props) => {

  const list = useSelector((state) => {
    return state.category.category
  })

  console.log("list", list)
  const dispatch = useDispatch()

  const removeList = (id) => {

    dispatch(startRemoveList(id))
  }


  return (
    <div className="cat">

      
        {
          list.length > 0 && <h2>CategoriesList-{list.length}</h2>
        }

        <ul>
          {
            list.length > 0 && list.map((ele) => {
              return <h6 key={ele._id}><b>{ele.name}</b><DeleteOutlined style={{ color: "red" }} onClick={() => {
                Swal.fire({
                  title: 'Are you sure?',
                  
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
                
               
              }} /></h6>
            })

          }
        </ul>

    
    </div>
  )
}

export default CategoriesList