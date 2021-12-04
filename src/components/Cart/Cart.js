import React, { useState, useEffect } from 'react'
import {
    useParams
  } from "react-router-dom";
import Product from '../Product/Product'
// import './style.css'

function Cart() {
    const [product, setProduct] = useState([]);
    const [loading, setLoading] = useState(true);
    let { id } = useParams();
    useEffect(() => {
        fetch("https://fakestoreapi.com/products/"+id)
            .then((r) => r.json().then(res => {
                setProduct(res);
                setLoading(false);
            })).catch((e)=>{
                console.log(e);
                alert("error");
            });
    }, []);
    return (
        <div style={{display:"flex", flexDirection:"column",alignItems:"center", width:"100%", paddingTop:"3.2rem"}}>
            <h4 style={{textAlign:"center"}}>
                <span style={{position: "absolute", left:"1.2rem"}}><a style={{    padding: "5px 15px",backgroundColor: "#28a745",color: "#fff",borderRadius: "3px",marginLeft: "-2px",width: "100%"}} href="/">Back</a></span>
                <span>Added to cart successfully</span>
            </h4>
            {
                loading? <h1 style={{paddingTop:"30vh"}}>Loading ...</h1>:<Product cart={true} {...product}/>
            }
        </div>
    )
}

export default Cart
