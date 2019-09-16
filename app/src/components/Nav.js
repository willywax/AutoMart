import React from "react";

function Nav() {
  return (
    <nav>
      <div id="nav-button">
        <img src="./images/logos" alt="Logo" />
      </div>
      <div id="nav-content" class="hide">
        <ul>
          <li>
            <button onclick="logInPage('Create Ad')" className="btn order">
              POST AD
            </button>
          </li>
          <li>
            <a href="./signin.html">SIGN IN</a>
          </li>
          <li>
            <a href="./signp.html">SIGN UP</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}


export default Nav;