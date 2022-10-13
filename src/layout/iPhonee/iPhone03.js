import { Route, Link, Routes } from 'react-router-dom'
import './iPhone.css'
import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';
import Slider from '../Slide/Slider';

function Phone03() {
    const [iPhone12, setListiPhone] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:3000/iPhone?category_id=3').then((res) => {
            setListiPhone(res.data)
        })
    }, [])
    return (
        <div className="background">
            <div className='text-center iPhone01'>
                <h2>iPhone</h2>
            </div>
            <div className='amthanh_slide'>
                    <Slider />
                </div>
            <div className='Menu01'>
                <ul>
                    <Link to="/iPhone">
                        <li>
                            <a href='/'> Tất cả </a>
                        </li>
                    </Link>
                    <Link to="/iPhone14">
                        <li>
                            <a href='/'> iPhone 14 </a>
                        </li>
                    </Link>
                    <Link to="/iPhone13">
                        <li>
                            <a href='/'> iPhone 13 </a>
                        </li>
                    </Link>
                    <Link to="/iPhone12">
                        <li>
                            <a href='/'> iPhone 12 </a>
                        </li>
                    </Link>
                    <Link to="/iPhone11">
                        <li>
                            <a href='/'> iPhone 11 </a>
                        </li>
                    </Link>
                </ul>
            </div>

            {/* ---hang1---- */}
            <div className='container'>
                <div className="row noilen">
                {
                        iPhone12.map(product =>{return (
                            <div className='col-md-4 mt-3'>
                            <a href="/">
                            <div className="iPhone02">
                                <img src={product.image} />
                                <h5 className="Name"> {product.name}</h5>
                                <span className="Price">{product.price}</span>
                                <p className="New">{product.note}</p>
                            </div>
                        </a>
                        </div>
                        )
                    })
                    }

                </div>
            </div>
        </div>
    );
}

export default Phone03;