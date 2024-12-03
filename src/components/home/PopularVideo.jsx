import Image from "next/image";
import line from "../../../public/home/line.png";


import img from "../../../public/home/popular.png";
import PopularCard from "./PopularCard";
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
            
            
          >
            <PopularCard video={video}></PopularCard>
            
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularVideo;
