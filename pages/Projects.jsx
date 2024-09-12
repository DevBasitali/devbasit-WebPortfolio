import React from "react";

function Projects() {
  return (
    <>
      <section id="Projects" className="bg-gray-900 px-14">
        <div className="flex flex-col items-center mx-auto max-w-screen-xl h-max lg:h-screen md:h-max">
          <div className="text-center max-w-xl">
            <h1 className="font-extrabold text-xl sm:text-md md:text-4xl lg:text-4xl mt-10">My Recent Work</h1>
          </div>

          <div className="bg-gray-900 mx-auto my-10 lg:px-32">
            <div className=" grid grid-cols-2 -m-1 md:-m-2 md:grid-cols-3 lg:grid-cols-3">
              <div className="flex w-auto flex-wrap mb-4">
                <div className="w-full p-1 md:p-2">
                  <img
                    alt="gallery"
                    className="block h-full w-full  object-cover object-center"
                    src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp"
                  />
                </div>
              </div>
              <div className="flex w-auto flex-wrap mb-4">
                <div className="w-full p-1 md:p-2">
                  <img
                    alt="gallery"
                    className="block h-full w-full  object-cover object-center"
                    src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(74).webp"
                  />
                </div>
              </div>
              <div className="flex w-auto flex-wrap mb-4">
                <div className="w-full p-1 md:p-2">
                  <img
                    alt="gallery"
                    className="block h-full w-full  object-cover object-center"
                    src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(75).webp"
                  />
                </div>
              </div>
              <div className="flex w-auto flex-wrap mb-4">
                <div className="w-full p-1 md:p-2">
                  <img
                    alt="gallery"
                    className="block h-full w-full  object-cover object-center"
                    src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(70).webp"
                  />
                </div>
              </div>
              <div className="flex w-auto flex-wrap mb-4">
                <div className="w-full p-1 md:p-2">
                  <img
                    alt="gallery"
                    className="block h-full w-full  object-cover object-center"
                    src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(76).webp"
                  />
                </div>
              </div>
              <div className="flex w-auto flex-wrap mb-4">
                <div className="w-full p-1 md:p-2">
                  <img
                    alt="gallery"
                    className="block h-full w-full  object-cover object-center"
                    src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(72).webp"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Projects;
