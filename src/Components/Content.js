import React from 'react'
import Profile from './Content1/Profile';
import Skill from './Content1/Skill';
import Reason from './Content1/Reason';
function Content() {
   return (
      <div>
         <section class="">
      
               <br /> <br /> <br />
               <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
                  <div class="carousel-inner">
                     <div class="carousel-item active">
                        <img src="2.JPG" class="d-block w-100" alt="..." />
                     </div>
                     </div> 
               </div>
            
         </section>

         <section class="bg-light" id="Profile">
            <Profile />


         </section>

         <section class="" id="Skill">
            <Skill />
         </section>


         <section class="" id="Reason">
            <Reason />
         </section>


       
      </div>
   )
}
export default Content;
