import React from "react";

function Navbar() {
  return (
    <div className="wrapper">
      <nav>
        <a href="/home" id="logo">
          <img
            src="./img/Logo transhende.png"
            alt="Fundashon Transhende logo"
            className="logo"
          />
        </a>
        <ul>
          <li>
            <a href="/intake">Intake</a>
          </li>
          <li>
            <a href="/client">Client</a>
          </li>
          <li>
            <a href="/team">Team</a>
          </li>
          <li>
            <a href="/agenda">Agenda</a>
          </li>
          <li>
            <a href="/routes">Routes</a>
          </li>
          <li>
            <a href="/report">Report</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
