import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className=" z-10 py-10 sm:py-12 md:py-14 bg-white  lg:max-w-2xl lg:w-full lg:py-16 xl:py-20">
          <svg
            className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2"
            fill="currentColor"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <polygon points="50,0 100,0 50,100 0,100" />
          </svg>

          <main className=" mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="sm:text-center lg:text-left">
              <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-4xl md:text-5xl">
                <span className="block xl:inline">Hi I'm Manoj Kushwah</span>{" "}
                <span className="block text-indigo-600 xl:inline">
                  React Js Developer
                </span>
              </h1>
              <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                I am mern stack developer 👨‍💻 & I have a 1+ year experience in
                React Js. I am working & learning on backend in few days ago.
              </p>
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                <div className="rounded-md shadow">
                  <a
                    href="/manoj.pdf"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-2.5 md:text-lg md:px-7"
                  >
                    Download CV
                  </a>
                </div>
                <div className="mt-3 sm:mt-0 sm:ml-3">
                  <a
                    href="tel:+91 9753630483"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 md:py-2.5 md:text-lg md:px-7"
                  >
                    Call Now
                  </a>
                </div>
              </div>
            </div>
          </main>
        </div>
        <div
          id="hero"
          className="lg:absolute pr-4 lg:inline-flex hidden lg:inset-y-0 lg:right-0 lg:w-1/2"
        >
          <img
            className="h-56 w-full rounded-tr-md rounded-br-md shadow-md  object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
            src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
