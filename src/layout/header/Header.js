import { Route, NavLink, Link, Routes } from 'react-router-dom'

import './Header.css'



function Header() {


    return (
        <div>
            <div className="Head">
                <Link to="/">
                    <div className="logo01">
                        <img src="https://img.upanh.tv/2022/09/18/pic1.png" />
                    </div>
                </Link>

                <div className='logo02'>
                    <img src="https://img.upanh.tv/2022/09/18/Tao.jpg" />
                </div>
                <div className='Menu'>
                    <ul>
                        <Link to="/iPhone">
                            <li>
                                <a href='/'> iPhone </a>
                            </li>
                        </Link>
                        <Link to="/Mac">
                            <li>
                                <a href='/'> Mac </a>
                            </li>
                        </Link>
                        <Link to="/Watch">
                            <li>
                                <a href='/'> Watch </a>
                            </li>
                        </Link>
                        <Link to="/Amthanh">
                            <li>
                                <a href='/'> Âm thanh </a>
                            </li>
                        </Link>
                        <Link to="/Phukien">
                            <li>
                                <a href='/'> Phụ kiện </a>
                            </li>
                        </Link>
                        <Link to="/About">
                            <li>
                                <a href='/'> Giới thiệu </a>
                            </li>
                        </Link>

                    </ul>
                </div>

                <div className="bg-dangerdanger w-50">
                    <Link to="/Cart">
                        <div className="cart">
                            <i className="fas fa-shopping-bag"></i>
                        </div>
                    </Link>

                    <div className="search">
                        <input type='text' className='nhap' placeholder='Search....' />
                        <i className="fas fa-search search1"></i>
                    </div>

                    <Link to="/Login">
                        <div className="Login">
                            <i className="fas fa-user"></i>
                        </div>
                    </Link>
                </div>

            </div>
        </div>
    );
}

export default Header;