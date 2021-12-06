import React from 'react'

function Skill() {
    return (
        <div>
            <div class="container">
             <div class="row">
              <div class="col-sm-12 col-md-12">
                 <h3 class="text-center mt-4 ">ทักษะของตนเอง</h3>
               </div>
              </div>
              <div class="row">
                 <div class="col-sm-4 mb-5">
                    <div class="card mt-4">
                       <img class="card-img-top" src="html.jpg" alt="" />
                       <div class="card-body">
                          <p>HTML</p>
                          <p >CSS</p>
                     
                       </div>
                       
                    </div>
                 </div>
                 <div class="col-sm-4 mb-5">
                    <div class="card mt-4">
                       <img class="card-img-top" src="codeigniter.png" alt=""/>
                       <div class="card-body">
                          <p >React</p>
                          <p >Codeigniter</p>
                       </div>
                    </div>
                 </div>
                 <div class="col-sm-4 mb-5">
                    <div class="card mt-4">
                       <img class="card-img-top" src="MySql.png" alt=""/>
                       <div class="card-body">
                          <p >MySql</p>
                          </div>
                          <br/> <br/>
                    </div>
                 </div>
              </div>
        </div>
        </div>
    )
}

export default Skill
