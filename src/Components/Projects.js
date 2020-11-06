import React from "react";
import ProjectsContent from "./ProjectsContent.json"

function Projects() {
    return (
        <div class="row">
            {ProjectsContent.map((item) => {
                return (
                    <div class="card text-center col-12 col-sm-6 col-lg-3">
                        <div class="card-header"><img src="../img/githublogo.png" class="img-fluid" /></div>
                        <div class="card-body">
                            <h4 class="card-title"><a href={item.link}>{item.title}</a></h4>
                            <p class="card-text">{item.text}</p>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default Projects;