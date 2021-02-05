import React from "react";
import Projects from "./Projects";

function Home() {
    return (
        <>

            <div className="row justify-content-center">
                <div class="jumbotron jumbotron-fluid welcome">
                    <div class="container">
                        <h1 class="display-4 welcome-text">Hi, I'm Duncan Scruggs! I'm a full-stack developer with a passion for learning</h1>
                    </div>
                </div>
            </div>

            <Projects/>            
        </>
    )
}

export default Home;