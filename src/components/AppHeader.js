import React, { useEffect, useState } from "react";

import AppNav from "./AppNav";
import AppHeadline from "./AppHeadline";
import Loading from "./Loading";

function AppHeader({ pageData }) {
  const [data, setData] = useState([]);
  const [page, setPage] = useState();

  useEffect(() => {
    fetch("data.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((res) => res.json())
      .then((json) => {
        setData(json.pages);
        setPage(json.pages[0]);
      });
  }, []);

  const handlePageSelect = (page) => {
    setPage(page);
  };

  console.log(1, pageData);
  if (page) {
    return (
      <header
        className="header"
        style={{ backgroundImage: `url(/images/${page.blocks[0].background})` }}
      >
        <AppNav currentPage={page} onClick={handlePageSelect} pageData={data} />
        <AppHeadline currentPage={page} />
      </header>
    );
  }

  return <Loading />;
}

export default AppHeader;
