import React from 'react';

import '../style/bootstrap.min.css';
import '../style/templatemo-diagoona.css';

function Contact() {
    return (
        <div className="Contact">
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
                                        <li class="nav-item">
                                            <a class="nav-link tm-nav-link" href="/about">About</a>
                                        </li>
                                        <li class="nav-item active">
                                            <a class="nav-link tm-nav-link" href="/contact">Contact <span class="sr-only">(current)</span></a>
                                        </li>
                                    </ul>
                                </div>
                            </nav>
                        </div>
                    </div>

                    <div class="tm-row">
                        <div class="tm-col-left"></div>
                        <main class="tm-col-right tm-contact-main">
                            <section class="tm-content tm-contact">
                                <h2 class="mb-4 tm-content-title">Contact</h2>
                                <p class="mb-85"></p>
                                <form id="contact-form" action="" method="POST">
                                    <div class="form-group mb-4">
                                        <input type="text" name="name" class="form-control" placeholder="Name" required="" />
                                    </div>
                                    <div class="form-group mb-4">
                                        <input type="email" name="email" class="form-control" placeholder="Email" required="" />
                                    </div>
                                    <div class="form-group mb-5">
                                        <textarea rows="6" name="message" class="form-control" placeholder="Message..." required=""></textarea>
                                    </div>
                                    <div class="text-right">
                                        <button type="submit" class="btn btn-big btn-primary">Send It</button>
                                    </div>
                                </form>
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
                            <p class="mb-0">Copyright 2020 Sheng

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

export default Contact;
