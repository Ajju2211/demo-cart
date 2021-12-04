import React, { useState, useEffect } from 'react'
import Product from '../Product/Product'
import './style.css'

function HomePage() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
            .then((r) => r.json().then(res => {
                setProducts(res);
                setLoading(false);
            })).catch(()=>{
                alert("error");
            });
    }, []);
    return (
        <div className="main-wrapper">
            {
                loading ? <h1>Loading...</h1>:
                products.map((p) => <Product {...p} />)
            }
        </div>
    )
}

export default HomePage
