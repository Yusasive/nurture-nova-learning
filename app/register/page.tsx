
import React from "react";

export default function Register() {
  return (
    <div className="bg-[#eff2f6]">
      <section className="bg-center bg-no-repeat pt-24 bg-about-banner bg-blend-multiply">
        <div className="px-4 mx-auto max-w-screen-xl text-center py-4 lg:py-20">
          <h1 className="mb-4 text-4xl mt-10 font-extrabold tracking-tight leading-none text-[#FF3366] md:text-5xl lg:text-6xl">
            Register
          </h1>
        </div>
      </section>

      <div>
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLSeR08Zwitk744JCncHrxhD7WkNIK7YB5zv_5J5ZgjRByq3s6w/viewform?embedded=true"
          frameBorder="0"
          allowFullScreen
          title="Embedded form"
          className="w-full h-screen"
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
}
