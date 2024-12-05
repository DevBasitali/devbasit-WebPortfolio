import Image from "next/image";
import { DATA } from "@/dashboard/userData";

function HomePage() {
  return (
    <>
      {/* <section id="Home" className="relative w-auto h-screen">
        <Image
          src={DATA.heroBg}
          alt="Background"
          layout="fill"
          objectFit="cover"
          quality={75}
          className="-z-10"
        />
        <div className="absolute inset-0 flex justify-evenly items-center">
          
          <div>
            <h3 className="font-semibold text-xl text-teal-500">HI THERE,</h3>
            <h1 className="text-gray-200 text-6xl font-bold from-neutral-800">
              I am {DATA.name} <br />
              <span className="sm:block mt-5 text-teal-500 font-semibold text-4xl tracking-widest">
                {DATA.role}
              </span>
            </h1>
            <a
              target="_blank"
              className="primary_btn text-md font-medium rounded-full"
              href={DATA.cvLink}
            >
              Hire Me
            </a>
          </div>
          <div className="mt-5 w-max"></div>
        </div>
      </section> */}
      <section id="Home" className="relative w-auto h-screen">
        <Image
          // src={DATA.heroPc}
          // src={DATA.heroBg}
          src={DATA.heroBg}
          alt="Background"
          layout="fill"
          objectFit="cover"
          quality={75}
          className="-z-10"
        />
        <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
          <div className="mx-auto max-w-3xl text-center">
            {/* <h1 className="bg-gradient-to-r from-blue-950 via-teal-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl"> */}
            <h1 className="bg-gradient-to-r text-white bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl">
              Dev Basit Ali
              <span className="sm:block"> MERN Stack Developer </span>
            </h1>

            <p className="mx-auto mt-4 max-w-xl sm:text-xl/relaxed">
            MERN Stack Developer creating dynamic, high-performance web applications.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <a
                className="btn_primary2"
                href="#"
              >
                Hire Now
              </a>

              {/* <a
                className="block w-full rounded border border-blue-600 px-12 py-3 text-sm font-medium text-white hover:bg-blue-600 focus:outline-none focus:ring active:bg-blue-500 sm:w-auto"
                href="#"
              >
                Learn More
              </a> */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default HomePage;
