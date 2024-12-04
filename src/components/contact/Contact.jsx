"use client";

import { useForm } from "react-hook-form";

const Contact = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <div className="bg-white p-4 max-w-[600px] rounded">
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>
          <span className="font-semibold">Full Name</span>
          <input
            className="bg-white border-b py-2 border-black w-full"
            {...register("fullNname")}
            placeholder="jone copper"
          />
        </label>
        <div className="grid grid-cols-2 gap-2 mt-4">
          <label>
            <span className="font-semibold">Full Name</span>
            <input
              className="bg-white border-b py-2 border-black w-full"
              {...register("contact")}
              placeholder="+99 4543 34543 213"
            />
          </label>

          <label>
            <span className="font-semibold">Full Name</span>
            <input
              className="bg-white border-b py-2 border-black w-full"
              {...register("email")}
              placeholder="joneCopper@gmail.com"
            />
          </label>
        </div>

        <div className="grid grid-cols-2 gap-3 mt-4">
          <label>
            <span className="font-semibold">Full Name</span>
            <select
              className="bg-white border-b py-2 border-black w-full"
              {...register("gender")}
            >
              <option value="female">female</option>
              <option value="male">male</option>
              <option value="other">other</option>
            </select>
          </label>

          <label>
            <span className="font-semibold">Full Name</span>
            <input
              className="bg-white border-b py-2 border-black w-full"
              {...register("location")}
              placeholder="location"
            />
          </label>
        </div>

        <div className="mt-4">
          <label className="">
            <span className="font-semibold ">Full Name</span>
            <input
              className="bg-white border-b py-2  border-black w-full"
              {...register("location")}
              placeholder="Type Here"
            />
          </label>
        </div>

        <input className="bg-[#2F799E] px-4 py-1 text-white rounded mt-6" type="submit" />
      </form>
    </div>
  );
};

export default Contact;
