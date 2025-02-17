import React from "react";
import Topbar from "./helps/Topbar";
import CategoriesTopBar from "./helps/categoriesTopbar";
import MainShow from "./MainShow";

function Head() {
  return (
    <div className="@container" >
      <section className="sticky @3xs:h-15 sm:h-15 top-0 h-25 md:max-lg:h-15 bg-amber-800 ">
      <Topbar />
      <CategoriesTopBar />
      </section>
    </div>
  );
}


export default Head;
