import { useParams } from 'react-router-dom';
import  './Detail.css'
import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';
import * as iPhoneservice from "../service/iPhoneservice"

function Detailip() {
  let {id} =useParams();
    

    const [iPhone, setListiPhone] = useState({});
    useEffect(() => {
        const getDataformAPI = async()=>{
            const data = await iPhoneservice.find(id);
            setListiPhone(data);
        }
        getDataformAPI(); 
       
}, [])
  
    
    
    

    return ( 
        <div className="container-fluid detail">
      
        
       
        <div className="img">
            
            <div className="img_big"><img src={iPhone.image} alt=""/></div>
            <div className="right"></div>
            <div className="img_small">
                <ul>
                    <li><img src={iPhone.image} alt=""/></li>
                    <li><img src={iPhone.image} alt=""/></li>
                    <li><img src={iPhone.image} alt=""/></li>
                    <li><img src={iPhone.image} alt=""/></li>
                    <li><img src={iPhone.image} alt=""/></li>
                </ul>
            </div>
        </div>
        <div className="infor">
            <div className="Name">
                <h1>{iPhone.name}</h1>
            </div>
          

            <p className="sale">{iPhone.price} <span>{iPhone.price_old}</span></p>
            
            
           
            <button className='mr-1' type="submit">Mua ngay</button>
            <button className='addCart'><i className="fas fa-cart-plus"></i></button>
         
            <div className="giovang">
                <p>Khuyến mãi Giá và khuyến mãi dự kiến áp dụng
                    đến 23:59 | 16/09</p>
                <p>Giảm đến 1,500,000đ khi tham gia thu cũ đổi mới
                    (Không áp dụng kèm giảm giá qua VNPAY)</p>
                <p>Giảm 50% giá gói cước 1 năm (Vina350/Vina500)
                    cho Sim VinaPhone trả sau (Trị giá đến 3 triệu)</p>
                <p>Giảm 50% gói Bảo hành Mở rộng 12 tháng Xem chi
                    tiết</p>
                <p>Giảm đến 1,500,000đ khi tham gia thu cũ đổi mới
                    (Không áp dụng kèm giảm giá qua VN</p>
                <p> Nhập mã TGDD giảm 5% tối đa 200.000đ cho đơn
                    hàng từ 500.000đ trở lên khi thanh toán qua Ví Moca trên ứng dụng Grab</p>
                <p> Nhập mã SPPMWG giảm 10% tối đa 100.000đ khi
                    thanh toán qua Ví ShopeePay</p>
                <p> Giảm đến 1,500,000đ khi tham gia thu cũ đổi
                    mới (Không áp dụng kèm giảm giá qua VNPAY) </p>
                <hr />
                <p>(*) Giá hoặc khuyến mãi không áp dụng trả góp
                    lãi suất đặc biệt (0%, 0.5%, 1%)</p>
            </div>
            <h4>Ưu đãi thanh toán</h4>
            <div className="payment">
                <a>
                    <div className="vnpay">
                        <h5><span>VN</span>PAY</h5>
                        <p>Giảm 300.000₫</p>
                        <p>Sản phẩm iPhone</p>
                    </div>
                </a>
                <a>
                    <div className="vnpay">

                        <h5>EXIMBANK
                        </h5>
                        <p>Giảm 500.000₫</p>
                        <p>Sản phẩm từ 3 triệu</p>
                    </div>
                </a>
            </div>
        </div>
    
     
      
    </div>
     );
}

export default Detailip;
