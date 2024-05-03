import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Row, Col } from "react-bootstrap"
import ProductCard from './ProductCard'

const Products = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        axios.get("https://dummyjson.com/products?limit=100")
            .then((res) => {
                // console.log(res.data)
                setProducts(res.data.products)
            })
            .catch((err) => {
                console.log(err)
            })
    }, [])
    return (
        <div style={{marginTop:"90px"}}>
            <h1 >Products</h1>

            <Row>


                {
                    products.length > 0 ?
                        products &&
                        products.map((product, ind) => {
                            return (
                                <Col md={4} key={ind}>
                                    <ProductCard product={product} />
                                </Col>
                            )
                        })
                        : <h1>Loading....</h1>

                }

            </Row>

        </div>
    )
}

export default Products