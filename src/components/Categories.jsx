import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Categories = () => {
    const [categories, setCategories] = useState([])
    useEffect(() => {
        axios.get("https://dummyjson.com/products/categories")
            .then((res) => {
                // console.log(res.data)
                setCategories(res.data)
            })
            .catch((err) => {
                console.log(err)
            })
    })
    return (
        <div style={{marginTop:"90px"}}>
            <h1>Categories</h1>
            <ol style={{ textAlign: "left" }}>
                {
                    categories &&
                    categories.map((category, ind) => {
                        return (
                            <li key={ind} style={{ color: "blue" }}><Link to={"/category/" + category} style={{ textDecoration: "none",fontSize:"20px" }}> {category}</Link></li>
                        )
                    })
                }
            </ol>

        </div>
    )
}

export default Categories