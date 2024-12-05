import React from "react";
import { Linkedin } from "lucide-react";
import { Github } from "lucide-react";
import { MailIcon } from "lucide-react";

function Footer() {
  return (
    <>
      <div className="container py-2">
        <div className="row gap-5">
          <div className="columns-lg-3 col-md-6">
            <h4 className="text-white mb-4">Contact us</h4>
            <p className="mb-2">
              <i className="fa fa-phone-alt me-3"></i>+92311-1553572
            </p>
            <p className="mb-2">
              <i className="fa fa-envelope me-3"></i>huzaifaafraz90@gmail.com
            </p>
            <div className="d-flex pt-3">
              <a className="btn btn-square btn-light rounded-circle me-2" href="">
                <i className="fab fa-twitter"></i>
              </a>
              <a className="btn btn-square btn-light rounded-circle me-2" href="">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a className="btn btn-square btn-light rounded-circle me-2" href="">
                <i className="fab fa-youtube"></i>
              </a>
              <a className="btn btn-square btn-light rounded-circle me-2" href="">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <h4 className="text-white mb-4">Quick Links</h4>
            <a className="btn btn-link" href="about">
              About Us
            </a>
            <a className="btn btn-link" href="contact">
              Contact Us
            </a>
            <a className="btn btn-link" href="services">
              Our Services
            </a>
            <a className="btn btn-link" href="terms">
              Terms &amp; Condition
            </a>
            <a className="btn btn-link" href="support">
              Support
            </a>
          </div>
          <div className="col-lg-3 col-md-6">
            <h4 className="text-white mb-4">Newsletter</h4>
            <p>Dolor amet sit justo amet elitr clita ipsum elitr est.</p>
            <div className="position-relative w-100">
              <input
                className="form-control bg-transparent w-100 py-3 ps-4 pe-5"
                type="text"
                placeholder="Your email"
              />
              <button
                type="button"
                className="btn btn-light py-2 position-absolute top-0 end-0 mt-2 me-2"
              >
                SignUp
              </button>
            </div>
          </div>
          <div className="text-center text-md-start mb-3 mb-md-0">
            ©{" "}
            <a className="fw-medium text-light" href="/">
              ExixSOft
            </a>
            , All Right Reserved.
          </div>
        </div>
      </div>


      {/* <footer className="bg-gray-950 dark:bg-gray-950"> 
        <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="flex justify-center text-teal-600 dark:text-teal-300 font-bold text-2xl tracking-wider">
            Dev Basit Ali.
            
          </div>

          <p className="mx-auto mt-6 max-w-md text-center leading-relaxed text-gray-500 dark:text-gray-400">
            A MERN STACK DEVELOPER
          </p>

          <ul className="mt-12 flex flex-wrap justify-center gap-6 md:gap-8 lg:gap-12">
            <li>
              <a
                className="text-gray-700 transition hover:text-teal-600 dark:text-white dark:hover:text-teal-600"
                href="#About"
              >
                About
              </a>
            </li>

            <li>
              <a
                className="text-gray-700 transition hover:text-teal-600 dark:text-white dark:hover:text-teal-600"
                href="#Services"
              >
                Services
              </a>
            </li>

            <li>
              <a
                className="text-gray-700 transition hover:text-teal-600 dark:text-white dark:hover:text-teal-600"
                href="#Projects"
              >
                Projects
              </a>
            </li>

            <li>
              <a
                className="text-gray-700 transition hover:text-teal-600 dark:text-white dark:hover:text-teal-600"
                href="#Home"
              >
                Blog
              </a>
            </li>
          </ul>

          <ul className="mt-12 flex justify-center gap-6 md:gap-8">
            <li>
              <a
                href="https://linkedin.com/in/devbasitali"
                rel="noreferrer"
                target="_blank"
                className="text-gray-700 transition hover:text-teal-600 dark:text-white dark:hover:text-teal-600"
              >
                <span className="sr-only">Linkedin</span>
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <Linkedin/>
                  
                </svg>
              </a>
            </li>

            <li>
              <a
                href="https://github.com/DevBasitali"
                rel="noreferrer"
                target="_blank"
                className="text-gray-700 transition hover:text-teal-600 dark:text-white dark:hover:text-teal-600"
              >
                <span className="sr-only">GitHub</span>
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <Github/>
                  
                </svg>
              </a>
            </li>

            <li>
              <a
                href="ibasitaliraja@gmail.com"
                rel="noreferrer"
                target="_blank"
                className="text-gray-700 transition hover:text-teal-600 dark:text-white dark:hover:text-teal-600"
              >
                <span className="sr-only">Gmail</span>
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <MailIcon/>
                  
                </svg>
              </a>
            </li>
          </ul>
        </div>
      </footer>*/}
    </>
  );
}

export default Footer;

