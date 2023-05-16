import * as Yup from "yup"

export const validationRegisterSchema=Yup.object({
    username:Yup.string().min(2).required("Enter your username"),
    email:Yup.string().email().required("Enter your email"),
    password:Yup.string().min(6).required("Enter your password")
})

export const validationLoginSchema=Yup.object({
    email:Yup.string().email().required("Enter your email"),
    password:Yup.string().min(6).required("Enter your password")
})

export const validationCategorySchema=Yup.object({
    name:Yup.string().min(1).required("Enter the item  name"),
   
})

export const validationProfileSchema=Yup.object({
    name:Yup.string().min(1).required("Enter your name"),
    age:Yup.string().min(1).required("Enter your age"),
    occupation:Yup.string().min(1).required("Enter your occupation"),
    bio:Yup.string().min(1).required("Enter your bio"),
   
})

