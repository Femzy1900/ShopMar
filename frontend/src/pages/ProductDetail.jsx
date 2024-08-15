import React, { useCallback, useContext, useEffect, useState } from 'react'
import  { useNavigate, useParams } from 'react-router-dom'
import SummaryApi from '../common'
import { FaStar } from "react-icons/fa";
import { FaStarHalf } from "react-icons/fa";
import displayINRCurrency from '../helpers/displayCurrency';
import addToCart from '../helpers/addToCart';
import Context from '../context';


const ProductDetails = () => {
    const [data , setData] = useState({
        productName : "",
        brandName : "",
        category : "",
        productImage : [],
        description : "",
        price : "",
        sellingPrice : ""
    })

    const params = useParams()
    const [loading, setLoading] = useState(true)
    const productImageListLoading = new Array(4).fill(null)
    const [activeImage,setActiveImage] = useState("")

    const [zoomImageCoordinate,setZoomImageCoordinate] = useState({
        x : 0,
        y : 0
    })
    const [zoomImage,setZoomImage] = useState(false)

    const { fetchUserAddToCart } = useContext(Context)

    const navigate = useNavigate()


    const fetchProductDetails = async() => {

    }

    

    return (
        <div className="">ProductDetails</div>
    )
}

export default ProductDetails;