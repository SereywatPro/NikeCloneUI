import React from 'react'
import { BiFontFamily } from 'react-icons/bi';

function MainShow() {
  
  return (
    <div>
      <main>
        <section className="flex flex-col">
          <img className='lg:mt-10' src="brandNike.jpg" alt="none" />

          <div
            className="overlay-content-mainShow text-center text-white mt-10 
          "
          >
            <p
              className="small-title
            text-xl font-semibold
            "
            >
              Nike Basketball
            </p>
            <div className=" big-title text-7xl font-extrabold *:max-lg:text-5xl">
              <p>BLACK LABEL</p>
              <p>COLLECTION</p>
            </div>
            <button className="btn mt-5 ">Shop</button>
          </div>
        </section>
      </main>
    </div>
  );
}

export default MainShow
