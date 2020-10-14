import React from 'react';

function App() {
  return (
    <div class="brand-main">
      <nav class="navbar navbar-expand-lg navbar-dark brand fixed-top">
        <div class="container">
            <a class="navbar-brand" href="#">Duncan Scruggs's Bootcamp Blog</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
            <div class="collapse navbar-collapse" id="navbarResponsive">
                <ul class="navbar-nav ml-auto">
                    <li class="nav-item active">
                        <a class="nav-link" href="/index.html">Home
            </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/projects.html">Projects
            </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/links.html">Links
            </a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>

    <div class="container">
      <div class="row">
          <div class="col-lg-12 p-0 pb-5">
              <div class="">
                  <img class="d-block img-fluid" src="./img/masaimarasunset.jpg" alt="Acacia tree in the Masai Mara, Kenya"></img>
              </div>

          </div>
      </div>
    </div>
  </div>
    
  );
}

export default App;
