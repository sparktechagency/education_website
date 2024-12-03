"use client";

import { useForm } from "react-hook-form";

const Contact = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <div className="bg-white p-4">
      <form onSubmit={handleSubmit(onSubmit)}>
        <input className="bg-white border-b border-black" {...register("firstName")} />
        <input {...register("contact")} />
        <input {...register("email")} />
        <input {...register("location")} />

        <select {...register("gender")}>
        <option value="female">female</option>
        <option value="male">male</option>
        <option value="other">other</option>
      </select>

        <input type="submit" />
      </form>
    </div>
  );
};

export default Contact;
