import logo from "../assets/logo/logo.png";

export default function Footer() {
  return (
    <footer className="bg-black text-gray-600 body-font font-barlow text-2xl">
      <div className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
        <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left md:mt-0 mt-10">
          <div className="flex gap-2 items-center">
            <img className="h-10 w-10" src={logo} alt="Orbix" />
            <p className="text-5xl font-mont font-bold text-gray-200">Orbix</p>
          </div>
          <p className="mt-2 text-md text-gray-200">
            Unveiling Cosmic Wonders.
          </p>
        </div>
        <div className="flex-grow flex flex-wrap md:pr-20 -mb-10 md:text-left text-center order-first">
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-md text-white tracking-widest mb-3">
              COMPANY
            </h2>
            <nav className="list-none mb-10">
              <li>
                <div className="text-gray-400 hover:text-gray-500 cursor-pointer">
                  About us
                </div>
              </li>
              <li>
                <div className="text-gray-400 hover:text-gray-500 cursor-pointer">
                  Gallery
                </div>
              </li>
              <li>
                <div className="text-gray-400 hover:text-gray-500 cursor-pointer">
                  Contact us
                </div>
              </li>
              <li>
                <div className="text-gray-400 hover:text-gray-500 cursor-pointer">
                  Media Inquiries
                </div>
              </li>
            </nav>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-md text-white tracking-widest mb-3">
              EXPLORE
            </h2>
            <nav className="list-none mb-10">
              <li>
                <div className="text-gray-400 hover:text-gray-500 cursor-pointer">
                  Accessibility
                </div>
              </li>
              <li>
                <div className="text-gray-400 hover:text-gray-500 cursor-pointer">
                  Resources
                </div>
              </li>
              <li>
                <div className="text-gray-400 hover:text-gray-500 cursor-pointer">
                  Subscribe
                </div>
              </li>
              <li>
                <div className="text-gray-400 hover:text-gray-500 cursor-pointer">
                  FAQ
                </div>
              </li>
            </nav>
          </div>
        </div>
      </div>
      <div className="bg-gray-100 text-black">
        <div className="justify-center items-center container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
          <p className="text-gray-500 text-[22px] text-center sm:text-left">
            Orbix © 2023
          </p>
          <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
            <div className="text-gray-500 hover:text-gray-700 cursor-pointer">
              <svg
                fill="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-7 h-7"
                viewBox="0 0 24 24"
              >
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
              </svg>
            </div>
            <div className="ml-4 text-gray-500 hover:text-gray-700 cursor-pointer">
              <svg
                fill="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-7 h-7"
                viewBox="0 0 24 24"
              >
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
              </svg>
            </div>
            <div className="ml-4 text-gray-500 hover:text-gray-700 cursor-pointer">
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-7 h-7"
                viewBox="0 0 24 24"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
              </svg>
            </div>
            <div className="ml-4 text-gray-500 hover:text-gray-700 cursor-pointer">
              <svg
                fill="currentColor"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="0"
                className="w-7 h-7"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="none"
                  d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                ></path>
                <circle cx="4" cy="4" r="2" stroke="none"></circle>
              </svg>
            </div>
          </span>
        </div>
      </div>
    </footer>
  );
}
