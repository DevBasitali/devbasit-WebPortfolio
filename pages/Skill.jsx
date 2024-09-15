import { DATA } from "../dashboard/userData";

function Skill() {
  const skilldata = DATA.skillsPage.skilldata;

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
        </div>

        {Object.entries(DATA.skillsPage.skilldata).map(
          ([category, section]) => (
            <div className=" justify-center items-center flex gap-4">              
              
              
                {section.icon.map((icon, index) => (
                  <img
                    key={index}
                    src={icon}
                    alt={`${category} icon`}
                    width={120}
                    height={120}
                  />
                ))}
              
            </div>
          )
        )}

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
