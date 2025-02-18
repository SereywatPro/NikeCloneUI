import React from 'react'

function ContentDropdown(   ) {
  return (
    <div
      className=" text-amber-50 absolute h-0  bg-background-dark  top-10 
          left-0 transition-all duration-300 group-hover:h-50 opacity-0 group-hover:opacity-100 min-w-full pointer-events-auto  "
    >
      <section className=" flex px-[10rem] justify-evenly py-10 invisible group-hover:visible">
        <div className="section1">
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Home</a>
            </li>
          </ul>
        </div>
        <div className="section2">
          <ul>
            <li>
              <a href="#">Blog</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
          </ul>
        </div>
        <div className="section3">
          <ul>
            <li>
              <a href="#">Contact</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>
        <div className="section3">
          {" "}
          <ul>
            <li>
              <a href="#">About us</a>
            </li>
            <li>
              <a href="#">About us</a>
            </li>
            <li>
              <a href="#">About us</a>
            </li>
            <li>
              <a href="#">About us</a>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}

export default ContentDropdown
