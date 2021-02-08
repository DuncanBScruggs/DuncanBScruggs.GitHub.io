import React, { Component, useState, useEffect } from 'react';
import BlogMenu from './Components/BlogMenu';
import BlogPosts from './Components/BlogPosts';
import NavBar from "./Components/NavBar";
import Links from "./Components/Links";
import Home from "./Components/Home";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { AppProvider } from './Utilities/AppContext'

function App() {

    const pages = [
        { readableName: "Home", url: "/" },
        { readableName: "Blog", url: "/blogmenu" },
        { readableName: "Links", url: "/links" },
    ];

    const [blogName, setBlogName] = useState('');

    const initialContext = { pages, blogName, setBlogName };

    return (
        <div class="brand-main">
            <Router>
                <AppProvider value={initialContext}>

                    <NavBar />

                    <Switch>
                        <Route exact path="/">
                            <Home />
                        </Route>
                        <Route exact path="/blogmenu">
                            <BlogMenu />
                        </Route>
                        <Route path="/links">
                            <Links />
                        </Route>
                        <Route path={`/blog/:blogName`}>
                            <BlogPosts />
                        </Route>
                    </Switch>


                    {/* end brand-main */}
                </AppProvider>
            </Router>
        </div>
    );

}

export default App;
