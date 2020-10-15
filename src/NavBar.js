import { render } from "@testing-library/react";
import React from "react";

function NavBar() {
    return(
        <nav class="navbar navbar-expand-lg navbar-dark brand fixed-top">
        <div class="container">
            <a class="navbar-brand" href="#">Duncan Scruggs's Bootcamp Blog</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
        </button>
            <div class="collapse navbar-collapse" id="navbarResponsive">
                <ul class="navbar-nav ml-auto">
                    <li class="nav-item active">
                        <a class="nav-link" href="/index.html">Home
            </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/projects.html">Projects
            </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/links.html">Links
            </a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    )
}

export default NavBar;