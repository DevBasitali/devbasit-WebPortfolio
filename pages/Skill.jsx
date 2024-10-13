
import { DATA } from "../dashboard/userData";
import Image from "next/image";
import IconCloud from "@/components/skillsSlug"

function Skill() {
  const skillsPage = DATA.skillsPage;

  return (
    <>
      <section id="Skill" className="skill_sec">
        <div className="skill_heading my-10">
          <div className="max-w-xl text-center ">
            <h1 className="text-xl font-extraboldtext-white sm:text-xl md:text-4xl lg:text-5xl">
              Skills.
            </h1>
            <p className="text-sm mt-4 ml-5 max-w-lg text-gray-300 sm:text:md md:text-xl lg:text-xl tracking-wide">
              I create professional, user-friendly applications with a focus on
              quality and performance.
            </p>
          </div>
          <skillsSlug/>
        </div>

        

        {/* {Object.entries(DATA.skillsPage).map(([key, value]) => (
          <div
            key={key}
            className="flex justify-center"
          >
            {value.Img.map((img, index) => (
              <Image
              key={index} 
              src={img} alt={key}
              width={70}
              height={70}
              />
            ))}
          </div>
        ))} */}

        {/* <div className="flex flex-wrap items-center justify-center gap-5">
            <div className="w-40 h-40">
              <img src="/backend/mongodb.svg" alt="MongoDB" />
            </div>
            <div className="w-40 h-40">
              <img src="/backend/express.svg" alt="Express" />
            </div>
            <div className="w-40 h-40">
              <img src="/frontend/reactjs.svg" alt="React" />
            </div>
            <div className="w-40 h-40">
              <img src="/backend/nodejs.svg" alt="Node.js" />
            </div>
          </div> */}
      </section>
    </>
  );
}

export default Skill;
