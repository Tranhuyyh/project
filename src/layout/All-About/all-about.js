import './all-About.css';
import { Link } from 'react-router-dom'

function About() {
    return (

        <div className="container-fluid2">
            <div className='container-fluid3'>
                <div className="img_big">
                    <div className="img_1">
                        <div className="demo">
                            <img src="https://cdn.tgdd.vn/Files/2022/09/30/1473177/cau-hinh-iphone-14-pro-max-2-760x367.jpg" alt="" />

                            <div className="title1">
                                <p>Cách chơi Hit The Island trên Dynamic Island iPhone14 Pro, iPhone14 Pro Max cực kì hay ho và
                                    thú vị</p>
                            </div>
                        </div>
                    </div>


                    <div className="img_2">
                        <div className="img1">
                            <div className="demo1">
                                <img src="https://cdn.tgdd.vn/Files/2022/10/04/1473950/top1macbooksinhvien-318x154.jpg" alt="" />
                                <p>Kiểm tra áp xuất iPhone như thế nào mới chuẩn, cùng mình kiểm
                                    chứng cach sau đây</p>

                            </div>

                        </div>
                        <div className="img2">
                            <div className="demo2">
                                <img src="https://cdn.tgdd.vn/Files/2022/09/29/1472950/thumb-760x367.jpg" alt="" />
                                <div className="title2">
                                    <p>Cách phát wifi từ iPhone vô cùng đơn giản, giúp bạn có thể
                                        chia sẻ internet với các thiết bị khác</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="menu">
                <ul>
                    <Link to='/iPhone' className='n'>
                        <li>
                            <p> <img src="https://cdn.tgdd.vn/newscategory/2155/iPhone.png" alt="" /> iPhone</p>
                        </li>
                    </Link>
                    <Link to='/Mac' className='n'>
                        <li>
                            <p><img src="https://cdn.tgdd.vn/newscategory/2156/Mac.png" alt="" /> Mac</p>
                        </li>
                    </Link>
                    <Link to='/Watch' className='n'>
                        <li>
                            <p><img src="https://cdn.tgdd.vn/newscategory/2158/Watch.png" alt="" /> Watch</p>
                        </li>
                    </Link>
                    <Link to='/Amthanh' className='n'>
                        <li>
                            <p><img src="https://cdn.tgdd.vn/newscategory/2159/AirPods.png" alt="" /> Âm thanh</p>
                        </li>
                    </Link>
                    <Link to='/Phukien' className='n'>
                        <li>
                            <p><img src="https://cdn.tgdd.vn/newscategory/2160/PK.png" alt="" /> Phụ Kiện</p>
                        </li>
                    </Link>
                    <Link to='/About' className='n'>
                        <li>
                            <p><img src="https://cdn.tgdd.vn/newscategory/2161/Dich-vu.png" alt="" /> Dịch vụ</p>
                        </li>
                    </Link>
                </ul>
            </div>
            <div className="news">
                <h2>Mới nhất</h2>
                <br />
                <div className="information">
                    <div className="ava">
                        <img src="https://cdn.tgdd.vn/Files/2022/09/28/1472584/ung-dung-ve-tren-macbook-1-318x154.jpg" alt="" />
                    </div>
                    <p>Bản cập nhật IOS 14.2 có gì mới? Những tính năng mới vô cùng thú vị và thiết thực được
                        Apple cho ra mắt</p>
                    <span className="time">2 giờ trước</span>
                </div>
                <hr />

                <div className="information">
                    <div className="ava">
                        <img src="https://cdn.tgdd.vn/Files/2022/09/30/1473177/cau-hinh-iphone-14-pro-max-2-318x154.jpg" alt="" />
                    </div>
                    <p>Bản cập nhật IOS 14.2 có gì mới? Những tính năng mới vô cùng thú vị và thiết thực được
                        Apple cho ra mắt</p>
                    <span className="time">2 giờ trước</span>
                </div>
                <hr />

                <div className="information">
                    <div className="ava">
                        <img src="https://cdn.tgdd.vn/Files/2022/10/04/1473950/top1macbooksinhvien-318x154.jpg" alt="" />
                    </div>
                    <p>Bản cập nhật IOS 14.2 có gì mới? Những tính năng mới vô cùng thú vị và thiết thực được
                        Apple cho ra mắt</p>
                    <span className="time">2 giờ trước</span>
                </div>
                <hr />


                <div className="information">
                    <div className="ava">
                        <img src="https://cdn.tgdd.vn/Files/2022/09/29/1472969/tinh-nang-gui-thong-bao-khi-co-tai-nan-tren-apple-watch-series-1-318x154.jpg"
                            alt="" />
                    </div>
                    <p>Bản cập nhật IOS 14.2 có gì mới? Những tính năng mới vô cùng thú vị và thiết thực được
                        Apple cho ra mắt</p>
                    <span className="time">2 giờ trước</span>
                </div>
                <hr />


                <div className="information">
                    <div className="ava">
                        <img src="https://cdn.tgdd.vn/Files/2022/09/27/1472549/ung-dung-doc-file-pdf-cho-macbook-5-318x154.jpg"
                            alt="" />
                    </div>
                    <p>Bản cập nhật IOS 14.2 có gì mới? Những tính năng mới vô cùng thú vị và thiết thực được
                        Apple cho ra mắt</p>
                    <span className="time">2 giờ trước</span>
                </div>
                <hr />

                <div className="xemthem">
                    <button type="submit">Xem thêm 1382</button>
                </div>
                <div className="Video">
                    <div className="video">
                        <h2>Video</h2>
                        <iframe width="590" height="100%" src="https://www.youtube.com/embed/9fSIgutKm8A"
                            title="Làm thế nào để SAO LƯU dữ liệu iPhone của bạn trên iCloud" frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowfullscreen></iframe>
                        <p>Làm sao để sao lưu dữ liệu của bạn trên icloud?</p>
                    </div>
                    <div className="cachlam">
                        <div className="information">
                            <iframe width="180" height="100%" src="https://www.youtube.com/embed/NXq03w4fLRU"
                                title="Cách đơn giản để chuyển dữ liệu sang iPhone mới - Topzone" frameborder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowfullscreen></iframe>
                            <p>Cách đơn giản để chuyển giữ liệu sang iPhone mới - HK Store</p>

                        </div>
                        <hr />
                        <div className="information">
                            <iframe width="180" height="100%" src="https://www.youtube.com/embed/bxSPtSTFrXY"
                                title="Đặt lại mật khẩu Apple ID vô cùng đơn giản trên iPhone - Topzone" frameborder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowfullscreen></iframe>
                            <p>Cách cập nhật iOS trên iPhone của bạn - HK Store</p>

                        </div>
                        <hr />
                        <div className="information">
                            <iframe width="180" height="100%" src="https://www.youtube.com/embed/q0zwfu2vEeo"
                                title="Cách cập nhật iOS trên iPhone của bạn - Topzone" frameborder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowfullscreen></iframe>
                            <p>Đặt lại mật khẩu ID Apple vô cùng đươn giản trên iPhone - HK Store</p>
                        </div>
                    </div>
                </div>

                <div className="news">

                    <br />

                    <div className="information">
                        <div className="ava">
                            <img src="https://cdn.tgdd.vn/Files/2022/09/29/1472907/cach-su-dung-apple-watch-se-2-318x154.png"
                                alt="" />
                        </div>
                        <p>Bản cập nhật IOS 14.2 có gì mới? Những tính năng mới vô cùng thú vị và thiết thực
                            được Apple cho ra mắt</p>
                        <span className="time">2 giờ trước</span>
                    </div>
                    <hr />

                    <div className="information">
                        <div className="ava">
                            <img src="https://cdn.tgdd.vn/Files/2022/09/28/1472794/cach-tai-hinh-nen-macos-ventura-4-318x154.jpg"
                                alt="" />
                        </div>
                        <p>Bản cập nhật IOS 14.2 có gì mới? Những tính năng mới vô cùng thú vị và thiết thực
                            được Apple cho ra mắt</p>
                        <span className="time">2 giờ trước</span>
                    </div>
                    <hr />

                    <div className="information">
                        <div className="ava">
                            <img src="https://cdn.tgdd.vn/Files/2022/10/03/1473834/copy-hinh-tu-iphone-vao-may-tinh-thumb-318x154.jpg"
                                alt="" />
                        </div>
                        <p>Bản cập nhật IOS 14.2 có gì mới? Những tính năng mới vô cùng thú vị và thiết thực
                            được Apple cho ra mắt</p>
                        <span className="time">2 giờ trước</span>
                    </div>
                    <hr />

                    <div className="xemthem">
                        <button type="submit">Xem thêm 1382</button>
                    </div>

                    <div className="lydo">
                        <h3>Lý do nên chọn HK Store</h3>
                        <div className="container-fluid">
                            <div className="row row01">

                                <div className="ld1">
                                    <i className="fab fa-apple"></i>
                                    <p>Chính hãng Apple</p>
                                    <span>TopCare là trung tâm dịch vụ ủy quyền chính thức của Apple. Tất
                                        cả linh kiện sửa chữa tại TopCare đều do Apple cung cấp chính hãng.</span>
                                </div>
                                <div className="ld1">
                                    <i className="fa fa-certificate"></i>
                                    <p>Chứng chỉ Apple</p>
                                    <span>100% đội ngũ chuyên viên và kỹ thuật viên của TopCare được đào
                                        tạo và cấp chứng chỉ bởi Apple.</span>
                                </div>

                                <div className="ld1">
                                    <i className="fa fa-lock"></i>
                                    <p>Bảo mật tuyệt đối</p>
                                    <span>Thông tin khách hàng cung cấp được bảo vệ nghiêm ngặt theo tiêu
                                        chuẩn kiểm soát cao nhất.</span>
                                </div>

                                <div className="ld1">
                                    <i className="fas fa-star"></i>
                                    <p>Dịch vụ đẳng cấp</p>
                                    <span>Với phương châm lấy khách hàng làm trọng tâm, TopCare cam kết
                                        mang đến chất lượng phục vụ vượt trội dành cho khách hàng.</span>
                                </div>
                                <div className="ld1">
                                    <i className="fas fa-piggy-bank"></i>
                                    <p>Tiết kiệm</p>
                                    <span>TopCare thường xuyên có những chương trình ưu đãi giúp khách hàng
                                        tiết kiệm hơn khi sửa chữa sản phẩm.</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="baohanh">
                        <h2>Quy trình bảo hành HK Store</h2>
                        <div className="container1">
                            <div className="row">
                                <div className="dv1">
                                    <img
                                        src="https://cdn.tgdd.vn/mwgcart/topzone/images/topcare/warranty/icon_1.png" alt="" />
                                    <h7>1. Kiểm tra tổng quan trước sửa chữa</h7>
                                </div>
                                <div className="dv1">
                                    <img
                                        src="https://cdn.tgdd.vn/mwgcart/topzone/images/topcare/warranty/icon_2.png" alt="" />
                                    <h7>2. Đặt linh kiện</h7>
                                </div>
                                <div className="dv1">
                                    <img
                                        src="https://cdn.tgdd.vn/mwgcart/topzone/images/topcare/warranty/icon_3.png" alt="" />
                                    <h7>3. Sửa chữa | Thay thế</h7>
                                </div>
                                <div className="dv1">
                                    <img
                                        src="	https://cdn.tgdd.vn/mwgcart/topzone/images/topcare/warranty/icon_4.png" alt="" />
                                    <h7>4. Kiểm tra tổng quan sau sửa chữa</h7>
                                </div>
                                <div className="dv1">
                                    <img
                                        src="	https://cdn.tgdd.vn/mwgcart/topzone/images/topcare/warranty/icon_5.png" alt="" />
                                    <h7>5. Trả sản phẩm</h7>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default About;