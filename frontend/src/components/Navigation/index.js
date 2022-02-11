import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import ProfileButton from "./ProfileButton";
import LoginFormModal from "../LoginFormModal";
import "./Navigation.css";
import logo from "../../images/cryptseeker-logo.png";

function Navigation({ isLoaded }) {
  const sessionUser = useSelector((state) => state.session.user);
  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <>
        <li>
          <NavLink className="nav-link" exact to={`/trips/${sessionUser.id}`}>
            Trips
          </NavLink>
        </li>
        {sessionUser.userTypeId === 2 && (
          <li>
            <NavLink className="nav-link" to={`/listings/${sessionUser.id}`}>
              Listings
            </NavLink>
          </li>
        )}
        <ProfileButton user={sessionUser} />
      </>
    );
  } else {
    sessionLinks = (
      <>
        <li>
          <LoginFormModal />
        </li>
        <li>
          <NavLink className="nav-link" to="/signup">
            Sign Up
          </NavLink>
        </li>
        <li>
          <NavLink className="host-signup-button" to="/host/signup">
            Start Hosting
          </NavLink>
        </li>
      </>
    );
  }

  return (
    <nav>
      <ul className="left-nav">
        <li>
          <NavLink exact to="/">
            <img className="main-logo" src={logo}></img>
          </NavLink>
        </li>
      </ul>
      <ul className="right-nav">
        <li>
          <NavLink className="nav-link" exact to="/haunts">
            Near me
          </NavLink>
        </li>
        {isLoaded && sessionLinks}
      </ul>
    </nav>
  );
}

export default Navigation;
