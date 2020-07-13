import React from 'react'

function Product(props) {
    return (
        <div>
            <h3>Product's name : {props.name}</h3>
            <h3>Product's price : {props.price}</h3>
            <h3>Product's description : {props.description}</h3>
        </div>
    )
}

export default Product
