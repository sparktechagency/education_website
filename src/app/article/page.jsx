import { Description } from "@radix-ui/react-dialog";
import Image from "next/image";
import { MdArrowBack } from "react-icons/md";
import img from "../../../public/article/cover.png";
import img1 from "../../../public/article/cover1.png";
import img2 from "../../../public/article/cover2.png";
import { IoMdArrowForward } from "react-icons/io";
import Articles from "@/components/articles/Articles";
import Link from "next/link";
import Navigate from "@/components/navigate/Navigate";
const page = () => {
  const videos = [
    {
      id: 1,
      title: "Education is the most powerful weapon",
      description: `In today’s era education is not only confined to read and write. It is now linked to the holistic development of the children. With the efforts of the Government and parents, education has now reached everyone and every child is knowledgeable nowadays. Now the challenge and the demands in the market are not only limited to having knowledge, but it is also more about how impeccably one can present that knowledge.  This is the reason the  are leaving no stone unturned to help students to experiment with their knowledge and are providing them different opportunities to showcase their skills. These include exhibitions, seminars, projects, presentations, competitions, technical events, etc....... `,

      time: "2 day's ago",
      thumbnail: img,
    },
    {
      id: 2,
      title: "Education is the most powerful weapon",
      description:
        "In today’s era education is not only confined to read and write. It is now linked to the holistic development of the children. With the efforts of the Government and parents, education has now reached everyone and every child is knowledgeable nowadays. Now the challenge and the demands in the market are not only limited to having knowledge, but it is also more about how impeccably one can present that knowledge.  This is the reason the best CBSE schools of Bhubaneswar are leaving no stone unturned to help students to experiment with their knowledge and are providing them different opportunities to showcase their skills. These include exhibitions, seminars, projects, presentations, competitions, technical events, etc....... ",

      time: "2 day's ago",
      thumbnail: img1,
    },
    {
      id: 3,
      title: "Education is the most powerful weapon",
      description:
        "In today’s era education is not only confined to read and write. It is now linked to the holistic development of the children. With the efforts of the Government and parents, education has now reached everyone and every child is knowledgeable nowadays. Now the challenge and the demands in the market are not only limited to having knowledge, but it is also more about how impeccably one can present that knowledge.  This is the reason the best CBSE schools of Bhubaneswar are leaving no stone unturned to help students to experiment with their knowledge and are providing them different opportunities to showcase their skills. These include exhibitions, seminars, projects, presentations, competitions, technical events, etc....... ",

      time: "2 day's ago",
      thumbnail: img2,
    },

    // Add more videos as needed
  ];

  return (
    <div className="max-w-[1400px] m-auto  ">
      <div className="mx-4 lg:mx-0">
      <div className="flex items-center gap-2 mt-5 lg:my-5 lg:mb-11 mb-5">
      <div className="md:w-[20%]">
          <Navigate title={'All Article'}></Navigate>
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

      <div>
        {videos.map((item) => (
          <Articles item={item}></Articles>
        ))}
      </div>
      </div>
    </div>
  );
};

export default page;
