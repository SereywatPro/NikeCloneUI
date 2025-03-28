import React from "react";

function ContentsText(props) {
    return <div>
        <main className="p-[6rem] flex justify-center space-y-8 flex-col">
            <img src={props.img} alt="unknown" />

            <section className="text-white text-center font-medium mt-2 text-lg">
                <p>imaging I play basketball with my girl friends and if <br></br> I win she is going to become my wife</p>
                <button className="bg-neutral-200 text-background-dark px-3 py-2 rounded-2xl mt-5 cursor-pointer hover:bg-neutral-400">Click here to imaging</button>
            </section>

      </main>
        


  </div>;
}

export default ContentsText;
