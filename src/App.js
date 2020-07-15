import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, Outlet, useParams } from 'react-router-dom'
import './App.css';

function App() {
  return (
    <div>
      <Router>
        <div className="nav-bar">
          <Link to='/' className="home">Home </Link> {' '}
          <Link to='product' className="launch">Products</Link>
        </div>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='product' element={<Launch />}>
            <Route path='/' element={<LaunchIndex />}></Route>
            <Route path=":slug" element={<LaunchShoe />}></Route>
          </Route>
          <Route path='*' element={<NotFound />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

function Home() {
  return (
    <div className = 'home-heading'>
      <h2>Welcome to Shoe Store</h2>
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
        {Object.entries(shoes).map(([slug, { name, img }]) => (
          <li className="list" key={slug}>
            <Link to={`/product/${slug}`}>
              <h4 className="name">{name}</h4>
              <img className='img' src={img} alt={name} />
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

  const { name, img } = shoe;
  return (
    <div className="product-detail">
      <h2>{name}</h2>
      <div className="product-details">
        <img src={img} alt={name} />
      </div>
    </div>
  )
}
const shoes = {
  "air-max-alpha-trainer-gym": {
    name: "Air Max Alpha 2",
    img: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/dkcd56uzxvqg4sank4gf/air-max-alpha-trainer-2-training-shoe-PRDr42.jpg",
  },

  "air-zoom": {
    name: "Air Zoom",
    img: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/i1-f07701e3-6343-4ff2-bdc6-9103aa7ec9b6/air-zoom-superrep-hiit-class-shoe-sdWCtF.jpg",
  },

  "free-metcon-3": {
    name: "Metcon 3",
    img: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/i1-06aec217-c0a0-4aae-9a21-8384275bab36/free-metcon-3-training-shoe-Xd4wDs.jpg"
  },

  "nike-superrep-go": {
    name: "Nike SuperRep Go",
    img: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/i1-73ec2548-82c2-45f6-a395-15acdfa502d0/superrep-go-training-shoe-WxK0Dl.jpg"
  },

  "nike-air-monach-IV": {
    name: "Nike Air Monach IV",
    img: "https://c.static-nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/b6gpll6zin5i8ayra255/air-monarch-iv-lifestyle-gym-shoe-VrTWXJJn.jpg"
  },

  "nike-metcon-5": {
    name: "Nike Metcon 5",
    img: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/8fa05448-4f8d-492c-8718-6fe4df8678b9/metcon-5-amp-training-shoe-hsVc1C.jpg"
  }
}


export default App;
