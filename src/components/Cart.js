import React from 'react';
import '../App.css';
import cart from './CartData';
import NumberFormat from 'react-number-format';


function Cart(){
    var total=0;
    cart.map((val,index)=>{
      total+=val.amount
    })
    if(cart.length>0) {
      return(
        <div style={{color: 'gold', backgroundColor:"black"}}>
        <h1 style={{textAlign:"center"}}>Your Shopping Cart</h1>
        <div className="cartHeadings">
          <h3>Product</h3>
          <h3>Quantity</h3>
          <h3>Price</h3>
          <h3>Amount</h3>
        </div>
        {cart.map((val, index)=>{
          return(
              <div className="cartItems">
              {/* <li><img style={{width:"100px"}} src={val.image} alt={val.name}></img></li> */}
              <li className="cartItems-Name">{val.name}</li>
              <li>{val.quantity}</li>
              <li><NumberFormat value={val.rate} displayType={'text'} thousandSeparator={true} prefix={'PKR '} /></li>
              <li><NumberFormat value={val.amount} displayType={'text'} thousandSeparator={true} prefix={'PKR '} /></li>
            </div>
          )
        })}
        <div className="cartTotal">
        <h2>Your total: <NumberFormat value={total} displayType={'text'} thousandSeparator={true} prefix={'PKR '} /></h2>
        </div>
        </div> 
        )
    }
  
    else {
      return(
        <div style={{textAlign:"center", color:"gold", backgroundColor:"black", fontSize:"30px", marginTop:"10px"}}>No items to show</div>
      )
    }
    
  }

export default Cart;