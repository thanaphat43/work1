import React, { useState, useEffect } from 'react';
import {
    Navbar,
    NavbarBrand,
} from 'reactstrap';
import Footer from '../../Footer';
import VideoApp from '../video/jod1_ video';
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
                        <h1>ระบบการให้บริการสนเทศ</h1>
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
                                <div class="col-sm-6 mb-6">
                                    <div class="card mt-6">
                                        <div class="card-body">
                                            <h3>ผู้ใช้งานระบบ</h3>
                                           <p>สามารถค้นหาข้อมูล</p>
                                           <p>สามารถแสดงความเห็นข้อมูลทุนการศึกษา</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-sm-6 mb-6" >
                                    <div class="card mt-6">
                                        <div class="card-body">
                                            <h3>ผู้ดูแลระบบ</h3>
                                            <p>สามารถ เพิ่ม ลบ แก้ไข ข้อมูลทุนการศึกษา</p>
                                            <p>สามารถอนุมัติผู้ใช้งานระบบ</p>
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
                                        <p>สะดวกต่อการค้นหาข้อมูลทุนการศึกษา</p>
                                            <p>สามารถติดต่อสอบถามรายละเอียดของทุนการศึกษาได้</p>
                                            <p>สะดวกต่อการใช้งาน</p>
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
                                                        <p>React.js</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-sm-6 mb-6" >
                                                <div class="card mt-6">
                                                    <div class="card-body">
                                                        <h3>Back-end</h3>
                                                        <p>Codeigniter 3</p>
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
                  <br/>
                            
                    <div class="container1">
                        <br/>
                    <h3>วิดิโอตัวอย่าง</h3>
                                    <VideoApp />
                            <center>
                               
                                <br />
                                <div class="card-container2">
                                    <center>
                                    <h3>หน้าระบบของผู้ใช้ที่ยังไม่ได้ลงทะเบียน/เข้าสู่ระบบ</h3>
                                        <img class="card-img-sub" src="/Project1/Capture.PNG" alt="" />
                                    </center> {/* container-sub1 */}
                                </div>
                                <br />
                                <br />
                                <div class="card-container2">
                                    <center>
                                    <h3>หน้าการเข้าสู่ระบบเพื่อใช้งานเว็บไซต์</h3>
                                        <img class="card-img-sub" src="/Project1/2.PNG" alt="" />
                                    </center>{/* container-sub2*/}
                                </div>
                                <br />
                                <br />
                                <div class="card-container2">
                                    <center>
                                    <h3>หน้าหลักการใช้งานระบบสารสนเทศทุนการศึกษา</h3>
                                        <img class="card-img-sub" src="/Project1/3.PNG" alt="" />
                                    </center>       {/* container-sub3 */}
                                </div>
                                <br />
                                <br />
                                <div class="card-container2">
                                    <center>
                                    <h3>เมนูในการใช้งาน ระบบสารสนเทศทุนการศึกษา</h3>
                                        <img class="card-img-sub" src="/Project1/4.PNG" alt="" />
                                    </center>{/* container-sub4 */}
                                </div>
                                <br />
                                <br />
                                <div class="card-container2">
                                    <center>
                                    <h3>หน้าการจัดการเกี่ยวกับทุนการศึกษา </h3>
                                        <img class="card-img-sub" src="/Project1/5.PNG" alt="" />
                                    </center>{/* container-sub5 */}
                                </div>
                                <br />
                                <br />
                                <div class="card-container2">
                                    <center>
                                    <h3>หน้าการเพิ่มทุนการศึกษา(ทุนหลัก)</h3>
                                        <img class="card-img-sub" src="/Project1/6.PNG" alt="" />
                                    </center>{/* container-sub6 */}
                                </div>
                                <br />
                                <br />
                                <div class="card-container2">
                                    <center>
                                    <h3>หน้า เพิ่มทุนการศึกษาย่อย(ทุนรอง)</h3>
                                        <img class="card-img-sub" src="/Project1/7.PNG" alt="" />
                                    </center>{/* container-sub7 */}
                                </div>
                                <br />
                                <br />
                                <div class="card-container2">
                                    <center>
                                    <h3>หน้าเข้าสู่ระบบ</h3>
                                        <img class="card-img-sub" src="/Project1/8.PNG" alt="" />
                                    </center>{/* container-sub8 */}
                                </div>
                                <br />
                                <br />
                                <div class="card-container2">
                                    <center>
                                    <h3>หน้าหลักของการเข้าสู่ระบบ “นักเรียน”</h3>
                                        <img class="card-img-sub" src="/Project1/9.PNG" alt="" />
                                    </center>{/* container-sub9 */}
                                </div>
                                <br />
                                <br />
                                <div class="card-container2">
                                    <center>
                                    <h3>หน้าทุนหลัก</h3>
                                        <img class="card-img-sub" src="/Project1/10.PNG" alt="" />
                                    </center>{/* container-sub10 */}
                                </div>
                                <br />
                                <br />
                                <div class="card-container2">
                                    <center>
                                    <h3>หน้าทุนหลักที่สนใจ</h3>
                                        <img class="card-img-sub" src="/Project1/11.PNG" alt="" />
                                    </center>{/* container-sub11 */}
                                </div>
                                <br />
                                <br />
                                <div class="card-container2">
                                    <center>
                                    <h3>หน้าทุนย่อยทั้งหมด</h3>
                                        <img class="card-img-sub" src="/Project1/12.PNG" alt="" />
                                    </center>{/* container-sub12 */}
                                </div>
                                <br />
                                <br />
                                <div class="card-container2">
                                    <center>
                                    <h3>หน้าแสดงทุนการศึกษาที่นักเรียนได้ติดตามไว้</h3>
                                        <img class="card-img-sub" src="/Project1/13.PNG" alt="" />
                                    </center>{/* container-sub13 */}
                                </div>
                                <br />
                                <br />
                                <br />
                                <br />
                            </center>

                        </div>
                
                    
                </center>
               
            </div>
            <br />
                                <br />
 <Footer />
        </>
    );
}

export default Allresutpage;
