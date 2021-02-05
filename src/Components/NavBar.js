import React, { useContext } from "react";
import { useLocation, Link } from 'react-router-dom';
import AppContext from '../Utilities/AppContext'



function NavBar() {

    const { pathname } = useLocation();
    const { pages } = useContext(AppContext);

    return (
        <nav class="navbar navbar-expand-lg navbar-dark brand fixed-top">
            <div class="container">
                <Link class="navbar-brand" to="/">Duncan Scruggs Portfolio</Link>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarResponsive">
                    <ul class="navbar-nav ml-auto">
                        {pages.map((item, index) => {
                            return (
                                <li key={index} class="nav-item">
                                    <Link
                                        to={item.url}
                                        class={"nav-link " + (pathname === item.url ? "active" : "")}>
                                        {item.readableName}
                                    </Link>
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

export default NavBar