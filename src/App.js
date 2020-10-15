import React from 'react';
import BlogPosts from './BlogPosts';
import NavBar from "./NavBar";
import TopImage from "./TopImage";

function App() {
  return (
    <div class="brand-main">

        {/* nav bar */}
        <NavBar />

        {/* container for image and content */}
        <div class="container">

        {/* Top Image */}
        <TopImage />

        {/* content here */}
        <BlogPosts />


        {/* end img and content container */}
        </div>
    {/* end brand-main */}
    </div>
    
  );
}





export default App;
