import React, { useEffect, useState } from 'react'
import {useParams} from 'react-router-dom';
import axios from 'axios';

const ProductDetails = () => {
    const [details,setDetails] = useState();
    const {id} = useParams();
    console.log("ididid",id)
    const getProdDetails = async()=>{
        const res = await axios.get(`https://fakestoreapi.com/products/${id}`);
        setDetails(res.data);
    }
    useEffect(()=>{
        getProdDetails();
    },[])
    console.log("detailsdetailsdetails",details);
  return (
    <div>
        {
            details && details.map && details.map((det)=>(
                <p>{det.title}</p>
            ))
        }
    </div>
  )
}

export default ProductDetails