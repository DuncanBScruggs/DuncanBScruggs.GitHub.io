import React, { Component } from 'react';
import BlogPosts from './Components/BlogPosts';
import NavBar from "./Components/NavBar";
import TopImage from "./Components/TopImage";
import Projects from "./Components/Projects";
import Links from "./Components/Links";
import Home from "./Components/Home";

class App extends Component {
    constructor() {
        super();
        this.pages = [
            { readableName: "Home", url: "home" },
            { readableName: "Projects", url: "projects" },
            { readableName: "Blog", url: "blog" },
            { readableName: "Links", url: "links" },
        ];
        this.state = {
            currentPage: 0
        }
        this.setPage = this.setPage.bind(this)

        this.content = [
            <Home />,
            <Projects />,
            <BlogPosts />,
            <Links />
        ]
    }

    setPage(newPageNum) {
        this.setState({ currentPage: newPageNum })
    }

    componentDidMount() {
        console.log(" in componentDidMount method")

        let currentPage = window.localStorage.getItem("currentPage")

        if (currentPage) {
            console.log("found currentPage, ")
            this.setState({ currentPage: JSON.parse(currentPage) })
        }
        else {
            console.log("did not find currentPage")
            window.localStorage.setItem("currentPage", 0)
        }
    }

    componentDidUpdate() {
        console.log("in componentDidUpdate", this.state.currentPage)
        window.localStorage.setItem("currentPage", JSON.stringify(this.state.currentPage))
    }

    render() {
        return (
            <div class="brand-main">

                {/* nav bar */}
                <NavBar
                    pages={this.pages}
                    currentPage={this.state}
                    setPage={this.setPage}
                />

                {/* container for TopImage and Content */}
                <div class="container">

                    {/* Top Image */}
                    <TopImage />

                    {/* content here */}
                    {this.content[this.state.currentPage]}



                    {/* end img and content container */}
                </div>
                {/* end brand-main */}
            </div>
        );
    }
}





export default App;
