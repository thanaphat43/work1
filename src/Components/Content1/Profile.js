import React from 'react'

function Profile() {
   return (
      <div>
         <div class="container">
            <div class="row">
               <div class="col-sm-12 col-md-12">
                  <h2 class="text-center mt-4 ">ประวัติส่วนตัว</h2>
               </div>
            </div>
            <center>
               <div class="container-center">
                  <div class="testimonial mb-5">
                     <div class="avatar mx-auto">
                        <img src="1.jpg" class="rounded-circle z-depth-1 img-fluid" width="300" height="400" />
                     </div>
                  </div>
               </div>
            </center>
            <div class="row">
               <div class="col-sm-4 mb-5">
                  <div class="card mt-4">
                     <div class="testimonial mb-5">
                        <div class="avatar mx-auto">
                           <img class="card-img-top" src="3.jpg" alt="" />
                        </div>
                     </div>
                     <div class="card-body">
                        <p>นาย ธนภัทร์   ปิ่นทอง</p>
                        <p>ชื่อเล่น คิว</p>
                        <p>เกิดวันที่ 9 กุมภาพันธ์ พ.ศ 2543</p>
                     </div>

                  </div>
               </div>
               <div class="col-sm-4 mb-5">
                  <div class="card mt-4">

                     <div class="testimonial mb-5">
                        <div class="avatar mx-auto">
                           <img class="card-img-top" src="npru.jpg" alt="" />
                        </div>
                     </div>
                     <div class="card-body">

                        <p>Nakhon Pathom Rajabhat University</p>
                        <p>B.Sc (Software Engineering ) GPA 3.27</p>
                        <br />    <br />
                     </div>

                  </div>
               </div>
               <div class="col-sm-4 mb-5">
                  <div class="card mt-4">
                     <div class="testimonial mb-5">
                        <div class="avatar mx-auto">
                           <img class="card-img-top" src="5.JPG" alt="" />
                        </div>
                     </div>
                     <div class="card-body">

                        <p>Facebook : Thanaphat  Pinthong</p>
                        <p>line : Kiw_2000</p>
                        <p>Email : 614259017@webmail.npru.ac.th</p>
                     </div>

                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default Profile;
