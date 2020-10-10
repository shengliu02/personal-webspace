import React from 'react';
import Home from './index';
import About from './about';
import Contact from './contact';

import {BrowserRouter, Route, Switch, Link} from 'react-router-dom';

function Router() {
    return (

    <BrowserRouter>
        <div>
            {/*<div className="navbar-nav text-uppercase">*/}
            {/*<ul class="">*/}
                {/*<Link class="nav-item" to="/">Home</Link>*/}
                {/*<Link class="nav-item" to="/about">About</Link>*/}
                {/*<Link class="nav-item" to="/contact">Contact</Link>*/}

            {/*</ul>*/}
            <Switch>
                <Route exact path="/">
                    <Home/>
                </Route>
                <Route path="/about">
                    <About/>
                </Route>
                <Route path="/contact">
                    <Contact/>
                </Route>

            </Switch>
        </div>
    </BrowserRouter>


    )

}

export default Router;