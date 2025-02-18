import React from "react";
import {
  FaSearch,
  FaHeart,
  FaCartPlus,
  FaPersonBooth,
  FaList,
} from "react-icons/fa";
import {
  FaCartFlatbed,
  FaPerson,
  FaPersonChalkboard,
  FaPersonCircleQuestion,
  FaPersonHalfDress,
  FaPersonRays,
} from "react-icons/fa6";
import ContentDropdown from "./ContentDropdown";
function CategoriesTopBar() {
  return (
    <div>
      <section
        className="text-white sticky flex 
        justify-between items-center bg-background-dark h-15 @container"
      >
        <div className="nike-logo ms-10 text-gray-500 ">
          <svg
            aria-hidden="true"
            class="swoosh-svg"
            focusable="false"
            viewBox="0 0 24 24"
            role="img"
            width="80px"
            height="80px"
            fill="none"
          >
            <path
              fill="currentColor"
              fill-rule="evenodd"
              d="M21 8.719L7.836 14.303C6.74 14.768 5.818 15 5.075 15c-.836 0-1.445-.295-1.819-.884-.485-.76-.273-1.982.559-3.272.494-.754 1.122-1.446 1.734-2.108-.144.234-1.415 2.349-.025 3.345.275.2.666.298 1.147.298.386 0 .829-.063 1.316-.19L21 8.719z"
              clip-rule="evenodd"
              class=""
            ></path>
          </svg>
        </div>
        <div className="categoryItems md:max-lg:hidden sm:max-md:hidden @3xs:max-md:hidden  ">
          <ul className="flex *:me-5 xl:ms-50 font-semibold ">
            <li className="group duration-300 transition-all hover:underline underline-offset-0">
              <a href="#">New</a>
              <ContentDropdown />
            </li>
            <li className="dropDowLists group">
              <ContentDropdown />
              <a href="#">Men</a>
            </li>
            <li className="dropDowLists group">
              <a href="#">Women</a>
              <ContentDropdown />
            </li>
            <li className="dropDowLists group">
              <a href="#">Kids</a>
              <ContentDropdown />
            </li>
            <li className="dropDowLists group">
              <a href="#">Jordan</a>
              <ContentDropdown />
            </li>
          </ul>
        </div>
        <div className="icon-media me-10">
          <ul className="flex *:me-5 items-center">
            <li className="group relative ">
              <div
                className="container-search absolute  xl:top-3 left-2 opacity-70 md:top-2.5 
              sm:max-md:static @3xs:max-sm:top-2.5"
              >
                <TopBarIcon icon={<FaSearch />} />
              </div>
              <input
                className=" bg-background-topBar border-none rounded-4xl
                             border border-gray-500 py-2.5 w-40 ps-8 outline-0 md
                             md:max-xl:w-0 md:max-xl:bg-transparent transition-all duration-300
                             sm:max-md:hidden
                             @3xs:max-sm:w-0
                             @3xs:max-sm:bg-transparent"
                type="text"
                placeholder="Search"
              />
            </li>
            <li className="md:max-lg:hidden sm:max-md:hidden opacity-60 @3xs:max-sm:hidden">
              <TopBarIcon icon={<FaHeart size="20px" />} />
            </li>
            <li className="opacity-60 lg:hidden">
              <TopBarIcon icon={<FaPerson size="20px" />} />
            </li>
            <li className="opacity-60 ">
              <TopBarIcon icon={<FaCartPlus size="20px" />} />
            </li>
            <li className="opacity-60 lg:hidden">
              <TopBarIcon icon={<FaList size="20px" />} />
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}

const TopBarIcon = ({ icon }) => {
  return (
    <div className="text-white inline-flex ">
      <section>{icon}</section>
    </div>      
  );
};
export default CategoriesTopBar;
