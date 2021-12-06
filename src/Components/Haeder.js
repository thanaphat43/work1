import React from 'react'

function Haeder() {
    return (
        <div>
         <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Thanaphat Pinthong</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page"  href="#Profile">ประวัติส่วนตัว</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#Skill">ทักษะ</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#Reason">เหตุผลที่ต้องการฝึกงานในหน่วยงานนี้</a>
        </li>
        
      </ul>
    </div>
  </div>
</nav>
        </div>
    )
}
export default Haeder;
