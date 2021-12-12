import React from 'react'

function Reason() {
    return (
        <div>

            <div class="container">
                <div class="row">
                    <div class="col-sm-12 col-md-12">
                        <h3 class="text-center mt-4 ">เหตุผลที่ต้องการฝึกงานในหน่วยงานนี้</h3>
                    </div>
                </div>
                <div class="row">
                    <div class="col-sm-4 mb-5">
                        <div class="card mt-4">
                            <div class="card-body">
                                <h5>1.ต้องการเก็บเกี่ยวความรู้ทางด้านฮาร์ดแวร์และซอฟต์แวร์ให้มากที่สุด</h5>
                            </div>
                            <img class="card-img-top" src="hardware.png" alt=""  />
                        </div>
                    </div>
                    <div class="col-sm-4 mb-5">
                        <div class="card mt-4">
                            <div class="card-body">
                                <h5>2.เพื่อจะได้มีประการณ์ในการทำงาน</h5>
                                <br/>
                            </div>
                            <img class="card-img-top" src="work.jpg" alt=""  />

                        </div>
                    </div>
                    <div class="col-sm-4 mb-5">
                        <div class="card mt-4">
                            <div class="card-body">
                                <h5>3.เพื่อเพิ่มทักษะและเรียนรู้เกี่ยวกับงานต่างๆในหน่วยงาน</h5>
                            </div>
                            <img class="card-img-top" src="skill.jpg" alt=""  />


                        </div>
                    </div>
                </div>
            </div>
        </div>


    )
}

export default Reason;
