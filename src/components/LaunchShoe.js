import React from 'react';
import '../App.css';
import {useParams} from 'react-router-dom';
import shoes from './ShoesData';
import NumberFormat from 'react-number-format';
import cart from './CartData';

function LaunchShoe() {
    const { slug } = useParams();
    const shoe = shoes[slug];
  
    if (!shoe) {
      return (
        <h2>
          Not Found
        </h2>
      )
    }
  
    const { name, img, price } = shoe;
    return (
      <div className="product-detail">
        <h2>{name}</h2>
        <div className="product-details">
          <img src={img} alt={name} />
        </div>
        <h3 id="price">Price: <NumberFormat value={price} displayType={'text'} thousandSeparator={true} prefix={'PKR '} /></h3>
        <input id="quantity" type="number" placeholder="How much do you want"></input>
        <button onClick={addToCart} style={{marginLeft:"2vw", backgroundColor:"gold", color:"black", height:"30px", border:"none"}}>Add to cart</button>
      </div>
    )
    
    function addToCart() {
      var quantity = document.getElementById("quantity");
      var cartDetails = {"name":name, "image":img, "quantity":quantity.value, "rate":price, "amount":quantity.value*price}
      cart.push(cartDetails)
    }
  
  }


export default LaunchShoe;