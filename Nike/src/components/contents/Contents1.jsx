import React from "react";

function Contents1() {
  return (
    <div>
      <main className="mt-[5rem] p-[5rem] flex justify-center">
        <section className="flex space-x-3 ">
          <article className="relative">
            <img src="1.jpg" alt="unknown" loading="lazy" />
            <div className="btn-content1 absolute bottom-10 left-5">Men</div>
          </article>
          <article className="relative">
            <img src="3.jpg" alt="unknown" />
            <div className="btn-content1 absolute bottom-10 left-5">Kids</div>
          </article>
          <article className="relative">
            <img src="2.jpg" alt="unknown" />
            <div className="btn-content1 absolute bottom-10 left-5">Women</div>
          </article>
        </section>
      </main>
    </div>
  );
}

export default Contents1;
