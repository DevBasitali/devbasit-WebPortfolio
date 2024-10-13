import Image from "next/image";
import { DATA } from "@/dashboard/userData";
import {
  Phone,
  Map,
  Calendar,
  Mail,
  Linkedin,
  Github,
  MailIcon,
} from "lucide-react";

function About() {
  const socials = DATA.aboutPage.socials;
  const contact = DATA.aboutPage.contact;

  return (
    <>
      <section id="About" className="relative flex flex-row bg-gray-950">
        <div className="about_main">
          <div className="max-w-xl text-center ">
            <h1 className="text-xl font-extrabold text-white sm:text-xl md:text-4xl lg:text-5xl">
              About.
            </h1>
            <p className="text-sm mt-4 ml-5 max-w-lg text-gray-300 text-left justify-center sm:text:md md:text-xl lg:text-xl tracking-wide">
              My name is {DATA.name}, I'm a passionate {DATA.role} proficient in
              crafting {DATA.experience}
              <strong className="text-teal-600">
                (MongoDB, Express, React, Node.js).
              </strong>
              Beyond coding, I'm a {""}
              <span className="text-gray-200 font-bold">
                Social Media Expert {""}
              </span>
              adept at crafting engaging content, building strong online
              communities, and driving brand growth.
            </p>

            <div className="flex flex-row justify-center mt-5">
              <a
                target="_blank"
                className="primary_btn active:text-opacity-75 sm:w-auto text-md"
                href={DATA.cvLink}
              >
                Download CV
              </a>
              <a
                className="transparent_btn active:text-opacity-75 sm:w-auto text-md"
                href="#contactUs"
              >
                Contact Us
              </a>
            </div>

            <div className="grid grid-cols-1 gap-4 px-2 mt-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 ">
              {Object.entries(DATA.aboutPage.contact).map(([value, text]) => (
                <div key={value}>
                  <span className="flex items-center">
                    {value === "dob" && <Calendar size={15} className="mr-2" />}
                    {value === "email" && <Mail size={15} className="mr-2" />}
                    {value === "phone" && <Phone size={15} className="mr-2" />}
                    {value === "location" && <Map size={15} className="mr-2" />}
                    <h1 className="text-gray-300 inline">
                      <span className="font-extrabold">
                        {value.charAt(0).toUpperCase() + value.slice(1)}:
                      </span>
                      {text}
                    </h1>
                  </span>
                </div>
              ))}
            </div>

            <div>
              <ul className="my-8 flex justify-center gap-6 md:gap-8">
                {Object.entries(DATA.aboutPage.socials).map(
                  ([index, details]) => (
                    <li key={index}>
                      <a
                        href={details.url}
                        rel="noreferrer"
                        target="_blank"
                        className="socials_icon"
                      >
                        <svg
                          className="h-8 w-8"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                        >
                          {index === "github" && <Github />}
                          {index === "Linkedin" && <Linkedin />}
                          {index === "mail" && <MailIcon />}
                        </svg>
                      </a>
                    </li>
                  ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center mx-auto max-w-screen-xl">
          <Image
            src={DATA.aboutPage.aboutImg}
            alt="laptopImage"
            width={450}
            height={450}
            objectFit="cover"
            quality={75}
            className="hidden lg:block md:block opacity-75"
          />
        </div>
      </section>
    </>
  );
}

export default About;
