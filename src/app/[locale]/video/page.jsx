import Videos from "@/components/video/videos";
import { MdArrowBack } from "react-icons/md";
import img from "../../../../public/home/popular.png";
import img1 from "../../../../public/home/popular1.png";
import img2 from "../../../../public/home/popular2.png";
import img3 from "../../../../public/home/popular3.png";
import img4 from "../../../../public/home/popular4.png";
import img5 from "../../../../public/home/popular5.png";
import img6 from "../../../../public/home/popular6.png";

import Navigate from "@/components/navigate/Navigate";
import { useTranslations } from "next-intl";

const page = () => {
  const videos = [
    {
      id: 1,
      title: "Education is the most powerful weapon",
      views: "1.3M views",
      time: "2 day's ago",
      thumbnail: img,
    },
    {
      id: 2,
      title: "Education is the most powerful weapon",
      views: "1.3M views",
      time: "2 day's ago",
      thumbnail: img1,
    },
    {
      id: 3,
      title: "Education is the most powerful weapon",
      views: "1.3M views",
      time: "2 day's ago",
      thumbnail: img2,
    },
    {
      id: 4,
      title: "Education is the most powerful weapon",
      views: "1.3M views",
      time: "2 day's ago",
      thumbnail: img3,
    },
    {
      id: 5,
      title: "Education is the most powerful weapon",
      views: "1.3M views",
      time: "2 day's ago",
      thumbnail: img4,
    },
    {
      id: 6,
      title: "Education is the most powerful weapon",
      views: "1.3M views",
      time: "2 day's ago",
      thumbnail: img5,
    },
    {
      id: 7,
      title: "Education is the most powerful weapon",
      views: "1.3M views",
      time: "2 day's ago",
      thumbnail: img6,
    },
    {
      id: 8,
      title: "Education is the most powerful weapon",
      views: "1.3M views",
      time: "2 day's ago",
      thumbnail: img4,
    },
  ];

  const m = useTranslations("hero"); 
  const p = useTranslations("profile"); 
  return (
    <div className="max-w-[1400px] px-4 lg:px-0 m-auto mb-20">
      <div className="flex items-center gap-2 my-5 mb-11">
        <div className="md:w-[20%]">
          <Navigate title={`${p("All Videos")}`}></Navigate>
        </div>
        <div className="md:w-[60%]">
          <label className="input input-bordered rounded-sm flex items-center gap-2 bg-[#75BEE3] max-w-[900px] m-auto text-white relative">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="h-4 w-4 opacity-70 order-1"
            >
              <path
                fillRule="evenodd"
                d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                clipRule="evenodd"
              />
            </svg>
            <input
              type="text"
              className="grow order-2 text-left bg-transparent placeholder-transparent"
              placeholder="Search"
            />
            <span className="absolute right-3 text-white pointer-events-none">
              {m("search")}
            </span>
          </label>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2">
        {videos.map((videose) => (
          <div key={videose.id}>
            <Videos videose={videose}></Videos>
          </div>
        ))}
      </div>
    </div>
  );
};

export default page;
