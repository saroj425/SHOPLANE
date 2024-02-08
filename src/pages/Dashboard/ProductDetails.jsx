import React, { useEffect, useState } from 'react'
import {useParams} from 'react-router-dom';
import axios from 'axios';
import Navbarmenu from '../../components/Navbarmenu'
import {Container,Row,Col,Image} from 'react-bootstrap';

const ProductDetails = () => {
    const [details,setDetails] = useState();
    const [cartvalue,setCartValue] = useState(1);
    const {id} = useParams();
    console.log("ididid",id)
    const getProdDetails = async()=>{
        const res = await axios.get(`https://fakestoreapi.com/products/${id}`);
        setDetails(res.data);
    }
    const addtoCart=()=>{
        console.log("cart Value");
    }
    useEffect(()=>{
        getProdDetails();
    },[])
    console.log("detailsdetailsdetails",details);
  return (
    <div>
        <Navbarmenu props={cartvalue}/>
        <Container>
            <Row className='d-flex'>
                <Col md="6">                    
                    <img src={details ? details.image :""} alt="" width={400}/>
                </Col>
                <Col md="6">
                    <h2 className='mb-3 mt-5'>{details ? details.title :""}</h2>
                    <p className='mb-3'>{details ? details.category : ""}</p>
                    <span className=''><b>RS. {details ? details.price : ""}</b>&nbsp;&nbsp;&nbsp;&nbsp;<b>Rating :{details ? details.rating.rate : ""}</b></span>
                    <p className=''>{details ? details.description : ""}</p>
                    <div>
                        <form className='d-flex'>
                            <select  onChange={(e)=>setCartValue(e.target.value)}>
                                <option value={1}>1</option>
                                <option value={2}>2</option>
                                <option value={3}>3</option>
                                <option value={4}>4</option>
                            </select>
                            <button className='button sub-signup' style={{borderRadius:"0 !important" ,width:"200px"}} onClick={addtoCart}>Add to Cart</button>
                        </form>
                    </div>
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default ProductDetails