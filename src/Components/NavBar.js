import React from "react";

function NavBar(props) {

    return(
        <nav class="navbar navbar-expand-lg navbar-dark brand fixed-top">
             <div class="container">
                 <a class="navbar-brand" href="#">Duncan Scruggs's Portfolio</a>
                 <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                     <span class="navbar-toggler-icon"></span>
                 </button>
                 <div class="collapse navbar-collapse" id="navbarResponsive">
                    <ul class="navbar-nav ml-auto">
                        {
                            props.pages.map((item, index) => {
                                return (
                                    <li class="nav-item">
                                        <a 
                                            href="#"
                                            onClick={() => props.setPage(index)} 
                                            class={"nav-link " + (props.currentPage === index ? "active" : "")}>
                                            {item.readableName}
                                        </a>
                                    </li>
                                )
                            })
                        }
                    </ul>
                 </div>
             </div>
         </nav>
    )
}

export default NavBar;