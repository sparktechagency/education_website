import Image from "next/image";
import line from "../../../public/home/line.png";

import Link from "next/link";
import img from "../../../public/home/popular.png";
const PopularVideo = () => {
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
    <div className="px-4 lg:px-0">
      <div className="text-center py-5 ">
        <h1 className="text-[#2F799E] text-2xl font-bold">Popular Vedios</h1>
        <div className="flex justify-center mt-3">
          <Image src={line} width={250} height={50} alt="line" />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2">
        {videos.map((video) => (
          <div
            key={video.id}
            className="bg-white shadow-md rounded-t-3xl overflow-hidden"
          >
            <div className="relative">
              <Image
                src={video.thumbnail}
                alt={video.title}
                width={100}
                height={100}
                className="w-full h-90 object-cover"
              />
              <button className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-3 rounded-full shadow-md">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-6 h-6 text-black"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M14.752 11.168l-5.197-3.482a1 1 0 00-1.555.832v6.964a1 1 0 001.555.832l5.197-3.482a1 1 0 000-1.664z"
                  />
                </svg>
              </button>
            </div>

            <div className="p-2 bg-[#2F799E] text-white">
              <h2 className="text-lg font-bold truncate">{video.title}</h2>
              

              <div className=" gap-2 ">
                <div className=" text-sm text-gray-200 mt-2">
                  <span>{video.views}</span>
                  <span>{video.time}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularVideo;
