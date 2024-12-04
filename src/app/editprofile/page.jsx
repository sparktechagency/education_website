import EditProfile from "@/components/profile/EditProfile";

import { FaArrowLeft } from "react-icons/fa6";

const page = () => {
  return (
    <div className="bg-neutral-100">
      <div className="flex justify-between pb-7 pt-4 max-w-[1400px] m-auto pl-4 md:pl-0">
        <h1 className="flex gap-4">
          <button className="text-[#EF4849]">
            <FaArrowLeft />
          </button>
          <span className="text-lg font-semibold">Profile</span>
        </h1>
      </div>
      <div className="md:py-24">
      <EditProfile></EditProfile>
      </div>
    </div>
  );
};

export default page;
