import React, { Component, useState, useEffect  } from 'react';
import BlogPosts from './Components/BlogPosts';
import NavBar from "./Components/NavBar";
import TopImage from "./Components/TopImage";
import Projects from "./Components/Projects";
import Links from "./Components/Links";
import Home from "./Components/Home";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { AppProvider } from './Utilities/AppContext'

function app() {

        const pages = [
            { readableName: "Home", url: "/home" },
            { readableName: "Projects", url: "/projects" },
            { readableName: "Blog", url: "/blog" },
            { readableName: "Links", url: "/links" },
        ];


        const initialContext = {pages};
    
        return (
            <div class="brand-main">
                <Router>
                <AppProvider value={initialContext}>

                        <NavBar/>

                        {/* container for TopImage and Content */}
                        <div class="container">

                            {/* Top Image */}
                            <TopImage />

                            <div class="row my-5 justify-content-center">

                                <div class="col-7">
                                <Switch>
                                    <Route path="/home">
                                    <Home />
                                    </Route>
                                    <Route path="/projects">
                                    <Projects />
                                    </Route>
                                    <Route path="/blog">
                                    <BlogPosts />
                                    </Route>
                                    <Route path="/links">
                                    <Links />
                                    </Route>
                                </Switch>
                                </div>
                            </div>
                            {/* end img and content container */}
                        </div>
                        {/* end brand-main */}
                </AppProvider>
                </Router>
            </div>
        );
    
}





export default app;
