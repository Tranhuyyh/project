import { Route, Link, Routes } from 'react-router-dom'
import './Mac.css'
import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';
import Slider from '../Slide/Slider';


function Mac01() {
    const [Mac, setListMac] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:3000/Mac?category_id=1').then((res) => {
            setListMac(res.data)
        })
    }, [])
    return (
        <div>
            <div className="background">
                <div className='text-center iPhone01'>
                    <h2>Mac</h2>
                </div>
                <div className='amthanh_slide'>
                    <Slider />
                </div>
                <div className='Menu01'>
                    <ul>
                        <Link to="/Mac">
                            <li>
                                <a href='/'> Tất cả</a>
                            </li>
                        </Link>
                        <Link to="/Mac01">
                            <li>
                                <a href='/'> MacBook Pro </a>
                            </li>
                        </Link>
                        <Link to="/Mac02">
                            <li>
                                <a href='/'> MacBook Air </a>
                            </li>
                        </Link>
                        <Link to="/Mac03">
                            <li>
                                <a href='/'> Mac mini </a>
                            </li>
                        </Link>
                    </ul>
                </div>
                <div className='container'>
                    <div className="row noilen">
                    {
                        Mac.map(product =>{return (
                            <div className='col-md-4 mt-3'>
                            <a href="/">
                            <div className="iPhone02">
                                <img src={product.image} />
                                <h5 className="Name"> {product.name}</h5>
                                <span className="Price">{product.price}</span>
                               
                            </div>
                        </a>
                        </div>
                        )
                    })
                    }
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Mac01;