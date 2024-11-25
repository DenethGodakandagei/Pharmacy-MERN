import * as yup from "yup";

const passwordRoule= /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}$/;

export const basicSchema = yup.object().shape({
    fname: yup.string().required("your frist name is required"),
    lname: yup.string().required("your last name is required"),
    email: yup.string().email().required('Please Enter a valid E-mail'),
    accounttype : yup
    .string()
    .oneOf(["buyer", "seller"], "")
    .required("Required"),
    password :yup
        .string()
        .min(6)
        .matches(passwordRoule, {message: "Please create a strong password"})
        .required("Required"),
    confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords must match")
    .required("Required"),
});


export const loginSchema = yup.object().shape({
   
    email: yup.string().email().required('Please Enter a valid E-mail'),
   
    password :yup
        .string()
        .min(6)
        .matches(passwordRoule, {message: "Please create a strong password"})
        .required("Required"),
  
});