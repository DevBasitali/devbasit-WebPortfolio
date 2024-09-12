import Image from "next/image";
import { DATA } from "@/dashboard/userData";

function HomePage() {
  return (
    <>
      <section id="Home" 
      className="relative w-full h-max"
      >
        <Image 
        src={DATA.heroBg}
        alt="Background"
        layout="fill"
        objectFit="cover"
        quality={75}
        className="-z-10"
        />
        <div className="mx-auto max-w-screen-xl py-32 px-8 lg:flex lg:h-screen lg:items-center">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-xl font-extrabold sm:text-5xl text-gray-200">
              Hi, I Am {DATA.name} <br />
              <span className="sm:block mt-5 text-teal-500">
                {" "}
                A {DATA.role}{" "}
              </span>
            </h1>
            

            <div className="flex flex-row justify-center mt-5">
              <a
                target="_blank"
                className="primary_btn text-md font-medium"
                
                href={DATA.cvLink}
              >
                Download CV
              </a>
              </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default HomePage;
