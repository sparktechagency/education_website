import Navigate from "@/components/navigate/Navigate";
import Feedbacks from "@/components/profile/Feedbacks";

const page = () => {
  return (
    <div>
      
      <div className="">
      <div className="max-w-[1400px] m-auto">
      <div className="mt-4">
        <Navigate title={'Feedback'}></Navigate>
      </div>
      </div >
        <div className="py-40">
        <Feedbacks></Feedbacks>
        </div>
      </div>
    </div>
  );
};

export default page;
