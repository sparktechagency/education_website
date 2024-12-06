import Image from "next/image";
import ball from "../../../public/home/ball.png";
import img from "../../../public/home/popular.png";
import a1 from "../../../public/home/a1.png";
import a2 from "../../../public/home/a2.png";
import a4 from "../../../public/home/a4.png";
import a5 from "../../../public/home/a5.png";
import pencile from "../../../public/home/pencile.png";
import { IoMdArrowForward } from "react-icons/io";
import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";

const EducationArticle = () => {

    const videos = [
        {
          id: 1,
          title: "Games ",
          description: "lasdfwe iasdfuewr asiofj weroi asddfoi jasd",
     
          thumbnail: a1,
        },
        {
          id: 2,
          title: "Formal Education ",
          description: "lasdfwe iasdfuewr asiofj weroi asddfoi jasd",
  
          thumbnail: a2,
        },
        {
          id: 3,
          title: "Sports ",
          description: "lasdfwe iasdfuewr asiofj weroi asddfoi jasd",
    
          thumbnail: a4,
        },
        {
          id: 4,
          title: "Importance of Science ",
          description: "lasdfwe iasdfuewr asiofj weroi asddfoi jasd",
 
          thumbnail: a5,
        }
        
        
        
      ]

      const t = useTranslations("popular");
      const m = useTranslations('article')

  return (
    <div>
      <div className="flex justify-between items-center">
        <div>
          <Image src={ball} width={100} height={100} alt="ball" />
        </div>
        <div className="text-center">
          <h3 className="text-2xl font-semibold text-[#2F799E] font-serif">
            {t("Educational Article")}
          </h3>
          <h1 className="text-4xl font-bold mt-2 text-[#2F799E]">{t("For Kids")}</h1>
        </div>
        <div>
          <Image src={pencile} width={100} height={100} alt="ball" />
        </div>
      </div>

      <div className="md:grid grid-cols-2 mt-9">


        {
            videos.map((item)=> <div>
            
            <div className="rounded-2xl p-6 py-8 flex items-center gap-11 bg-[#2F799E] m-3">
            <Image className="imgg" src={item.thumbnail} width={150} height={100} alt="ball" />
            <div>
                <h2 className="text-yellow-100">{item.title}</h2>
                <p className="text-white py-3">{item.description}</p>
                <Link href={`/articleDetails/${item.id}`}><button className="text-yellow-100 flex items-center gap-2">{m("Read More")} <IoMdArrowForward className="mt-1"/></button></Link>
            </div>

            </div>
            </div>)
        }

      </div>
    </div>
  );
};

export default EducationArticle;
