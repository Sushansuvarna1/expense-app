import axios from "axios";

export const startDeleteAccount=(props,handleAuth)=>{
    return(dispatch)=>{
      axios.all([
        axios.delete('http://localhost:3055/user/deleteaccount',{
         headers:{
             'authentication' :  localStorage.getItem("token")
         }
         }),
           axios.delete('http://localhost:3055/user/deleteprofile',{
           headers:{
               'authentication' :  localStorage.getItem("token")
           }
           }),
            axios.delete('http://localhost:3055/user/deletecategory',{
            headers:{
                'authentication' :  localStorage.getItem("token")
            }
            }),
            axios.delete('http://localhost:3055/user/deleteexpense',{
             headers:{
                 'authentication' :  localStorage.getItem("token")
             }
             }),
           axios.delete('http://localhost:3055/user/deletebudget',{
             headers:{
                 'authentication' :  localStorage.getItem("token")
             }
             })],{
    
 
   })
    
  .then((response)=>{
    const result=response.data
    console.log("deleteAcccount",result)
    localStorage.removeItem("token")
      props('/register')
      handleAuth()
   dispatch(RemoveAll())
  })
  .catch((err)=>{
    console.log(err.message)
  })
}
}

const RemoveAll=()=>{
  return{
    type:"REMOVE_ALL"
  }
}