import { MdArrowBack } from "react-icons/md";
import img from "../../../../public/home/popular.png";
import img4 from "../../../../public/home/popular.png";
import Image from "next/image";
import img1 from "../../../../public/home/popular1.png";
import img2 from "../../../../public/home/popular2.png";
import img3 from "../../../../public/home/popular3.png";
import img7 from "../../../../public/home/popular4.png";
import img5 from "../../../../public/home/popular5.png";
import img6 from "../../../../public/home/popular6.png";
import Navigate from "@/components/navigate/Navigate";
const page = ({ params }) => {
  const { id } = params;
  const related = [
    {
      id: 1,
      title1: "Education is the most powerful weapon",
      time1: "2 day's ago",
      detaisl:
        " These include exhibitions,  presentations, competitions, technical events,",
      thumbnail1: img4,
    },
    {
      id: 1,
      title1: "Education is the most powerful weapon",
      time1: "2 day's ago",
      detaisl:
        " These include exhibitions, seminars, projects, competitions, technical events,",
      thumbnail1: img4,
    },
    {
      id: 1,
      title1: "Education is the most powerful weapon",
      time1: "2 day's ago",
      detaisl:
        " These include exhibitions, seminars, projects, presentations, , technical events,",
      thumbnail1: img4,
    },
    {
      id: 1,
      title1: "Education is the most powerful weapon",
      time1: "2 day's ago",
      detaisl:
        " These include exhibitions, seminars, projects, presentations, ,",
      thumbnail1: img4,
    },
  ];

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
      thumbnail: img7,
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
    // Add more videos as needed
  ];

  const article = videos.find((item) => item.id === parseInt(id));
  if (!article) {
    return notFound();
  }
  return (
    <div>
      <div className="max-w-[1400px] px-4 lg:px-0 m-auto mb-20">
      <div className="flex items-center gap-2 my-5 mb-11">
      <div className="md:w-[20%]">
          <Navigate title={'Details'}></Navigate>
        </div>
          <div className="md:w-[60%]">
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

        <div className="lg:grid grid-cols-3">
          <div className="col-span-2 mt-2 md:mr-4">
            <div className="relative">
              <Image
                src={article.thumbnail}
                alt={article.title}
                width={1400}
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
          </div>

          <div className="col-span-1 ">
            {related.slice(0, 3).map((relat) => (
              <>
                <div>
                  <div className="flex bg-[#C0C9CD] rounded-xl my-2 mx-1">
                    <Image
                      className="rounded-xl"
                      src={relat.thumbnail1}
                      width={140}
                      height={100}
                      alt="asdf"
                    />

                    <div className="p-3">
                      <p className="font-semibold"> {relat.time1}</p>
                      <p className=" font-semibold ">{relat.title1}</p>
                      <p className="text-sm">{relat.detaisl}</p>
                    </div>
                  </div>
                </div>
              </>
            ))}
          </div>
        </div>
        <h1 className="text-2xl font-bold  text-[#2F799E]">{article.title}</h1>
        <h1 className=" font-bold  text-[#2F799E]">{article.time}</h1>

        <div></div>
      </div>
    </div>
  );
};

export default page;
