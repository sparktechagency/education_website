import { notFound } from "next/navigation";
import img from "../../../../public/article/cover.png";
import img1 from "../../../../public/article/cover1.png";
import img2 from "../../../../public/article/cover2.png";
import img4 from "../../../../public/home/popular.png";
import Image from "next/image";
import { MdArrowBack } from "react-icons/md";
const ArticleDetails = ({ params }) => {
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
  const articles = [
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
  ];

  const article = articles.find((item) => item.id === parseInt(id));

  if (!article) {
    return notFound();
  }

  return (
    <div className="p-5 max-w-[1400px] m-auto ">
      <div className="flex items-center gap-2  my-5 mb-11">
          <div className="md:w-[20%] flex items-center gap-2 text-[#2F799E]">
            <MdArrowBack />
            <span>All Videos</span>
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

      <div className="md:grid grid-cols-3">
        <div className="col-span-2 mt-2 md:mr-4">
          <Image src={article.thumbnail} width={1500} height={399} alt="asdf" />
        </div>

        <div className="md:col-span-1 ">
          {related.slice(0, 3).map((relat) => (
            <>
              <div>
                <div className="flex bg-[#C0C9CD] rounded-xl my-2 md:mx-1">
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
      <h1 className="text-2xl font-bold my-6">{article.title}</h1>
      <p className="text-gray-700">{article.description}</p>
      <div>
        <div className="md:grid grid-cols-2 mt-11 gap-11">
          <div>
            <Image
              src={article.thumbnail}
              width={1500}
              height={399}
              alt="asdf"
            />
          </div>
          <p className="text-gray-700">{article.description}</p>
        </div>

        <div className="md:grid grid-cols-2 mt-11 gap-11">
          
          <p className="text-gray-700">{article.description}</p>
          <div>
            <Image
              src={article.thumbnail}
              width={1500}
              height={399}
              alt="asdf"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleDetails;
