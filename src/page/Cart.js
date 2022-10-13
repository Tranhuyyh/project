import { Link } from 'react-router-dom';
import './Cart.css';


function Cart() {
    
    return ( 

    <div className="appHK">
        <section>
            <div className="yourCart content">
                <Link to="/" className="buymore"><i className="fas fa-chevron-left"></i> Mua thêm sản phẩm khác</Link>
                <span> Giỏ hàng của bạn</span>
            </div>
            <div className="middleCart">
                    <ul className="listing-cart">
                        <li className="product-item">
                            <div className="imgsp">
                                <a href="/"> <img
                                        src="https://cdn.tgdd.vn/Products/Images/42/245545/s16/iPhone-14-plus-topzone%20(5)-650x650.png"
                                        alt=""/> </a>
                                <button>Xóa</button>
                            </div>
                            <div className="infosp">
                                <div className="name-price">
                                    <div className="name-container">
                                        <a href="/">iPhone 14 pro max</a>
                                    </div>
                                    <span>20.490.000đ
                                        <strike>20.990.000đ</strike>
                                    </span>
                                </div>

                                <div className="promo">
                                    <aside>
                                        <small className="promotionName">
                                            Thu cũ Đổi mới: Giảm đến 1.5 triệu (Tuỳ model máy cũ, kèm giảm giá qua cổng
                                            thanh toán)
                                        </small>
                                        <small className="promotionName">
                                            Nhập mã SPPMWG giảm 10% tối đa 100.000đ khi thanh toán qua Ví ShopeePay
                                        </small>
                                        <small className="promotionName">
                                            Giảm 20% gói Bảo hành Mở rộng 12 tháng
                                        </small>
                                            <small className="promotionName">
                                                Giảm 15% gói Bảo hiểm rơi vỡ 6 tháng
                                            </small>
                                            <small className="promotionName">
                                                Giảm 15% gói Bảo hiểm rơi vỡ 6 tháng
                                            </small>
                                            <label for="">5 khuyến mãi</label>
                                    </aside>
                                    <div className="buttons_added">
                                        <input className="minus is-form" type="button" value="-"/>
                                        <input aria-label="quantity" className="input-qty" max="100" min="1" name=""
                                            type="number" value="1"/>
                                        <input className="plus is-form" type="button" value="+"/>
                                    </div>

                                </div>
                            </div>
                        </li>

                        <li className="product-item">
                            <div className="imgsp">
                                <a href="/"> <img
                                        src="https://cdn.tgdd.vn/Products/Images/42/245545/s16/iPhone-14-plus-topzone%20(5)-650x650.png"
                                        alt=""/> </a>
                                <button>Xóa</button>
                            </div>
                            <div className="infosp">
                                <div className="name-price">
                                    <div className="name-container">
                                        <a href="/">iPhone 14 pro max</a>
                                    </div>
                                    <span>20.490.000đ
                                        <strike>20.990.000đ</strike>
                                    </span>
                                </div>

                                <div className="promo">
                                    <aside>
                                        <small className="promotionName">
                                            Thu cũ Đổi mới: Giảm đến 1.5 triệu (Tuỳ model máy cũ, kèm giảm giá qua cổng
                                            thanh toán)
                                        </small>
                                        <small className="promotionName">
                                            Nhập mã SPPMWG giảm 10% tối đa 100.000đ khi thanh toán qua Ví ShopeePay
                                        </small>
                                        <small className="promotionName">
                                            Giảm 20% gói Bảo hành Mở rộng 12 tháng
                                        </small>
                                            <small className="promotionName">
                                                Giảm 15% gói Bảo hiểm rơi vỡ 6 tháng
                                            </small>
                                            <small className="promotionName">
                                                Giảm 15% gói Bảo hiểm rơi vỡ 6 tháng
                                            </small>
                                            <label for="">5 khuyến mãi</label>
                                    </aside>
                                    <div className="buttons_added">
                                        <input className="minus is-form" type="button" value="-"/>
                                        <input aria-label="quantity" className="input-qty" max="100" min="1" name=""
                                            type="number" value="1"/>
                                        <input className="plus is-form" type="button" value="+"/>
                                    </div>

                                </div>
                            </div>
                        </li>
                    </ul>
                    <div className="infor-customer">
                        <h4>Thông tin khách hàng</h4>
                        <form className="form-customer">
                            <div className="sex-customer">


                                <div className="fillinform">
                                    <div className="fillname">
                                        <input placeholder="Họ và Tên" maxlength="50" id="cusName" name="cusName"
                                            required="required" className="capitalize untouched pristine required"/>

                                    </div>
                                    <div className="fillname phoneNumber">
                                        <input placeholder="Số điện thoại" type="tel" maxlength="10" id="cusPhone"
                                            name="cusPhone" required="required"
                                            className="untouched pristine required phoneNumber__input"/>
                                    </div>
                                </div>
                                </div>
                        </form>
                    </div>
                    <div className="choosegetgoods">
                        <h4>Chọn hình thứ nhận hàng</h4>
                        <div className="click-choose">
                            <div data-tab="tab1" className="choose-link current">
                                <input type="radio" name="choose"/>
                                <span>Ship tận nơi</span>
                            </div>
                            <div data-tab="tab2" className="choose-link">
                                <input type="radio" name="choose"/>
                                <span>Nhận tại cửa hàng</span>
                            </div>
                        </div>
                        <div className="address">
                            <h4>Nhập địa chỉ</h4>
                            <input type="text"
                                placeholder="Thành phố-Huyện/Tỉnh-Xã/Phường-Số nhà, tên đường"/>
                        </div>
                    </div>
                    <div className="tong">
                        <h2>Tổng: <b>40.000.000đ</b></h2>


                    </div>
                    <div className="dathang">
                        <button className="dathang1">Đặt Hàng</button>
                    </div>

                </div>
            
        </section>
    </div>
    
     );
}

export default Cart;