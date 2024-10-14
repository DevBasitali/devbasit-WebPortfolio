// import OrbitingCircles from "@/components/ui/orbiting-circles";
import { DATA } from "../dashboard/userData";
import Image from "next/image";

// import IconCloud from "@/components/ui/icon-cloud";

function Skill() {
  const skillsPage = DATA.skillsPage;

  return (
    <>
      <section id="Skill" className="relative h-screen grid grid-rows-2 bg-gray-950 sm:h-screen lg:h-auto">
        <div className="hidden lg:flex lg:justify-center lg:items-center">
         <div className="max-w-xl text-center">
            <h1 className="text-xl font-extraboldtext-white sm:text-xl md:text-4xl lg:text-5xl">
              EXPERIENCE.
            </h1>
            <p className="text-sm mt-4 ml-5 max-w-lg text-gray-300 sm:text:md md:text-xl lg:text-xl tracking-wide">
              I create professional, user-friendly applications with a focus on
              quality and performance.
            </p>
          </div>
        </div>
        <div className="mb-3">
          {Object.entries(DATA.skillsPage).map(([key, value]) => (
            <div
              key={key}
              className="flex flex-wrap justify-center items-center gap-4 sm:grid sm:grid-cols-2 lg:flex lg:flex-row"
            >
              {value.Img.map((img, index) => (
                <Image
                  key={index}
                  src={img}
                  alt={key}
                  width={150}
                  height={150}
                />
              ))}
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default Skill;
