import React, { useState, useContext } from "react";
import LoginIcon from "../assest/signin.gif"
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom"
import SummaryApi from "../common"
import { toast } from "react-toastify"
import Context from "../context";



const Login = () => {
    const [data, setData] = useState({
        email: "",
        password: ""
    })
    const [showPassword, se]
    return (
        <div className="">Login</div>
    )
}

export default Login;