import Image from "next/image";
import profile from "../../../public/article/profile.png";
import { useTranslations } from "next-intl";
const Feedbacks = () => {
  const f = useTranslations('footer')
  return (
    <div className="max-w-[900px] m-auto">
      <div>
        <div className="flex items-center gap-4">
        <div>
          <Image
            className="rounded-full"
            src={profile}
            width={100}
            height={100}
            alt="profile"
          />
        </div>

        <div className="">
          <p className="font-semibold mt-1">Ian</p>
          <p>ian@gmail.com</p>
        </div>
        </div>
        <div className="mt-11">
          <form action="">
          <label>
            {f("Feedback")} <br />
            <textarea className="bg-white border rounded w-full h-[150px]" name="" id=""></textarea>
          </label>
          <div className="flex justify-center mt-11">
          <input className="bg-[#2F799E] px-8 py-1 text-white rounded" type="submit" value="Send" />
          </div>
          </form>

          
        </div>
      </div>
    </div>
  );
};

export default Feedbacks;
