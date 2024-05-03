import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Col, Row, Button, Carousel } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import {useDispatch} from "react-redux"



const Product = () => {
    const [product, setProduct] = useState([])
    const dispatch= useDispatch()
    const { productid } = useParams()
    useEffect(() => {
        axios.get(("https://dummyjson.com/products/" + productid))
            .then((res) => {
                setProduct(res.data)
            })
            .catch((err) => {
                console.log(err)
            })


    }, [productid])
    return (
        <div style={{marginTop:"100px"}}>
            <Row>
                <Col md={6}>
                    <div>
                        <img src={product.thumbnail} />        
                    </div>
                </Col>
                <Col md={6}>
                    <div style={{ textAlign: "left" }}>
                        <h3>{product.title}</h3>
                        <p>{product.description}</p>
                        <h4>Price:{product.price}</h4>
                        <h6>Discount Percentage:{product.discountPercentage}</h6>
                        <p>Rating:{product.rating}</p>
                        <p>Stock:{product.stock}</p>
                        <h5>{product.brand}</h5>
                        <p>{product.category}</p>
                        <Button variant="primary" className='me-3'><Link className='text-light' to={"/addtocart"} style={{textDecoration:"none"}}>Add To Cart</Link></Button>

                        <Button><Link className="text-light" to={"/products"}>Back</Link></Button>
                    </div>




                </Col>



            </Row>

        </div>
    )
}

export default Product