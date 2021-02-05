import React from "react";
import BlogContent from "./BlogContent.json"

function BlogPosts() {
    return (
        <div class="row justify-content-center">

            {BlogContent.map((item) => {
                return (

                    <div class="card text-center col-12">
                        <div class="card-header"><img src="./img/download.jpg" class="img-fluid"></img></div>
                        <div class="card-body">
                            <h4 class="card-title">{item.title}</h4>
                            <p class="card-text">{item.text}</p>
                        </div>
                    </div>
                )
            })}
        </div>

    )
}

export default BlogPosts;