import axios from "axios"

export const startExpenseData=(formData)=>{
   return(dispatch)=>{
    axios.post("http://localhost:3055/user/expense",formData,{
    headers:{
      'authentication' :  localStorage.getItem("token")
  }

  })
  .then((response)=>{
    const result=response.data
    console.log("result",result)
    dispatch(addExpense(result))
  })
  .catch((err)=>{
    console.log(err.message)
  })
   }
}

const addExpense=(result)=>{
    return{
        type:"ADD_EXPENSE",
        payload:result
    }
}

export const startExpenseList=()=>{
    return(dispatch)=>{
      axios.get("http://localhost:3055/user/expenselist",{
    headers:{
      'authentication' :  localStorage.getItem("token")
  }

  })
  .then((response)=>{
    const result=response.data
    console.log("expenseList",result)
    dispatch(listExpense(result))
  })
  .catch((err)=>{
    console.log(err.message)
  })
   }
}

const listExpense=(data)=>{
  return{
    type:"LIST_EXPENSE",
    payload:data
  }
}
   


export const startRemoveExpense=(id)=>{
  return(dispatch)=>{
    axios.delete(`http://localhost:3055/user/expensedelete/${id}`,{
  headers:{
    'authentication' :  localStorage.getItem("token")
}

})
.then((response)=>{
  const result=response.data
  
 dispatch(removeExpense(result._id))
 dispatch(removesoftExpense(result._id))
  
})
.catch((err)=>{
  console.log(err.message)
})
 }
}

const removeExpense=(id)=>{
   return{
    type:"REMOVE_EXPENSE",
    payload:id
   }
}
const removesoftExpense=(id)=>{
  return{
   type:"SOFT_EXPENSE",
   payload:id
  }
}

export const startExpenseUpdate=(formData,_id)=>{
  
  return(dispatch)=>{
   axios.put(`http://localhost:3055/user/expenseupdate/${_id}`,formData,{
   headers:{
     'authentication' :  localStorage.getItem("token")
 }

 })
 .then((response)=>{
   const expense=response.data
   dispatch(editExpense(expense))
   
 })
 .catch((err)=>{
   console.log(err.message)
 })
  }
}

const editExpense=(data)=>{
  console.log("l",data)
  return{
    type:"EDIT_EXPENSE",
    payload:data
  }
}
export const startExpenseUpdateInvoice=(formData,_id)=>{
  console.log("id",_id)
  return(dispatch)=>{
   axios.put(`http://localhost:3055/user/expenseupdateinvoice/${_id}`,formData,{
   headers:{
     'authentication' :  localStorage.getItem("token")
 }

 })
 .then((response)=>{
   const invoice=response.data
   console.log("invoice",invoice)
   dispatch(startExpenseList())
   
 })
 .catch((err)=>{
   console.log(err.message)
 })
  }
}



export const startExpenseSoftDelete=(id)=>{
  return(dispatch)=>{
    axios.delete(`http://localhost:3055/user/softdelete/${id}`,{
  headers:{
    'authentication' :  localStorage.getItem("token")
}

})
.then((response)=>{
  const result=response.data
  console.log("res",result)
 dispatch(addSoftExpense(id))
// dispatch(deleteSoftExpense(result))
})
.catch((err)=>{
  console.log(err.message)
})
 }
}

const addSoftExpense=(id)=>{
//console.log(data,data._id)
  return{
    type:"DELETE_SOFT",
    payload:id
  }
}


export const startSoftExpenseList=()=>{
  return(dispatch)=>{
    axios.get("http://localhost:3055/user/softexpenselist",{
  headers:{
    'authentication' :  localStorage.getItem("token")
}

})
.then((response)=>{
  const result=response.data
  console.log("softlist",result)
 dispatch(softlistExpense(result))
})
.catch((err)=>{
  console.log(err.message)
})
 }
}

const softlistExpense=(list)=>{
  return{
    type:"SOFT_LIST",
    payload:list
  }
}

export const startSoftRestore=(id)=>{
 
  return(dispatch)=>{
    axios.get(`http://localhost:3055/user/softexpenserestore/${id}`,{
  headers:{
    'authentication' :  localStorage.getItem("token")
}

})
.then((response)=>{
  const result=response.data
  console.log("restore",result)
 dispatch(softRestoreExpense(id))
 dispatch(softDelete(id))
 dispatch(startExpenseList())
})
.catch((err)=>{
  console.log(err.message)
})
 }
}

const softRestoreExpense=(id)=>{
  return {
    type:"SOFT_RESTORE",
    payload:id
  }
}
const softDelete=(id)=>{
  return {
    type:"DATA_DELETE",
    payload:id
  }
}






