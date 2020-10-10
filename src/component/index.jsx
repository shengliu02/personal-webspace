import React from 'react';

import {Link} from 'react-router-dom';
import '../style/bootstrap.min.css';
import '../style/templatemo-diagoona.css';

function Home() {
    return (
        <div className="Home">
            <div class="tm-container">
                <div>
                    <div class="tm-row pt-4">
                        <div class="tm-col-left">
                            <div class="tm-site-header media">
                                <i class="fas fa-umbrella-beach fa-3x mt-1 tm-logo"></i>
                                <div class="media-body">
                                    <h1 class="tm-sitename text-uppercase"> </h1>
                                    <p class="tm-slogon"></p>
                                </div>
                            </div>
                        </div>
                        <div class="tm-col-right">
                            <nav class="navbar navbar-expand-lg" id="tm-main-nav">
                                <button class="navbar-toggler toggler-example mr-0 ml-auto" type="button"
                                        data-toggle="collapse" data-target="#navbar-nav"
                                        aria-controls="navbar-nav" aria-expanded="false" aria-label="Toggle navigation">
                                    <span><i class="fas fa-bars"></i></span>
                                </button>

                                <div class="collapse navbar-collapse tm-nav" id="navbar-nav">
                                    <ul class="navbar-nav text-uppercase">
                                        <li class="nav-item active">
                                            <a class="nav-link tm-nav-link" href="#">Home <span class="sr-only">(current)</span></a>
                                            {/*<Link class="av-link tm-nav-link"/>*/}
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link tm-nav-link" href="about">About</a>
                                            {/*<Link to="/about">About</Link>*/}

                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link tm-nav-link" href="contact">Contact</a>
                                        </li>
                                    </ul>
                                </div>
                            </nav>
                        </div>
                    </div>

                    <div class="tm-row">
                        <div class="tm-col-left"></div>
                        <main class="tm-col-right">
                            <section class="tm-content">
                                <h2 class="mb-5 tm-content-title"></h2>
                                <p class="mb-5"></p>
                                {/*<hr class="mb-5">*/}
                                    {/*<p class="mb-5">Diagoona is Bootstrap v4.4.1 layout. This BG is 50% transparent. You can set the background images auto play settings (true or false in line number 33) in templatemo-script.js file in js folder.</p>*/}
                                    {/*<a href="about.html" class="btn btn-primary">Continue...</a>*/}
                                {/*</hr>*/}
                            </section>
                        </main>
                    </div>
                </div>

                <div class="tm-row">
                    <div class="tm-col-left text-center">
                        <ul class="tm-bg-controls-wrapper">
                            <li class="tm-bg-control active" data-id="0"></li>
                            <li class="tm-bg-control" data-id="1"></li>
                            <li class="tm-bg-control" data-id="2"></li>
                        </ul>
                    </div>
                    <div class="tm-col-right tm-col-footer">
                        <footer class="tm-site-footer text-right">
                            <p class="mb-0">Copyright 2020
                            </p>
                        </footer>
                    </div>
                </div>

                <div class="tm-bg">
                    <div class="tm-bg-left"></div>
                    <div class="tm-bg-right"></div>
                </div>
            </div>


        </div>
    );
}

export default Home;
