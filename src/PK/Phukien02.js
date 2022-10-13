import { Route, Link, Routes } from 'react-router-dom'
import './index.css'
import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';
import Slider from '../layout/Slide/Slider';

function Phukien02() {
    const [iPhone, setListiPhone] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:3000/Phukien?category_id=2').then((res) => {
            setListiPhone(res.data)
        })
    }, [])
    return (
        <div>
            <div className="background">
                <div className='text-center iPhone01'>
                    <h2>Phụ kiện</h2>
                </div>
                <div className='amthanh_slide'>
                    <Slider />
                </div>
                <div className='Menu01'>
                    <ul>
                        <Link to="/Phukien">
                            <li>
                                <a href='/'> Tất cả </a>
                            </li>
                        </Link>
                        <Link to="/Phukien01">
                            <li>
                                <a href='/'> Cáp sạc, pin </a>
                            </li>
                        </Link>
                        <Link to="/Phukien02">
                            <li>
                                <a href='/'> Ốp lưng </a>
                            </li>
                        </Link>
                    </ul>
                </div>
                <div className='container'>
                    <div className="row ">
                    {
                        iPhone.map(product =>{return (
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

export default Phukien02;