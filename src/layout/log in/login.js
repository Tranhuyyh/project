import './login.css'
import { Route, Link, Routes } from 'react-router-dom'

function Login() {
    return (
        <div className="d-md-flex half abcde">
            <div className='container'>
                <div className="row align-items-center justify-content-center">
                    <div className="col-md-12">
                        <div className="form-block mx-auto">
                            <div className="text-center mb-5">
                                <h3 className="text-uppercase+">Đăng nhập <strong> </strong></h3>
                            </div>
                            <form action="#" method="post">
                                <div className="form-group first">
                                    <label for="username">Email</label>
                                    <input type="text" className="form-control" placeholder="your-email@gmail.com"
                                        id="username" />
                                </div>
                                <div className="form-group last mb-3">
                                    <label for="password">Mật Khẩu</label>
                                    <input type="password" className="form-control" placeholder="Your Password" id="password" />
                                </div>

                                <div className="d-sm-flex mb-5 align-items-center">
                                    <input type="checkbox" checked="checked" />
                                    <label className="control control--checkbox mb-3 mb-sm-0"><span className="caption"> Lưu tài
                                        khoản</span>

                                        <div className="control__indicator"></div>
                                    </label>

                                </div>

                                <input type="submit" value="Đăng nhập" className="btn btn-block py-2 btn-primary" />

                                <span className="text-center my-3 d-block">Hoặc</span>


                                <div className="">
                                    <a href="#" className="btn btn-block py-2 btn-facebook fb mauchu ">
                                        <span className="fab fa-facebook"></span>  Đăng nhập với facebook</a>

                                    <a href="#" className="btn btn-block py-2 btn-google gg mauchu ">
                                        <span className="fab fa-google"></span>  Đăng nhập với Google</a>

                                    <a href="#" className="btn btn-block bg-black btn-tiktok tt mauchu">
                                        <span className="fab fa-tiktok"></span>  Đăng nhập với Tik Tok</a>

                                </div>
                                <br />
                                <a>
                                    <span className='Huy mauchuden'>Bạn chưa có tài khoản?</span>
                                    <Link to="/Register"> <span className='Hai'>Đăng Ký</span></Link></a>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;