import React from "react";
import { Link } from "react-router-dom";
import { BsGithub } from "react-icons/bs";

const Footer = () => {
  return (
    <>
      <footer className="text-gray-600 body-font">
        <div className="container px-5 py-5 mx-auto flex items-center sm:flex-row flex-col">
          <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
            <img
              src="https://images.unsplash.com/photo-1615109398623-88346a601842?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fG1hbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
              alt="manoj"
              className="w-10 h-10 rounded-full object-cover shadow-xl"
            />
            <span className="ml-3 text-xl md:text-2xl">Manoj</span>
          </a>
          <p className="md:text-lg text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-[rgb(79,70,229)] sm:py-2 sm:mt-0 mt-4">
            © 2022 Manoj —
            <Link
              to="https://www.instagram.com/coder_manoj/"
              className="text-gray-600 ml-1"
              rel="noopener noreferrer"
              target="_blank"
            >
              @coder_manoj
            </Link>
          </p>
          <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
            {/* Github */}
            <Link
              to="https://github.com/code-with-manoj"
              className="text-[rgb(79,70,229)]"
            >
              <BsGithub className="w-6 h-6" />
            </Link>
            {/* Facebook */}
            <Link
              to="https://www.facebook.com/profile.php?id=100079550240512"
              className=" ml-3 text-[rgb(79,70,229)]"
            >
              <svg
                fill="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                className=" w-6 h-6"
                viewBox="0 0 24 24"
              >
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
              </svg>
            </Link>
            {/* Instagram */}
            <Link
              to="https://www.instagram.com/coder_manoj/"
              className="ml-3 text-[rgb(79,70,229)]"
            >
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                className="w-6 h-6"
                viewBox="0 0 24 24"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
              </svg>
            </Link>
            {/* Linked in */}
            <Link
              to="https://www.linkedin.com/in/manoj-kushwah-8492821bb/"
              className="ml-3 text-[rgb(79,70,229)]"
            >
              <svg
                fill="currentColor"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="0"
                className="w-6 h-6"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="none"
                  d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                ></path>
                <circle cx="4" cy="4" r="2" stroke="none"></circle>
              </svg>
            </Link>
          </span>
        </div>
      </footer>
    </>
  );
};

export default Footer;
