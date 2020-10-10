import React from 'react';

import '../style/bootstrap.min.css';
import '../style/templatemo-diagoona.css';

function About() {
    return (
        <div className="About">
            <div class="tm-container">
                <div>
                    <div class="tm-row pt-4">
                        <div class="tm-col-left">
                            <div class="tm-site-header media">
                                <i class="fas fa-umbrella-beach fa-3x mt-1 tm-logo"></i>
                                <div class="media-body">
                                    <h1 class="tm-sitename text-uppercase"></h1>
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
                                        <li class="nav-item">
                                            <a class="nav-link tm-nav-link" href="/">Home</a>
                                        </li>
                                        <li class="nav-item active">
                                            <a class="nav-link tm-nav-link" href="/about">About <span class="sr-only">(current)</span></a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link tm-nav-link" href="/contact">Contact</a>
                                        </li>
                                    </ul>
                                </div>
                            </nav>
                        </div>
                    </div>

                    <div class="tm-row">
                        <div class="tm-col-left"></div>
                        <main class="tm-col-right">
                            <section class="tm-content tm-about">
                                <h2 class="mb-5 tm-content-title">About</h2>
                                <div class="mb-4">
                                    <div class="media my-3">
                                        <i class="fas fa-shapes fa-3x p-3 mr-4"></i>
                                        <div class="media-body">
                                            <p>Cras quam urna, interdum at posuere ac, tincidunt ut ipsum. Nam condimentum placerat enim. Nullam euismod sapien.</p>
                                        </div>
                                    </div>
                                    <div class="media my-3">
                                        <i class="fas fa-draw-polygon fa-3x p-3 mr-4"></i>
                                        <div class="media-body">
                                            <p>Nunc id hendrerit nunc. Etiam ultricies arcu sem, vel dapibus lacus lacinia quis. Nunc auctor placerat nisi ac ultrices.</p>
                                        </div>
                                    </div>
                                    <div class="media my-3">
                                        <i class="fab fa-creative-commons-share fa-3x p-3 mr-4"></i>
                                        <div class="media-body">
                                            <p>Vestibulum imperdiet hendrerit nibh. Integer sit amet lacus et nunc auctor tincidunt eu ac sapien. Ut suscipit velit eget faucibus finibus.</p>
                                        </div>
                                    </div>
                                    <div class="media my-3">
                                        <i class="fas fa-bookmark fa-3x p-3 mr-4"></i>
                                        <div class="media-body">
                                            <p>Prasent eget enim vitae sapien egestas aliquet non quis neque. Duis pharetra varius massa, ut bibendum tortor sodales ac.</p>
                                        </div>
                                    </div>
                                </div>
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

export default About;
