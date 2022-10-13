import { Route, Link, Routes, useParams } from 'react-router-dom'
import Slider from '../Slide/Slider';
import './iPhone.css'
import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';
import * as iPhoneservice from "../../service/iPhoneservice"


function Main() {

    const [iPhone, setListiPhone] = useState([]);
    useEffect(() => {
            const getDataformAPI = async()=>{
                const data = await iPhoneservice.getAll();
                setListiPhone(data);
            }
            getDataformAPI(); 
           
    }, [])
    return (
        <div className="background">

            <div className='text-center iPhone01'>
                <h2>iPhone</h2>
            </div>
            <div className='iPhone_slide'>
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
          
            <div className='container'>
                <div className="row noilen">
                {
                        iPhone.map(product =>{return (
                            <div className='col-md-4 mt-3' key={product.id}>
                           <Link to={`/detail/${product.id}`}> 
                            <div className="iPhone02"  >
                                <img src={product.image} />
                                <h5 className="Name"> {product.name}</h5>
                                <span className="Price">{product.price}</span>
                               <p className="New">{product.note}</p>
                            </div>
                        </Link>
                        </div>
                        )
                    })
                    }
                </div>
            </div>
        </div>
    );
}

export default Main;