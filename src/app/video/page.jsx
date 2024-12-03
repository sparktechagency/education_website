import Videos from "@/components/video/videos";
import { MdArrowBack } from "react-icons/md";
import img from "../../../public/home/popular.png";
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
          thumbnail: img,
        },
        {
          id: 3,
          title: "Education is the most powerful weapon",
    
          views: "1.3M views",
          time: "2 day's ago",
          thumbnail: img,
        },
        {
          id: 4,
          title: "Education is the most powerful weapon",
         
          views: "1.3M views",
          time: "2 day's ago",
          thumbnail: img,
        },
        {
          id: 5,
          title: "Education is the most powerful weapon",
        
          views: "1.3M views",
          time: "2 day's ago",
          thumbnail: img,
        },
        {
          id: 6,
          title: "Education is the most powerful weapon",
        
          views: "1.3M views",
          time: "2 day's ago",
          thumbnail: img,
        },
        {
          id: 7,
          title: "Education is the most powerful weapon",
         
          views: "1.3M views",
          time: "2 day's ago",
          thumbnail: img,
        },
        // Add more videos as needed
      ];
  return (
    <div className="max-w-[1400px] m-auto ">
      <div className="flex items-center my-5 mb-11">
        <div className="w-[20%] flex items-center gap-2 text-[#2F799E]">
          <MdArrowBack />
          <span>All Videos</span>
        </div>
        <div className="w-[60%]">
        <label className="input input-bordered rounded-sm w-full flex items-center gap-2 bg-[#75BEE3]  text-white">
          <input type="text" className="grow" placeholder="Search" />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="h-4 w-4 opacity-70"
          >
            <path
              fillRule="evenodd"
              d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
              clipRule="evenodd"
            />
          </svg>
          
        </label>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2">
        {videos.map((videose) => (
          <div
            key={videose.id}
            
            
          >
            <Videos videose={videose}></Videos>
            
          </div>
        ))}
      </div>

    </div>
  );
};

export default page;
