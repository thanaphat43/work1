import React from 'react'

function Haeder() {
    return (
        <div>
         <section class="navbar navbar-dark bg-dark fixed-top navbar-expand-lg">
       <div class="container-fluid">
          <div class="row">
           <div class="col-sm-12"> 
            <nav class="navbar navbar-expand-lg ">
              <a class="navbar-brand text-white" href="#">Thanaphat Pinthong</a>
              
              <div class="container">
              <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
                  <li class="nav-item ">
                    <a class="nav-link " href="#Profile">ประวัติส่วนตัว</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#Skill">ทักษะ</a>
                  </li>
                  <li class="nav-item dropdown">
                  <a class="nav-link" href="#Reason">เหตุผลที่ต้องการฝึกงานในหน่วยงานนี้</a>
                  </li>
                  
                </ul>
                 
              </div>
             
              </div>

             </nav>
            </div>
          </div>
        </div>
    </section> 
        </div>
    )
}
export default Haeder;