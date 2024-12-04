import Image from "next/image";
import ball from "../../../public/home/ball.png";
import img from "../../../public/home/popular.png";
import pencile from "../../../public/home/pencile.png";
import { IoMdArrowForward } from "react-icons/io";
import Link from "next/link";
const EducationArticle = () => {

    const videos = [
        {
          id: 1,
          title: "Education ",
          description: "lasdfwe iasdfuewr asiofj weroi asddfoi jasd",
     
          thumbnail: img,
        },
        {
          id: 2,
          title: "Education ",
          description: "lasdfwe iasdfuewr asiofj weroi asddfoi jasd",
  
          thumbnail: img,
        },
        {
          id: 3,
          title: "Education ",
          description: "lasdfwe iasdfuewr asiofj weroi asddfoi jasd",
    
          thumbnail: img,
        },
        {
          id: 4,
          title: "Education ",
          description: "lasdfwe iasdfuewr asiofj weroi asddfoi jasd",
 
          thumbnail: img,
        },
        {
          id: 5,
          title: "Education ",
          description: "lasdfwe iasdfuewr asiofj weroi asddfoi jasd",
     
          thumbnail: img,
        },
        {
          id: 6,
          title: "Education ",
          description: "lasdfwe iasdfuewr asiofj weroi asddfoi jasd",
          
          thumbnail: img,
        },
        {
          id: 7,
          title: "Education ",
          description: "lasdfwe iasdfuewr asiofj weroi asddfoi jasd",
          
          thumbnail: img,
        },
        // Add more videos as needed
      ];

  return (
    <div>
      <div className="flex justify-between items-center">
        <div>
          <Image src={ball} width={100} height={100} alt="ball" />
        </div>
        <div className="text-center">
          <h3 className="text-xl font-semibold text-[#2F799E]">
            Educational Article
          </h3>
          <h1 className="text-2xl font-bold mt-2 text-[#2F799E]">For Kids</h1>
        </div>
        <div>
          <Image src={pencile} width={100} height={100} alt="ball" />
        </div>
      </div>

      <div className="md:grid grid-cols-2 mt-9">


        {
            videos.map((item)=> <div>
            
            <div className="rounded-2xl p-6 py-11 flex gap-11 bg-[#2F799E] m-3">
            <Image className="imgg" src={img} width={150} height={100} alt="ball" />
            <div>
                <h2 className="text-yellow-100">{item.title}</h2>
                <p className="text-white py-3">{item.description}</p>
                <Link href={`/articleDetails/${item.id}`}><button className="text-yellow-100 flex items-center gap-2">Read more <IoMdArrowForward className="mt-1"/></button></Link>
            </div>

            </div>
            </div>)
        }

      </div>
    </div>
  );
};

export default EducationArticle;
