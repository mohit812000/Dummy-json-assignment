import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import ProductCard from './ProductCard'

const Category = () => {
    const [category, setCategory] = useState([])
    const { categoryname } = useParams()
    useEffect(() => {
        axios.get("https://dummyjson.com/products/category/" + categoryname)
            .then((res) => {
                setCategory(res.data.products)
            })
            .catch((err) => {
                console.log(err)
            })
    }, [categoryname])
    return (
        <div style={{marginTop:"100px"}}>
            <h1 className='mb-4'>Category:{categoryname}</h1>

            <Row>
                {
                    category &&
                    category.map((category, ind) => {
                        return (
                            <Col md={4} key={ind}>
                                <ProductCard product={category} />
                            </Col>

                        )

                    })

                }
            </Row>

        </div>
    )
}

export default Category