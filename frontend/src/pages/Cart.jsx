import React, {useState, useContext, useEffect} from "react";
import SummaryApi from "../common";
import Context from "../context";
import displayINRCurrency from "../helpers/displayCurrency";
import {MdDelete} from "react-icons/md"
// import {loadStripe} from "stripe"

const Cart = () => {
    const [data,setData] = useState([])
    const [loading,setLoading] = useState(false)
    const context = useContext(Context)
    const loadingCart = new Array(4).fill(null)

    const fetchData = async() => {
        const response = await (SummaryApi.addToCartProductView.url, {
            method: SummaryApi.addToCartProductView.method,
            credentials: 'include',
            headers: {
                "content-type": "application/json"
            },
        })

        const responseData = await response.json()

        if(responseData.success){
            setData(responseData.data)
        }
    }
    const handleLoading = async() =>{
        await fetchData()
    }

    useEffect(()=>{
        setLoading(true)
        handleLoading()
         setLoading(false)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    const increaseQty = async(id, qty) => {
        const response = await fetch(SummaryApi.updateCartProduct.url, {
            method: SummaryApi.updateCartProduct.method,
            credentials: 'include',
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({
                _id: id,
                quantity: qty + 1
            })
        })

        const responseData = await response.json()


        if(responseData.success){
            fetchData()
        }
    }

    const decreaseQty = async(id, qty) => {
        const response = await fetch(SummaryApi.updateCartProduct.url, {
            method: SummaryApi.updateCartProduct.method,
            credentials: 'include',
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({
                _id: id,
                quantity: qty - 1
            })
        })

        const responseData = await response.json()


        if(responseData.success){
            fetchData()
        }
    }

    const deleteCartProduct = async(id)=>{
        const response = await fetch(SummaryApi.deleteCartProduct.url,{
            method : SummaryApi.deleteCartProduct.method,
            credentials : 'include',
            headers : {
                "content-type" : 'application/json'
            },
            body : JSON.stringify(
                {   
                    _id : id,
                }
            )
        })

        const responseData = await response.json()

        if(responseData.success){
            fetchData()
            context.fetchUserAddToCart()
        }
    }


    
    return (
        <div className="">Cart</div>
    )
}

export default Cart;