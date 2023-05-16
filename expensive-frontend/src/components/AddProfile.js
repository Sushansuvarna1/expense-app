import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Input, Button, Card, Modal } from "antd"
import { startUpdateProfile } from "../actions/profileAction";
import { startUpdateProfilePic } from "../actions/profileAction";
import "../App.css"



const AddProfile = () => {
  const profileList = useSelector((state) => {
    return state.profile.profile
  })

  const [modal, setModal] = useState(false)
  const [file, setFile] = useState(profileList.avatar ? profileList.avatar : {})
  const [name, setName] = useState(profileList.name ? profileList.name : '')
  const [age, setAge] = useState(profileList.age ? profileList.age : '')
  const [occupation, setOccupation] = useState(profileList.occupation ? profileList.occupation : '')
  const [bio, setBio] = useState(profileList.bio ? profileList.bio : '')
  //const [_id, setId] = useState(profileList._id ? profileList._id : '')
  const [formError, setFormError] = useState({})

  const errors = {}

  const runValidation = () => {
    if (name.trim().length === 0) {
      errors.name = "name is required"
    } else if (age.trim().length === 0) {
      errors.age = "age is required"
    } else if (occupation.trim().length === 0) {
      errors.occupation = "occupation is required"
    } else if (bio.trim().length === 0) {
      errors.bio = "bio is required"
    }
  }


  const dispatch = useDispatch()



  const showModal = () => {
    setModal(!modal)
  }

  const handleOk = () => {
    setModal(false)
  }


  const handleCancle = () => {
    setModal(false)
  }



  const handleChange = (e) => {
    const attr = e.target.name
    if (attr === "name") {
      setName(e.target.value)
    } else if (attr === "age") {
      setAge(e.target.value)
    } else if (attr === "occupation") {
      setOccupation(e.target.value)
    } else if (attr === "bio") {
      setBio(e.target.value)
    } else if (attr === "file") {
      setFile(e.target.files[0])
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    runValidation()
    if (Object.keys(errors).length === 0) {
      setFormError({})
      const formData = new FormData()
      formData.append("name", name)
      formData.append("age", age)
      formData.append("occupation", occupation)
      formData.append("bio", bio)
      dispatch(startUpdateProfile(formData, profileList._id))
    } else {
      setFormError(errors)
    }
    
  }
  const handlePicSubmit = () => {
   
    const formData = new FormData()
    formData.append("avatar", file)
    console.log('append',formData)
    dispatch(startUpdateProfilePic(formData, profileList._id))
  }
 

  useEffect(() => {
    setName(profileList.name)
    setAge(profileList.age)
    setOccupation(profileList.occupation)
    setBio(profileList.bio)
    setFile(profileList.avatar)
    //setId(profileList._id)

  }, [profileList._id, profileList.name, profileList.age, profileList.occupation, profileList.bio,profileList.avatar])


  return (

    <div>
      <Modal
        visible={modal}
        onOk={handleOk}
        onCancel={handleCancle}
      >
        <Card style={{
          width: 400,
          backgroundColor: "skyblue",
        }}>

          <form onSubmit={handleSubmit}>

            <h1>Profile</h1>

            <label>Name</label><br />
            <Input type="text" style={{ maxWidth: 300 }} value={name} name="name" onChange={handleChange} /> <br />
            {
              formError.name && <span>{formError.name}</span>
            }

            <label>Age</label><br />
            <Input type="text" style={{ maxWidth: 300 }} value={age} name="age" onChange={handleChange} /><br />
            {
              formError.age && <span>{formError.age}</span>
            }
            <label>Occupation</label><br />
            <Input
              type="text" style={{ maxWidth: 300 }} value={occupation} name="occupation" onChange={handleChange} /><br />
            {
              formError.occupation && <span>{formError.occupation}</span>
            }
            <label>Bio</label><br />
            <Input
              type="text" style={{ maxWidth: 300 }} value={bio} name="bio" onChange={handleChange} /><br />
            {
              formError.bio && <span>{formError.bio}</span>
            }
            <Button type="primary" htmlType="submit"   >
              uplaod
            </Button>

          </form>
          <form onSubmit={handlePicSubmit}>
            <Input type="file" palceholder="choose file" name="file" onChange={handleChange} />
            <Button type="primary" htmlType="submit"   >
              uplaod pic
            </Button>
          </form>

        </Card>
      </Modal>
      <div className="edit">
        <Button onClick={showModal}  >Edit</Button>
      </div>

    </div>

  )

}
export default AddProfile