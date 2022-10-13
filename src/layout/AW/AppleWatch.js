import { Route, Link, Routes } from 'react-router-dom'
import Slider from '../Slide/Slider';
import './Apple.css'
import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';

function AppleWatch() {
    const [Watch, setListiPhone] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:3000/Watch').then((res) => {
            setListiPhone(res.data)
        })
    }, [])
    return (
        <div>
            <div className="background">

                <div className='text-center iPhone01'>
                    <h2>Apple Watch</h2>
                </div>
                <div className='apple_slide'>
                    <Slider />
                </div>
                <div className='Menu01'>
                    <ul>
                        <Link to="/Watch">
                            <li>
                                <a href='/'> Tất cả </a>
                            </li>
                        </Link>
                        <Link to="/Watch01">
                            <li>
                                <a href='/'> Apple Watch Ultra </a>
                            </li>
                        </Link>
                        <Link to="/Watch02">
                            <li>
                                <a href='/'> Apple Watch Series </a>
                            </li>
                        </Link>
                    </ul>
                </div>
                <div className='container'>
                    <div className="row noilen">
                        {
                            Watch.map(product => {
                                return (
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

export default AppleWatch;