import React from "react";
import logo from "../assets/images/abc_logo.svg";

function AppNav({ currentPage, onClick, pageData }) {
  let navItems;
  if (currentPage && pageData) {
    navItems = pageData.map((page) => {
      return (
        <button
          className={
            currentPage.slug === page.slug
              ? "nav__link nav__link--selected"
              : "nav__link"
          }
          key={page.slug}
          onClick={() => onClick(page)}
        >
          {page.title}
        </button>
      );
    });
  }

  return (
    <nav className="nav">
      <div className="nav__left">
        <img className="nav__logo" src={logo} alt="abc" />
        {navItems}
      </div>
      <div className="nav__right">
        <button className="btn btn--outline">Contact Us</button>
      </div>
    </nav>
  );
}

export default AppNav;
