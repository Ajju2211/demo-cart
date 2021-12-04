import React from 'react'
import Rating from './Rating'
import './style.css'
function Product(props) {
    return (
        <div class="card">
            <div className="type-row">
                <div>
                    <span>Gender</span>:&nbsp; Men
                </div>
                <div>
                    <span>Color</span>:&nbsp; Black
                </div>
            </div>
            <img src={props.image} alt={props.title} />
            {/* <img src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8c2hvZXMlMjBuaWtlfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60" alt="" /> */}
            <div class="card-body">
                <div class="row">
                    <div class="card-title">
                        <h4>{props.title}</h4>
                        <h3 style={{display:"flex",justifyContent:"space-between"}}>
                            <span>${props.price}</span>
                            <span className="rating"><Rating value={props.rating.rate || 0} count={props.rating.count} /></span>
                        </h3>
                    </div>
                </div>
                <hr />
                <p>
                    {props.description}
                </p>
                <div class="btn-group">
                    <div class="btn">
                        {props.cart ? <a href="#">Buy now</a>: <a href={"/cart/"+12}>Add to cart</a>}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Product
