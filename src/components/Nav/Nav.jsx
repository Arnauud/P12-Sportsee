import React from 'react';
import logo from "../../assets/Group.svg";
import { Link } from 'react-router-dom';
import yoga from "../../assets/yoga.png"
import swim from "../../assets/swim.svg"
import bike from "../../assets/bike.svg"
import weight from "../../assets/weight.svg"

function Nav() {
  return (
    <nav className="nav-section">
      <div className="nav-t">
        <img className="logo" src={logo} alt="sportsee Logo" />
        <p>Sportsee</p>
        <div className='nav-t-links'>
        <Link to="/" className="nav-text">Accueil</Link>
        <Link to="/" className="nav-text">Profil</Link>
        <Link to="/" className="nav-text">Réglage</Link>
        <Link to="/" className="nav-text">Communauté</Link>
        </div>
      </div>

      <div className="nav-l">
        <div className='nav-l-container-icon'>
        <Link to="/" className="nav-icon">
          <img src={yoga} alt="Yoga Icon" />
        </Link>

        <Link to="/" className="nav-icon">
          <img src={swim} alt="Swim Icon" />
        </Link>

        <Link to="/" className="nav-icon">
          <img src={bike} alt="Bike Icon" />
        </Link>

        <Link to="/" className="nav-icon">
          <img src={weight} alt="Weight Icon" />
        </Link>
      </div>
        <p>Copiryght, SportSee 2020</p>
      </div>
    </nav>
  );
}

export default Nav;
