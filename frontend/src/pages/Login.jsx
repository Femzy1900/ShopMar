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
    const [showPassword, setShowPassword] = useState(false)
    const [fetchUserDetails, fetchUserAddToCart] = useContext(Context)
    console.log("fetchUserDetails", fetchUserDetails)
    const navigate = useNavigate()

    const handleOnChange = (e) => {
        const { name, value } = e.target
        setData((prev) => {
            return {
                ...prev,
                [name]: value
            }
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        const dataResponse = await fetch(SummaryApi.signIn.url, {
            method: SummaryApi.signIn.method,
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(data)
        })

        const dataApi = await dataResponse.json()

        if (dataApi.success) {
            toast.success(dataApi.message)
            navigate("/")
            fetchUserDetails();
            fetchUserAddToCart()
        }

        if (dataApi.error) {
            toast.error(dataApi.message)
        }
    }
    return (
        <div className="">Login</div>
    )
}

export default Login;