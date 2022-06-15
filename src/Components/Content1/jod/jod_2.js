import React, { useState, useEffect } from 'react';
import {
    Navbar,
    NavbarBrand,
} from 'reactstrap';
import Footer from '../../Footer';
import VideoApp2 from '../video/jod2_ video';
const Allresutpage = () => {
    return (
        <>
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
                <Navbar color="dark" light expand="md" fixed="top">
                    <NavbarBrand href="/"><a><h5>Thanaphat Pinthong</h5></a></NavbarBrand>
                </Navbar>
            </nav>

            <div>
                <br /> <br /><br />
                <center>
                    <div class="container">
                        <h1>ระบบตรวจอุณหภูมิห้อง</h1>
                    </div>
                </center>
            </div>
            <div class="container">
                <div class="w3-card-2">
                    <ul class="nav nav-tabs">
                        <li class="nav-item">
                            <a class="nav-link active" data-bs-toggle="tab" href="#home">รายละเอียดของระบบ</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" data-bs-toggle="tab" href="#menu1">ประโยชน์ของระบบ</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" data-bs-toggle="tab" href="#details">ส่วนจัดการเนื้อหาของระบบ</a>
                        </li>
                    </ul>
                    <div class="tab-content">
                        <div class="tab-pane container active" id="home">
                            <div class="row">
                                <div class="col-sm-12 mb-12">
                                    <div class="card mt-6">
                                        <div class="row">
                                            <div class="col-sm-6 mb-6">
                                                <div class="card mt-6">
                                                    <div class="card-body">
                                                    <p>ค้นหาสถานที่ในระบบ</p>
                                            <p>แสดงข้อมูลอุณหภูมิและความชื้นและตั้งค่ากำหนดอุณหภูมิ</p>
                                            <p>แสดงข้อมูลอุณหภูมิและความชื้นและตั้งค่ากำหนดอุณหภูมิ</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-sm-6 mb-6" >
                                                <div class="card mt-6">
                                                    <div class="card-body">
                                                    <p>แจ้งเตือนอุณหภูมิ</p>
                                            <p>แสดงอุณหภูมิและความชื้นล่าสุด</p>
                                            <p>แสดงอุณหภูมิและความชื้นในรูปแบบตาราง</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="tab-pane container fade" id="menu1">
                            <div class="row">
                                <div class="col-sm-12 mb-12">
                                    <div class="card mt-6">
                                        <div class="card-body">
                                            <p>สะดวกต่อการดูอุณหภูมิในสถานที่</p>
                                            <p>แจ้งเตือนอุณหภูมิได้</p>
                                            <p>สามารถดูอุณภูมิในรูปแบบต่างๆ เช่น ตาราง , กราฟ</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="tab-pane container fade" id="details">
                            <div class="row">
                                <div class="col-sm-12 mb-12">
                                    <div class="card mt-6">
                                        <div class="row">
                                            <div class="col-sm-6 mb-6">
                                                <div class="card mt-6">
                                                    <div class="card-body">
                                                        <h3>Front-end</h3>
                                                        <p>Flutter</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-sm-6 mb-6" >
                                                <div class="card mt-6">
                                                    <div class="card-body">
                                                        <h3>Back-end</h3>
                                                        <p>Node.js</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <center>
                    <br />


                    <br />
                    {/* <h3>วิดิโอตัวอย่าง</h3>
                        <VideoApp /> */}
                    <center>

                        <div class="container1">

                            <div className="card">
                                <center>
                                    <h3>วิดิโอตัวอย่าง</h3>
                                    <VideoApp2 />
                                    <h3>หน้าหลักของแอพพลิเคชั่น</h3>
                                    <img class="card-img-sub2" src="/Project2/F_1.jpg" alt="" /><br /><br/>
                                    <h3>หน้าเข้าสู่ระบบ</h3>
                                    <img class="card-img-sub2" src="/Project2/F_2.jpg" alt="" /><br /><br/>
                                    <h3>หน้าแสดงสถานที่ที่มีเครื่องวัดอุณหภูมิ</h3>
                                    <img class="card-img-sub2" src="/Project2/F_3.jpg" alt="" /><br /><br/>
                                    <h3>ค้นหาสถานที่</h3>
                                    <img class="card-img-sub2" src="/Project2/F_4.jpg" alt="" /><br /><br/>
                                    <h3>แสดงอุณหภูมิภายในสถานที่</h3>
                                    <img class="card-img-sub2" src="/Project2/F_6.jpg" alt="" /><br /><br/>
                                    <h3>ตั้งค่าอุณหภูมิเพื่อแจ้งเตือน</h3>
                                    <img class="card-img-sub2" src="/Project2/F_7.jpg" alt="" /><br /><br/>
                                    <h3>แจ้งเตือนอุณหภูมิภายในแอพพลิเคชั่น</h3>
                                    <img class="card-img-sub2" src="/Project2/F_8.jpg" alt="" /><br /><br/>
                                    <h3>แจ้งเตือนอุณหภูมิแอพพลิเคชั่น</h3>
                                    <img class="card-img-sub2" src="/Project2/F_9.jpg" alt="" />

                                </center> {/* container-sub1 */}
                            </div>

                        </div>

                    </center>


                </center>

            </div>
            <br />
            <br />
            <Footer />
        </>
    );
}

export default Allresutpage;
