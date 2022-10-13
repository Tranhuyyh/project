import { Route, Link, Routes } from 'react-router-dom'
import './Amthanh.css'
import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';
import Slider from '../Slide/Slider';

function At01() {
    const [iPhone, setListiPhone] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:3000/Amthanh?category_id=1').then((res) => {
            setListiPhone(res.data)
        })
    }, [])
    return (
        <div>
            <div className="background">
                <div className='text-center iPhone01'>
                    <h2>Âm thanh</h2>
                </div>
                
                <div className='amthanh_slide'>
                    <Slider />
                </div>
                <div className='Menu01'>
                    <ul>
                        <Link to="/Amthanh">
                            <li>
                                <a href='/'> Tất cả </a>
                            </li>
                        </Link>
                        <Link to="/Amthanh01">
                            <li>
                                <a href='/'> AirPods </a>
                            </li>
                        </Link>
                        <Link to="/Amthanh02">
                            <li>
                                <a href='/'> Beats </a>
                            </li>
                        </Link>
                    </ul>
                </div>
                <div className='container'>
                    <div className="row noilen">
                        {
                            iPhone.map(product => {
                                return (
                                    <div className='col-md-4 mt-3'>
                                        <a href="/">
                                            <div className="iPhone02">
                                                <img className='w-50' src={product.image} />
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

export default At01;