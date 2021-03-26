import React from "react";

function AppHeadline({ currentPage }) {
  console.log(currentPage);

  return (
    <div className="headline">
      <div className="headline__content">
        <h1 className="headline__primary">{currentPage.blocks[0].cta}</h1>
        <p className="headline__sub">{currentPage.blocks[0].subhead}</p>
      </div>
      <div className="headline__content-sub">
        <p className="headline__text">
          Nemo enim ipsam voluptatem quia voluptas.
        </p>
        <button className="headline__cta">
          Let's Talk <span>&rarr;</span>
        </button>
      </div>
    </div>
  );
}

export default AppHeadline;
