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

    const fetchData = async() =>{
        
        const response = await fetch(SummaryApi.addToCartProductView.url,{
            method : SummaryApi.addToCartProductView.method,
            credentials : 'include',
            headers : {
                "content-type" : 'application/json'
            },
        })
       

        const responseData = await response.json()
        console.log(responseData)
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

    const handlepayment = async()=>{
 
        const stripePromise = await loadStripe(process.env.REACT_APP_STRIPE_PUBLIC_KEY)
        const response = await fetch(SummaryApi.payment.url,{
          method : SummaryApi.payment.method,
          credentials : 'include',
          headers : {
             "content-type" : 'application/json'
         },
         body : JSON.stringify({
             cartItems : data,
         })
        })
 
        const responseData = await response.json()
 
        if(responseData?.id){
         stripePromise.redirectToCheckout({sessionId : responseData.id})
        }
 
        console.log("payment response",responseData)
     }

     const totalQty = data.reduce((previousValue,currentValue)=> previousValue + currentValue.quantity,0)
    const totalPrice = data.reduce((preve,curr)=> preve + (curr.quantity * curr?.productId?.sellingPrice),0)
    
    return (
        <div className="container mx-auto">
            <div className="text-center text-lg my-3">
                {
                    data.length === 0 && !loading && (
                        <p className="bg-white py-5">No Data</p>
                    )
                }
            </div>

            <div className="flex flex-col lg:flex-row gap-10 lg:justify-between p-4">
                {/* view product */}
                <div className="w-full max-w-3xl">
                    {
                        loading ?  (
                            loadingCart.map((el, index) => {
                                <div  key={el+"Add To Cart Loading"+index} className='w-full bg-slate-200 h-32 my-2 border border-slate-300 animate-pulse rounded'>

                                </div>
                            })
                        ) : (
                            data.map((product, index) => {
                                return (
                                    <div key={product?._id+"Add To Cart Loading"} className="w-full bg-white h-32 my-2 border border-slate-300  rounded grid grid-cols-[128px,1fr]">

                                    </div>
                                )
                            } )
                        )
                    }
                </div>
            </div>

        </div>
    )
}

export default Cart;