import React from 'react';
import '../App.css';
import shoes from './ShoesData';
import NumberFormat from 'react-number-format';
import { BrowserRouter as Router, Routes, Route, Link, Outlet, useParams } from 'react-router-dom'



function LaunchIndex() {
    return (
      <div className='ulist'>
        <ul >
          {Object.entries(shoes).map(([slug, { name, img, price }]) => (
            <li className="list" key={slug}>
              <Link style={{textDecoration:"none", color:"gold"}} to={`/product/${slug}`}>
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

export default LaunchIndex;