import Image from "next/image";
import ball from "../../../public/home/ball.png";

import pencile from "../../../public/home/pencile.png";
const EducationArticle = () => {
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

      <div>


        


      </div>
    </div>
  );
};

export default EducationArticle;
