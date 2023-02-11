import React from 'react';
import { Link } from 'react-router-dom';

import '../Styles/NavBar.css'
function NavBar(){
   return(
    <div>
        <nav class="navbar navbar-expand-md bg-dark navbar-dark">
            <div class="container">
                <Link to='/' class="navbar-brand">Okvoiture</Link>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarNav">
                    <div class="mx-auto"></div>
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <Link to='/' class="nav-link text-white">Accueil</Link>
                        </li>
                        <li class="nav-item">
                            <Link to="/location" class="nav-link text-white">Location</Link>
                        </li>
                        <li class="nav-item">
                        <Link to='/' class="nav-link text-white">Reservation</Link>
                        </li>

                    </ul>
                </div>
            </div>
        </nav>
    </div>
   ) ;  
}
export default NavBar