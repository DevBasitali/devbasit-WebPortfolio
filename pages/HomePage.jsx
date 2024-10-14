import Image from "next/image";
import { DATA } from "@/dashboard/userData";

function HomePage() {
  return (
    <>
      <section id="Home" className="relative w-auto h-screen">
        <Image
          src={DATA.heroBg}
          alt="Background"
          layout="fill"
          objectFit="cover"
          quality={75}
          className="-z-10"
        />
        <div className=" flex flex-col justify-center items-center">
          <div className=" mx-auto w-auto mt-20">
            <h1 className=" text-gray-200 text-6xl font-bold">
              Hi, I am {DATA.name} <br />
              <span className="sm:block mt-5 text-teal-500 font-semibold text-3xl tracking-widest">
                {" "}
               {DATA.role}{" "}
              </span>
            </h1>
          </div>

          <div className="mt-5 w-max">
            <a
              target="_blank"
              className="primary_btn text-md font-medium"
              href={DATA.cvLink}
            >
              Download CV
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

export default HomePage;
