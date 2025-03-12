import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { VscAccount } from "react-icons/vsc";
import { IoLogInOutline } from "react-icons/io5";
import { HiMiniHome } from "react-icons/hi2";
import { FaTable } from "react-icons/fa"; 

function NavBar() {
  return (
    <div>
      <nav className="navbar navbar-expand">
        <a className="navbar-brand" href='/'>
          <img src={`${process.env.PUBLIC_URL}/DI.png`} alt='DineIn Logo' style={{ height: "50px" }} />
        </a>
       
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <a className="nav-item nav-link" href='/home'>
            <HiMiniHome />
            </a>
            <a className="nav-item nav-link" href="/login">
              <IoLogInOutline />
            </a>
            <a className="nav-item nav-link" href='/profile'>
              <VscAccount />
            </a>
            <a className="nav-item nav-link" href='/reserved-table'>
              <FaTable /> 
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
