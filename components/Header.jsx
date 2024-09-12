import "../styles/global.css";

function Header() {
  return (
    <header className="bg-gray-950 sticky top-0 z-10">
      <div className="nav">
        <div className="flex h-16 items-center justify-center">
          <div className="block">
            <nav aria-label="Global">
              <ul className="flex items-center gap-6 text-xs sm:text-xs md:text-md lg:text-md">
                <li>
                  <a
                    className="text-gray-200 transition font-bold tracking-wider hover:text-teal-600"
                    href="/"
                  >
                    {" "}
                    HOME{" "}
                  </a>
                </li>

                <li>
                  <a
                    className="text-gray-200 transition font-bold tracking-wider hover:text-teal-600"
                    href="#About"
                  >
                    {" "}
                    ABOUT{" "}
                  </a>
                </li>

                <li>
                  <a
                    className="text-gray-200 transition font-bold tracking-wider hover:text-teal-600"
                    href="#Services"
                  >
                    {" "}
                    SERVICES{" "}
                  </a>
                </li>

                <li>
                  <a
                    className="text-gray-200 transition font-bold tracking-wider hover:text-teal-600"
                    href="#Skill"
                  >
                    {" "}
                    SKILLS{" "}
                  </a>
                </li>
                <li>
                  <a
                    className="text-gray-200 transition font-bold tracking-wider hover:text-teal-600"
                    href="#Projects"
                  >
                    {" "}
                    PROJECTS{" "}
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
