import React from 'react'

function Skill() {
   return (
      <div>
         <div class="container">
            <div class="row">
               <div class="col-sm-12 col-md-12">
                  <h2 class="text-center mt-4 ">ทักษะ</h2>
               </div>
            </div>
            <div class="row">
               <div class="col-sm-4 mb-5">
                  <div class="card mt-4">
                     <img class="card-img-top" src="html.jpg" alt="" />
                     <div class="card-body">
                        <h3 class="text-center mt-4 ">Language</h3>
                        <div class="row">
                           <div class="col-sm-6 mb-6">
                              <p>HTML</p>
                              <p >CSS</p>
                              <p>PHP</p>
                           </div>
                           <div class="col-sm-6 mb-6" >
                              <p>JAVA SCRIPT</p>
                              <p>DART</p>
                           </div>
                        </div>
                     </div>

                  </div>
               </div>
               <div class="col-sm-4 mb-5">
                  <div class="card mt-4">
                     <img class="card-img-top" src="codeigniter.png" alt="" />
                     <div class="card-body">
                        <h3 class="text-center mt-4 ">Framework</h3>
                        <p >React</p>
                        <p >Codeigniter</p>
                        <br/>
                        <br/>
                     </div>
                  </div>
               </div>
               <div class="col-sm-4 mb-5">
                  <div class="card mt-4">
                     <img class="card-img-top" src="flutter.png" alt="" />
                     <div class="card-body">
                        <h3 class="text-center mt-4 ">Framework</h3>
                        <p >Flutter</p>
                     </div>
                     <br /> <br />
                     <br /> <br />
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default Skill
