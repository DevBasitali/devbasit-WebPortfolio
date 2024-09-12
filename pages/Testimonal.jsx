import React from "react";

function Testimonal() {
  return (
    <>
      <section id="testimonal" className="bg-gray-950 px-14">
        <div className="flex flex-col items-center mx-auto max-w-screen-xl h-auto pt-4 pb-8">
          <blockquote className="text-xl italic font-semibold text-gray-900 dark:text-white mt-10">
            <svg
              className="w-8 h-8 text-gray-400 dark:text-gray-600 mb-4"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 18 14"
            >
              <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
            </svg>
            <span className="mb-8 font-thin text-gray-500">
              Huzaifa Afraz | TopDesizn CEO <span>.</span> 24 July 2024 {" "} via LinkedIn
            </span>
            <p className="mt-5">
            I highly recommend Basit Ali, a strong MERN stack developer with excellent problem-solving skills. Basit has proven his ability to build robust, scalable web applications. He demonstrates proficiency in React, Node.js, Express.js, and MongoDB. His technical expertise and dedication make him a valuable asset to any team.
            </p>
          </blockquote>
        </div>
      </section>
    </>
  );
}

export default Testimonal;
