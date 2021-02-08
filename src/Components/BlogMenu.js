import React, { useContext } from "react";
import { useHistory } from 'react-router-dom';
import AppContext from "../Utilities/AppContext";
import BlogsMenuContent from "./BlogsMenuContent.json"

function BlogPosts() {

    const { blogName, setBlogName } = useContext(AppContext);

    const history = useHistory();

    function selectBlog(blog) {
        setBlogName(blog);
        history.push(`/blog/${blog}`);
    }


    return (
        <div class="row my-5 justify-content-center">

            {BlogsMenuContent.map((item) => {
                return (

                    <div class="card text-center col-12 col-sm-6 col-lg-3" onClick={() => selectBlog(item.url)}>
                        <div class="card-header"><img src={item.picture} class="img-fluid"></img></div>
                        <div class="card-body">
                            <h4 class="card-title">{item.title}</h4>
                        </div>
                    </div>
                )
            })}
        </div>

    )
}

export default BlogPosts;