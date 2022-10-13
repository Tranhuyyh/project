import Slider from '../Slide/Slider';
import './BodyHome.css'
import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';


function Bodyy() {
    const [iPhone, setListiPhone] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:3000/iPhone_Home').then((res) => {
            setListiPhone(res.data)
        })
    }, [])
    const [Mac, setListMac] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:3000/Mac_Home').then((res) => {
            setListMac(res.data)
        })
    }, [])
    const [Watch, setListWatch] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:3000/Watch_Home').then((res) => {
            setListWatch(res.data)
        })
    }, [])
    const [Amthanh, setListAmthanh] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:3000/Amthanh_Home').then((res) => {
            setListAmthanh(res.data)
        })
    }, [])
    const [Phukien, setListPhukien] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:3000/Phukien_Home').then((res) => {
            setListPhukien(res.data)
        })
    }, [])
    return (
        <div>
            <div>
                <Slider />
            </div>
            <div className='camket'>
                <ul>
                    <li>
                        <a>Mẫu mã đa dạng, chính hãng</a>
                    </li>
                    <li>
                        <a>Giao hàng toàn quốc</a>
                    </li>
                    <li>
                        <a>Bảo hành có cam kết tới 12 tháng</a>
                    </li>
                    <li>
                        <a>Có thể đôi trả tại HK store</a>
                    </li>
                </ul>
            </div>
            {/* ------------iphone------ */}
            <div className='text-center iPhone01'>
                <h2>iPhone</h2>
            </div>
            <div className='container'>
                <div className="row noilen">
                    {
                        iPhone.map(product =>{return (
                            <div className='col-md-3'>
                            <a href="/">
                            <div className="iPhone02">
                                <img className="p-5" src={product.image} />
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
            {/* ------Mac---------- */}
            <div className='text-center iPhone01'>
                <h2>Mac</h2>
            </div>
            <div className='container'>
                <div className="row noilen">
                {
                        Mac.map(product =>{return (
                            <div className='col-md-3'>
                            <a href="/">
                            <div className="iPhone02">
                                <img className="p-5" src={product.image} />
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
            {/* -------Watch------ */}
            <div className='text-center iPhone01'>
                <h2>Watch</h2>
            </div>
            <div className='container'>
                <div className="row noilen">
                {
                        Watch.map(product =>{return (
                            <div className='col-md-3'>
                            <a href="/">
                            <div className="iPhone02">
                                <img className="p-5" src={product.image} />
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
            {/* -------amthanh------ */}
            <div className='text-center iPhone01'>
                <h2>Âm thanh</h2>
            </div>
            <div className='container'>
                <div className="row noilen">
                {
                        Amthanh.map(product =>{return (
                            <div className='col-md-3'>
                            <a href="/">
                            <div className="iPhone02">
                                <img className="p-5" src={product.image} />
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

            {/* -------phukien------ */}
            <div className='text-center iPhone01'>
                <h2>Phụ kiện</h2>
            </div>
            <div className='container'>
                <div className="row noilen">
                {
                        Phukien.map(product =>{return (
                            <div className='col-md-3'>
                            <a href="/">
                            <div className="iPhone02">
                                <img className="p-5" src={product.image} />
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
            {/* -----diachi----- */}
            <div className="Diachi container-md">
                <div className=' border-light'>
                    <p className="text-center text-light font-weight-bold"> Có mặt tại 6 cửa hàng </p>
                </div>

                <div className='container container_last'>
                    <div className="row">
                        <div className="col-lg-6">
                            <p>HK Store Lương Ngọc Quyến, Số 477, đường Lương Ngọc Quyến , Phường Phan Đình Phùng, Thành phố Thái Nguyên, Tỉnh Thái Nguyên, Việt Nam</p>
                            <br />
                            <p>HK Store 52 Nguyễn Trãi Xem chỉ đường, Số 52, Nguyễn Trãi, Phường 9, Thành phố Cà Mau, Tỉnh Cà Mau, Việt Nam</p>
                            <br />
                            <p>HK Store Trần Hưng Đạo, Số 170A Trần Hưng Đạo, Phường Mỹ Xuyên, Thành phố Long Xuyên, Tỉnh An Giang, Việt Nam</p>
                        </div>
                        <div className="col-lg-6">
                            <p>HK Store 389 Ngọc Hồi, Số 387 - 389 - 391, đường Ngọc Hồi, Thị Trấn Văn Điền, Huyện Thanh Trì, Thành phố Hà Nội, Việt Nam</p>
                            <br />
                            <p>HK Store Hà Huy Tập, Khối 1, phường Hà Huy Tập, Thành Phố Hà Tĩnh, Tỉnh Hà Tĩnh </p>
                            <br />
                            <p>HK Store Hạ Long, Số 537 đường Hạ Long, Phường Bãi Cháy, Thành phố Hạ Long, Tỉnh Quảng Ninh, Việt Nam</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Bodyy;