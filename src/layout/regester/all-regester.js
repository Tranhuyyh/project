import './all-regester.css'
import { Route, Link, Routes } from 'react-router-dom'

function Register() {
    return (

        <div className="container abcd">
            <div className="row align-items-center justify-content-center">
                <div className="col-md-12">
                    <div className="form-block mx-auto">
                        <div className="text-center mb-5 mt-3">
                            <h3 className="text-uppercase+">Đăng Ký <strong> </strong></h3>
                        </div>
                        <form action="#" method="post">
                            <div className="form-group first">
                                <label for="username">Tên tài khoản</label>
                                <input type="text" className="form-control" placeholder="Email" id="username" />
                            </div>
                            <div className="form-group last mb-3">
                                <label for="password">Mật Khẩu</label>
                                <input type="password" className="form-control" placeholder="mật khẩu" id="password" />
                            </div>
                            <div className="form-group last mb-3">
                                <label for="password">Xác nhận mật khẩu</label>
                                <input type="password" className="form-control" placeholder="xác nhận mật khẩu" id="password" />
                            </div>


                            <div className="d-sm-flex mb-5 align-items-center">
                                <input type="checkbox" checked="checked" />
                                <label className="control control--checkbox mb-3 mb-sm-0"><span className="caption"> Lưu</span>

                                    <div className="control__indicator"></div>
                                </label>
                            </div>

                            <input type="submit" value="Đăng Ký" className="btn btn-block py-2 btn-primary maudangki" />
                            <br />
                            <a>
                                <span className='Huy mauchuden'>Bạn đã có tài khoản?</span>
                                <Link to="/Login"> <span className='Hai'>Đăng Nhập</span></Link></a>
                        </form>
                    </div>
                </div>

            </div>
        </div>

    );
}

export default Register;