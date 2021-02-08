import React, { useContext } from "react";
import BlogContent from "./BlogContent.json";
import AppContext from "../Utilities/AppContext";


function BlogPosts() {

    const { blogName } = useContext(AppContext);


    const selectedBlog = BlogContent.filter((item, index) => {
        if (item.blog === blogName) {
            return item;
        }
    })

    return (
        <div class="row my-5 justify-content-center">

            {          selectedBlog[0].posts.map((item) => {


                return (

                    <div class="card text-center col-12">
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