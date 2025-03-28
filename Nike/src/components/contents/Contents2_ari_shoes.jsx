import React from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";;

function Contents2_ar_shoes(props) {
  return (
    <div>
      <section className="pt-[2rem] p-[5rem] overflow-hidden space-y-5">
        <section className="flex items-center justify-between">
          <p className="text-white text-2xl font-extrabold ">{props.tit}</p>
          
        <div className="click-btn flex text-white space-x-8 text-2xl mr-3 *:cursor-pointer ">
          <div className="left-side">
            <FaAngleLeft />
          </div>
          <div className="left-side">
            <FaAngleRight/>
          </div>
        </div>
        </section>
        <section className="h-[18rem] flex space-x-3 *:w-[15rem] ">
          <article className="relative ">
           
              <p className="bg-neutral-950 absolute top-2 left-2 text-white opacity-90 inline-block w-[3rem] text-center  p-1 font-bold">
                New
              </p>
            <div className="container-img bg-neutral-400 ">
              <img src="shoes1.webp" alt="unknown" />
            </div>
            <section className="text-white mt-4 space-y-1 font-stretch-50%">
              <p>{props.name} AMD</p>
              <p>Boy's</p>
              <p>$160.00</p>
            </section>
          </article>
          <article className="relative">
            <p className="bg-neutral-950 absolute top-2 left-2 text-white opacity-90 inline-block w-[3rem] text-center  p-1 font-bold">
              New
            </p>
            <div className="container-img bg-neutral-400 ">
              <img src="shoes2.webp" alt="unknown" />
            </div>
            <section className="text-white mt-4 space-y-1 font-stretch-50%">
              <p>{props.name} AMD</p>
              <p>Boy's</p>
              <p>$160.00</p>
            </section>
          </article>
          <article className="relative">
            <p className="bg-neutral-950 absolute top-2 left-2 text-white opacity-90 inline-block w-[3rem] text-center  p-1 font-bold">
              New
            </p>
            <div className="container-img bg-neutral-400 ">
              <img src="shoes3.webp" alt="unknown" />
            </div>
            <section className="text-white mt-4 space-y-1 font-stretch-50%">
              <p>{props.name} AMD</p>
              <p>Boy's</p>
              <p>$160.00</p>
            </section>
          </article>
          <article className="relative">
            <p className="bg-neutral-950 absolute top-2 left-2 text-white opacity-90 inline-block w-[3rem] text-center  p-1 font-bold">
              New
            </p>
            <div className="container-img bg-neutral-400 ">
              <img src="shoes4.webp" alt="unknown" />
            </div>
            <section className="text-white mt-4 space-y-1 font-stretch-50%">
              <p>{props.name} </p>
              <p>Boy's</p>
              <p>$160.00</p>
            </section>
          </article>
          <article className="relative">
            <p className="bg-neutral-950 absolute top-2 left-2 text-white opacity-90 inline-block w-[3rem] text-center  p-1 font-bold">
              New
            </p>
            <div className="container-img bg-neutral-400 ">
              <img src="shoes4.webp" alt="unknown" />
            </div>
            <section className="text-white mt-4 space-y-1 font-stretch-50%">
              <p>{props.name} </p>
              <p>Boy's</p>
              <p>$160.00</p>
            </section>
          </article>
          <article className="relative">
            <p className="bg-neutral-950 absolute top-2 left-2 text-white opacity-90 inline-block w-[3rem] text-center  p-1 font-bold">
              New
            </p>
            <div className="container-img bg-neutral-400 ">
              <img src="shoes6.webp" alt="unknown" />
            </div>
            <section className="text-white mt-4 space-y-1 font-stretch-50%">
              <p>{props.name} </p>
              <p>Boy's</p>
              <p>$160.00</p>
            </section>
          </article>
          <article className="relative">
            <p className="bg-neutral-950 absolute top-2 left-2 text-white opacity-90 inline-block w-[3rem] text-center  p-1 font-bold">
              New
            </p>
            <div className="container-img bg-neutral-400 ">
              <img src="shoes7.webp" alt="unknown" />
            </div>
            <section className="text-white mt-4 space-y-1 font-stretch-50%">
              <p>{props.name} </p>
              <p>Boy's</p>
              <p>$160.00</p>
            </section>
          </article>
        </section>
      </section>
    </div>
  );
}

export default Contents2_ar_shoes;
