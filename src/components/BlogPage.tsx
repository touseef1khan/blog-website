import { Blog } from "../app/data/data";
import Image from "next/image";
import Link from "next/link";
import { GoArrowRight } from "react-icons/go";
import { IoIosTimer } from "react-icons/io";
import { MdOutlineDateRange } from "react-icons/md";

function BlogPage() {
  return (
    <div className=" min-h-screen py-40    px-4 flex flex-col justify-center items-center">
      <h1 className="sm:text-4xl text-3xl tracking-wider py-8 pb-10 font-bold">
        Our Blog
      </h1>
      <div className=" grid grid-cols-1 justify-center  items-center gap-12 lg:gap-14 gap-x-7 lg:gap-x-16 xl:grid-cols-3 md:grid-cols-2">
        {Blog.map((item, i) => {
          return (
            <div
              key={i}
              className="rounded-xl hover:scale-[1.03] hover:shadow-2xl hover:shadow-slate-400 transition-all ease-linear   xl:w-[400px] lg:w-[420px] shadow-xl "
            >
              <div className=" ">
                <Image
                  className="h-[250px]  rounded-tl-xl rounded-tr-xl object-cover "
                  src={item.imgUrl}
                  alt={item.title}
                  width={1000}
                  height={1000}
                />
              </div>

              <div className="flex md:gap-x-5 gap-x-3 text-[#727272] px-1 md:px-4 py-3 ">
                <span className="inline-flex text-[13px]  md:text-[16px] gap-x-2 items-center">
                  <MdOutlineDateRange />
                  {item.date}
                </span>
                <span className="inline-flex text-[13px] md:text-[16px] gap-x-2 items-center">
                  <IoIosTimer />
                  {item.read}
                </span>
              </div>

              <div className=" px-4 pb-4 ">
                <p className="font-[600] text-[#444343] text-[18px] tracking-wide py-4">
                  {item.title}
                </p>
                <Link
                  href={`/blog/${item.title.toLowerCase().replace(/ /g, "-")}`}
                >
                  <button className="hover:text-blue-700 py-1 inline-flex text-lg font-[500] items-center gap-x-2 text-blue-800">
                    Read more
                    <GoArrowRight />
                  </button>
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default BlogPage;