import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, Outlet, useParams } from 'react-router-dom'
import './App.css';
import NumberFormat from 'react-number-format';

var cart = [];

function App() {
  return (
    <div>
      <Router>
        <div className="nav-bar">
          <Link to='/' className="home">Home </Link>
          <Link to='product' className="product">Products</Link>
          <Link to='cart' className="myCart">Show Cart</Link>
        </div>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='product' element={<Launch />}>
            <Route path='/' element={<LaunchIndex />}></Route>
            <Route path=":slug" element={<LaunchShoe />}></Route>
          </Route>
          <Route path='cart' element={<Cart />}></Route>
          <Route path='*' element={<NotFound />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

function Home() {
  return (
    <div className = 'home-heading'>
      <h2>Welcome to the Shoe Store</h2>
      <div className='home-page'>
        <img src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/89120cc5-0213-4c35-8224-d60469ce348f/air-max-270-react-se-shoe-9PzxFV.jpg" alt="pic"></img>
      </div>
    </div>
  )
}

function NotFound() {
  return (
    <div>
      <h1> Page Not Found</h1>
    </div>
  )
}
function Launch() {
  return (
    <div>
      <Outlet />
    </div>
  )
}

function LaunchIndex() {
  return (
    <div className='ulist'>
      <ul >
        {Object.entries(shoes).map(([slug, { name, img, price }]) => (
          <li className="list" key={slug}>
            <Link style={{textDecoration:"none", color:"#F13C20"}} to={`/product/${slug}`}>
              <h4 className="name">{name}</h4>
              <img className='img' src={img} alt={name} />
              <h3>Price: <NumberFormat value={price} displayType={'text'} thousandSeparator={true} prefix={'PKR '} /></h3>
            </Link>
          </li>

        ))}
      </ul>
    </div >
  )
}

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
      <input id="quantity" type="number" placeholder="Enter quantity"></input>
      <button onClick={addToCart}>Add to cart</button>
    </div>
  )
  
  function addToCart() {
    var quantity = document.getElementById("quantity");
    var cartDetails = {"name":name, "image":img, "quantity":quantity.value, "rate":price, "amount":quantity.value*price}
    cart.push(cartDetails)
  }

}

function Cart(){
  var total=0;
  cart.map((val,index)=>{
    total+=val.amount
  })
  if(cart.length>0) {
    return(
      <div style={{color: '#F13C20', backgroundColor:"rgba(236, 236, 236,0.45)", margin:'-2px 0px 0px 0px'}}>
      <h1 style={{textAlign:"center"}}>My Cart</h1>
      <div className="cartHeadings">
        <h3>Product</h3>
        <h3>Quantity</h3>
        <h3>Rate</h3>
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
      <div style={{textAlign:"center", color:"#F13C20", fontSize:"30px", marginTop:"10px"}}>No items to show</div>
    )
  }
  
}

const shoes = {
  "air-max-alpha-trainer-gym": {
    name: "Air Max Alpha 2",
    img: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/dkcd56uzxvqg4sank4gf/air-max-alpha-trainer-2-training-shoe-PRDr42.jpg",
    price: 10000
  },

  "air-zoom": {
    name: "Air Zoom",
    img: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/i1-f07701e3-6343-4ff2-bdc6-9103aa7ec9b6/air-zoom-superrep-hiit-class-shoe-sdWCtF.jpg",
    price: 8000
  },

  "free-metcon-3": {
    name: "Metcon 3",
    img: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/i1-06aec217-c0a0-4aae-9a21-8384275bab36/free-metcon-3-training-shoe-Xd4wDs.jpg",
    price: 12000
  },

  "nike-superrep-go": {
    name: "Nike SuperRep Go",
    img: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/i1-73ec2548-82c2-45f6-a395-15acdfa502d0/superrep-go-training-shoe-WxK0Dl.jpg",
    price: 15000
  },

  "nike-air-monach-IV": {
    name: "Nike Air Monach IV",
    img: "https://c.static-nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/b6gpll6zin5i8ayra255/air-monarch-iv-lifestyle-gym-shoe-VrTWXJJn.jpg",
    price: 5000
  },

  "nike-metcon-5": {
    name: "Nike Metcon 5",
    img: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/8fa05448-4f8d-492c-8718-6fe4df8678b9/metcon-5-amp-training-shoe-hsVc1C.jpg",
    price: 18000
  }
}

export default App;
