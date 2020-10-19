import React from "react";

function Links(){
    return(

        <div class="row">
        {/* <!-- Cards go here --> */}

            {/* <!-- 1st card --> */}
            <div class="card text-center col-12 col-sm-6 col-lg-3">
                <div class="card-header"><img src="../img/githublogo.png" class="img-fluid" /></div>
                <div class="card-body">
                    <h4 class="card-title"><a href="https://github.com/DuncanBScruggs">Github profile</a></h4>
                    <p class="card-text">
                    </p>
                </div>
            </div>

            {/* <!-- 2nd card --> */}
            <div class="card text-center col-12 col-sm-6 col-lg-3">
                <div class="card-header"><img src="../img/codewarslogo.jpg" class="img-fluid" /></div>
                <div class="card-body">
                    <h4 class="card-title"><a href="https://www.codewars.com/users/DuncanBScruggs">Codewars profile</a></h4>
                    <p class="card-text">
                    </p>
                </div>
            </div>
            
        {/* End Row     */}
        </div>

    )
}

export default Links;