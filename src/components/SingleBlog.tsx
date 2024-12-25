import { data2 } from "../app/data/data2";
import Image from "next/image";
import Link from "next/link";
import { GoArrowRight } from "react-icons/go";
import { IoIosTimer } from "react-icons/io";
import { MdOutlineDateRange } from "react-icons/md";

function SingleBlog() {
  return (
    <div className="max-w-full min-h-screen py-16   px-4 flex flex-col justify-center items-center">
      <div className=" grid grid-cols-1 justify-center  items-center gap-9 lg:gap-14 gap-x-7 lg:gap-x-12  xl:grid-cols-3 md:grid-cols-2">
        {data2.map((item, i) => {
          return (
            <div
              key={i}
              className="rounded-xl hover:scale-[1.02] hover:shadow-2xl hover:shadow-slate-400 transition-all ease-linear   xl:w-[400px] lg:w-[450px] shadow-xl "
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

              <div className="flex gap-x-5 px-4 py-3 ">
                <span className="inline-flex gap-x-2 items-center">
                  <MdOutlineDateRange />
                  {item.date}
                </span>
                <span className="inline-flex gap-x-2 items-center">
                  <IoIosTimer />
                  {item.read}
                </span>
              </div>

              <div className=" px-4 pb-4 ">
                <p className="font-[600] text-[#6c6b6b] text-[18px] tracking-wide py-4">
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

      <div className="my-10">
       <Link href={"/blog"} >
       <button className="px-7 py-3 hover:bg-opacity-70 hover:-translate-y-1 transition-all ease-linear inline-flex items-center gap-x-3  text-[19px] bg-black text-white rounded-2xl">
          View All Posts
          <GoArrowRight size={25}/>
        </button>
       </Link>
      </div>
    </div>
  );
}

export default SingleBlog;