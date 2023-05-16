import React from "react";
import { useSelector } from "react-redux";
import { Card } from "antd";
import "../App.css"


const ListProfileData = () => {
  // const[file,setFile]=useState({})
  const data = useSelector((state) => {
    return state.profile.profile
  })
  console.log("p", data)

  return (
    <div className="form">
      {
        Object.keys(data).length > 0 &&
        <div>
          <Card style={{
            width: 400,
            backgroundColor: "white",
          }}>
            <h2>My Profile</h2>
            <h5>Name&nbsp; : {data.name}</h5>
            <h5>Age&nbsp; : {data.age}</h5>
            <h5>Occupation&nbsp; : {data.occupation}</h5>
            <h5> Bio&nbsp; : {data.bio}</h5>
            {
              data.avatar ? (
                <img width="200x" src={`http://localhost:3055/${data.avatar}`} alt="" />
              ) : (
                <img width="200x" src={'https://i.stack.imgur.com/l60Hf.png'} alt="" />
              )
            }

          </Card>
        </div>

      }
    </div>
  )
}
export default ListProfileData