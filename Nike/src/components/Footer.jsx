import React from "react";

function Footer() {

    const stylesLi = {
        fontSize: "20px"
    }
  return (
    <div>
      <footer className="py-[5rem] space-y-10 ">
        <section className="first-f flex flex-col items-center">
          <div className="nike-logo ms-10 text-gray-500 ">
            <svg
              aria-hidden="true"
              class="swoosh-svg"
              focusable="false"
              viewBox="0 0 24 24"
              role="img"
              width="120px"
              height="120px"
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
          <ul className="text-white flex space-x-4 text-lg font-extralight ">
            <li>
              <a className="hover:underline" href="#">Find a Store</a>
            </li>
            <li>
              <a className="hover:underline" href="#">Help</a>
            </li>
            <li>
              <a className="hover:underline" href="#">Join Us</a>
            </li>
            <li>
              <a className="hover:underline" href="#">Sign In</a>
            </li>
          </ul>
        </section>

        <section
          className="second-f text-white flex space-x-25 justify-center
        *:space-y-5 *:font-extralight"
        >
          <ul>
            <p className="mb-5 text-2xl ">Featured</p>
            <li className="text-md txf">Air Force 1</li>
            <li className="text-md txf">Jordan 1</li>
            <li className="text-md txf">Air Max Dn</li>
            <li className="text-md txf">Vomero</li>
          </ul>
          <ul>
            <p className="mb-5 text-2xl">Shoes</p>
            <li className="text-md txf">All Shoes</li>
            <li className="text-md txf">Jordan Shoes</li>
            <li className="text-md txf">Running Shoes</li>
            <li className="text-md txf">Basketball Shoes</li>
          </ul>
          <ul>
            <p className="mb-5 text-2xl">Clothing</p>
            <li className="text-md txf">All Clothing</li>
            <li className="text-md txf">Top & T-Shirts</li>
            <li className="text-md txf">Shorts</li>
            <li className="text-md txf">Hoodies & Pullovers</li>
          </ul>
          <ul className="">
            <p className="mb-5 text-2xl">Kids</p>
            <li className="text-md txf">Infant & Toddler Shoes</li>
            <li className="text-md txf">Kids Shoes</li>
            <li className="text-md txf">Kids Basketball Shoes</li>
            <li className="text-md txf">Kids Running Shoes</li>
          </ul>
              </section><br />  <br />
          <hr />
      </footer>
    </div>
  );
}

export default Footer;
