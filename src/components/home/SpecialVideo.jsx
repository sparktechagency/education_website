import Image from "next/image";
import back from "../../../public/home/back.png";
import spec from "../../../public/home/spec.png";
const SpecialVideo = () => {
  return (
    <div
      className="relative bg-cover w-full bg-center lg:h-[90vh] h-[600px] mt-5 rounded"
      style={{
        backgroundImage: `url(${back.src})`,
        backgroundSize: "cover", // Ensures the image covers the container
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",

        // Centers the image
      }}
    >
      <div className="">
        <div className="absolute inset-0 flex  items-center text-white  ">
          <div className="lg:grid grid-cols-2 md:px-11 px-4 gap-7">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold">
                Special Video & Article For Your Children
              </h1>
              <p className="mt-4 ">
                Formulate innovative web-readiness and installed base ideas.
                Distinctively integrate high-payoff paradigms without next
                generation systems disseminate holistic e-services through
                customer directed expertise.
              </p>
            </div>
         
              <div className="mt-6">
              <div className="lg:relative flex gap-1">
                <div className="lg:absolute lg:-mt-32 lg:ml-60">
                  <Image src={spec} width={300} height={100} alt="spec" />
                </div>
                <div className="lg:absolute lg:ml-28 lg:-mt-8">
                  <Image src={spec} width={300} height={100} alt="spec" />
                </div>
                <div className="lg:absolute lg:mt-16">
                  <Image src={spec} width={300} height={100} alt="spec" />
                </div>
              </div>
              </div>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpecialVideo;
