import React, { useEffect, useState } from 'react'
import {Container,Row,Col,Card,Button} from 'react-bootstrap'
import Navbarmenu from '../../components/Navbarmenu'
import '../../App.css'
import axios from 'axios'
import { Link } from 'react-router-dom'

const Dashboard = () => {
    const [product,setProductmen] = useState([]);
    const[menwomen,setMenWomen]  = useState([])
    const[electronics,setElectronic]  = useState([])

    const getProductMen = async()=>{
        const res = await axios.get("https://fakestoreapi.com/products/category/men's clothing");
        setProductmen(res.data)
    }
    const getProductWoMen = async()=>{
        const res = await axios.get("https://fakestoreapi.com/products/category/women's clothing");
        setMenWomen(res.data)
    }
    const getProducElectronic = async()=>{
        const res = await axios.get("https://fakestoreapi.com/products/category/electronics");
        setElectronic(res.data)
    }

    useEffect(()=>{
        getProductMen();
        getProductWoMen();
        getProducElectronic();
    },[])
  return (
    <div>
        <Navbarmenu/>
        <Container>
            <Row className='mt-5'>
            <h2 style={{textTransform:"uppercase"}} className='mb-5'>men's clothing</h2>
                {
                    product && product.map((prod)=>(
                        <Col md="3" key={prod.id}>
                            <Link style={{textDecoration:"none"}} to={`/product-details/${prod.id}`}>
                                <Card className='product-card'>
                                    <Card.Img variant="top" src={prod.image} />
                                    <Card.Body>
                                        <Card.Title>{prod.title}</Card.Title>
                                        <Card.Text>{prod.description.slice(0,50)}...</Card.Text>
                                        <Card.Text style={{fontSize:"16px", color:"#296BFB"}}>Rs. {prod.price}</Card.Text>
                                    </Card.Body>
                                </Card>
                            </Link>
                        </Col>
                    ))
                }
            </Row>
            <Row className='mt-5'>
                <h2 style={{textTransform:"uppercase"}} className='mb-5'>women's clothing</h2>
                {
                    menwomen && menwomen.map((women)=>(
                        <Col md="3" key={women.id}>
                            <Link style={{textDecoration:"none"}} to={`/product-details/${women.id}`}>
                                <Card className='product-card mb-4'>
                                    <Card.Img variant="top" src={women.image} />
                                    <Card.Body>
                                        <Card.Title>{women.title}</Card.Title>
                                        <Card.Text>{women.description.slice(0,50)}...</Card.Text>
                                        <Card.Text style={{fontSize:"16px", color:"#296BFB"}}>Rs. {women.price}</Card.Text>
                                    </Card.Body>
                                </Card>
                            </Link>
                        </Col>
                    ))
                }
            </Row>
            <Row className='mt-5' >
            <h2 style={{textTransform:"uppercase"}} className='mb-5'>electronics</h2>
                {
                    electronics && electronics.map((elec)=>(
                        <Col md="3" key={elec.id}>
                            <Link style={{textDecoration:"none"}} to={`/product-details/${elec.id}`}>
                                <Card className='product-card mb-4'>
                                    <Card.Img variant="top" src={elec.image} />
                                    <Card.Body>
                                        <Card.Title>{elec.title}</Card.Title>
                                        <Card.Text>{elec.description.slice(0,50)}...</Card.Text>
                                        <Card.Text style={{fontSize:"16px", color:"#296BFB"}}>Rs. {elec.price}</Card.Text>
                                    </Card.Body>
                                </Card>
                            </Link>
                        </Col>
                    ))
                }
            </Row>
        </Container>
    </div>
  )
}

export default Dashboard