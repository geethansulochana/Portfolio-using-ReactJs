import React from "react";


function NavBar() {
  return (
    <nav
      className="navbar is-info"
      role="navigation"
      aria-label="main navigation"
    >
      <div className="navbar-brand">
        
        <button className="button navbar-burger" data-target="navMenu">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
      <div className="navbar-menu" id="navMenu">
        <div className="navbar-end">
        <a className="navbar-item" href="#home">
        <strong>Home</strong>
          </a>
          <a className="navbar-item" href="#about">
            <strong>About Me</strong>
          </a>
          <a className="navbar-item" href="#education">
          <strong>Education</strong>
          </a>
          <a className="navbar-item" href="#projects">
          <strong>Projects</strong>
          </a>
        </div>
        
      </div>
    </nav>
  );
}

document.addEventListener("DOMContentLoaded", () => {
  // Get all "navbar-burger" elements
  const $navbarBurgers = Array.prototype.slice.call(
    document.querySelectorAll(".navbar-burger"),
    0
  );

  // Add a click event on each of them
  $navbarBurgers.forEach((el) => {
    el.addEventListener("click", () => {
      // Get the target from the "data-target" attribute
      const target = el.dataset.target;
      const $target = document.getElementById(target);

      // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
      el.classList.toggle("is-active");
      $target.classList.toggle("is-active");
    });
  });
});

export default NavBar;
