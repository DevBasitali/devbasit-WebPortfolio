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
  <div className="absolute inset-0 flex justify-evenly items-center">
    {/* Existing content */}
    <div>
      <h3 className="font-semibold text-xl text-teal-500">
        HI THERE,
      </h3>
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

    {/* <div className="mr-8">
      <Image
        src={DATA.basit} 
        alt="Left Image"
        width={400} 
        height={400} 
        objectFit="contain" 
      />
    </div> */}

    <div className="mt-5 w-max">
      
    </div>
  </div>
</section>

    </>
  );
}

export default HomePage;
