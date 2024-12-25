import Link from "next/link";

const Footer = () => (
  <footer className=" bg-slate-900 text-white">
    <div className="container md:px-5 px-2 py-24 mx-auto">
      <div className="flex md:flex-row flex-col text-left ">
        <div className="lg:w-1/4 md:w-1/2 w-full px-4">
          <h2 className="  text-white tracking-widest text-lg font-bold mb-3">
            Blogs
          </h2>
          <nav className="list-none mb-10">
            <li className="text-gray-400 hover:text-gray-200 text-[17px] leading-7">
              Explore the Frontiers of Technology: Discover the Innovations
              Defining Tomorrow
            </li>
          </nav>
        </div>
        <div className="lg:w-1/4 md:w-1/2 w-full px-4">
          <h2 className="title-font  text-white tracking-widest text-lg font-bold mb-3">
            CATEGORIES
          </h2>
          <nav className="list-none mb-10">
            <li>
              <Link
                href={""}
                className="text-gray-400 hover:text-gray-200 text-[17px] leading-9"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href={""}
                className="text-gray-400 hover:text-gray-200 text-[17px] leading-9"
              >
                Blogs
              </Link>
            </li>
            <li>
              <Link
                href={""}
                className="text-gray-400 hover:text-gray-200 text-[17px] leading-9"
              >
                About
              </Link>
            </li>
          </nav>
        </div>
        <div className="lg:w-1/4 md:w-1/2 w-full px-4">
          <h2 className="title-font  text-white tracking-widest text-lg font-bold mb-3">
            Contact Us
          </h2>
          <nav className="list-none mb-10">
            <li>
              <Link
                href={""}
                className="text-gray-400 hover:text-gray-200 text-[17px] leading-9"
              >
                Email:abcd@gmail.com
              </Link>
            </li>
            <li>
              <Link
                href={""}
                className="text-gray-400 hover:text-gray-200 text-[17px] leading-9"
              >
                Phone:+923152683270
              </Link>
            </li>
          </nav>
        </div>
        <div className="lg:w-1/4 md:w-1/2 w-full px-4">
          <h2 className="title-font  text-white tracking-widest text-lg font-bold mb-3">
            SUBSCRIBE
          </h2>
          <div className="flex xl:flex-nowrap md:flex-nowrap gap-3 lg:flex-wrap flex-wrap md:justify-center items-end ">
            <div className="relative w-50 sm:w-auto xl:mr-4 lg:mr-0 sm:mr-4 mr-2">
              <label
                htmlFor="footer-field"
                className="leading-7 text-sm text-white"
              >
                Placeholder
              </label>
              <input
                type="text"
                id="footer-field"
                name="footer-field"
                className="w-full bg-opacity-50 text-white rounded border border-gray-300 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base outline-none py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <button className="lg:mt-2 xl:mt-0 flex-shrink-0 inline-flex text-white bg-blue-800 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-800 rounded">
              Subscribe
            </button>
          </div>
          <p className="text-white text-sm mt-2 text-left">
            Bitters chicharrones fanny pack
            <br className="lg:block hidden" />
            waistcoat green juice
          </p>
        </div>
      </div>
    </div>
    <div className="">
      <div className="container px-5 py-6 mx-auto flex md:items-center sm:flex-row flex-col">
        <span className="ml-3 text-2xl font-bold ">Blogs</span>
        <p className="text-sm text-gray-300 sm:ml-6 sm:mt-0 mt-4">
          © 2024 Blogs — Made by Touseef. All Right Reserved
        </p>
        <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
          <Link href={""} className="text-white">
            <svg
              fill="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              className="w-7 h-7"
              viewBox="0 0 24 24"
            >
              <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
            </svg>
          </Link>
          <Link href={""} className="ml-3 text-white">
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              className="w-7 h-7"
              viewBox="0 0 24 24"
            >
              <rect width={20} height={20} x={2} y={2} rx={5} ry={5} />
              <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01" />
            </svg>
          </Link>
          <Link target="_blank" href={"https://www.linkedin.com/in/touseef-khan-9891422b5/"} className="ml-3 text-white">
            <svg
              fill="currentColor"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={0}
              className="w-7 h-7"
              viewBox="0 0 24 24"
            >
              <path
                stroke="none"
                d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
              />
              <circle cx={4} cy={4} r={2} stroke="none" />
            </svg>
          </Link>
        </span>
      </div>
    </div>
  </footer>
);

export default Footer;