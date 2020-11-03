import React, { Component } from 'react';
import Accueil from './Accueil';
import Login from './Login'
import { BrowserRouter, Route, Switch } from "react-router-dom"
import { Link } from 'react-router-dom';

class Navigation extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <BrowserRouter>
                <div className="container-fluid">
                    {/* Barre de menu */}
                    <div className="navbar navbar-expand-lg navbar-light bg-light">
                    <a className="navbar-brand" href="/">Doctolib</a>
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item m-2">
                                <Link to='/'>Accueil</Link>
                            </li>
                            <li className="nav-item m-2">
                                <Link to='/login'>Se connecter</Link>
                            </li>
                        </ul>
                    </div>
                    <Switch>
                        {/* creation des routes pour les url  */}
                        <Route path="/" exact component={Accueil}></Route>
                        <Route path="/login" component={Login}></Route>
                    </Switch>
                </div>
            </BrowserRouter>);
    }
}

export default Navigation;