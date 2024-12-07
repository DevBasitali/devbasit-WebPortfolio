import React from "react";

function Projects() {
  const portfolio = [
    {
      img: "css.svg",
      title: "Rent Rush - Car Rental Service",
      description: "Showcase of my work for RentRush Car Rental Services",
      link: "https://github.com/DevBasitali?tab=repositories",
    },
    {
      img: "html.svg",
      title: "Promtmenia - Promt Sharing Website",
      description:
        "Highlighting my Front-end and backend work on the Promptmenia website.",
        link: "https://github.com/DevBasitali?tab=repositories",    },
    {
      img: "nextjs.svg",
      title: "Student Attendance Tracking",
      description:
        "Highlighting my front-end work for Student Attendance Tracking website",
        link: "https://github.com/DevBasitali?tab=repositories",    },
    {
      img: "reactjs.svg",
      title: "workout Blog - You can workout easily",
      description:
        "Showcasing workout project in MERN Stack.",
        link: "https://github.com/DevBasitali?tab=repositories",    },
  ];

  return (
    <>
      <section id="Projects" className="bg-gray-900 px-14">
        <div className="flex flex-col items-center mx-auto max-w-screen-xl h-max lg:h-screen md:h-max">
          <div className="text-center max-w-xl">
            <h1 className="font-extrabold text-xl sm:text-md md:text-4xl lg:text-4xl mt-10">
              My Recent Work
            </h1>
          </div>

          <div className="bg-gray-900 mx-auto my-10 lg:px-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {portfolio.map((item, index) => (
                <div
                  key={index}
                  className="flex w-auto flex-wrap mb-4 max-w-sm bg-gray-950 rounded-xl shadow-lg"
                >
                  <div className="w-full">
                    <img
                      alt={item.title}
                      className="block h-48 w-full rounded-t-lg object-cover object-center"
                      src={`/frontend/${item.img}`}
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-gray-100 text-lg font-semibold">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4">
                      {item.description}
                    </p>
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noreferrer"
                      className="primary_btn"
                    >
                      Visit Now
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Projects;
