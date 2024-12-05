import { useForm } from "react-hook-form";

const ChangPassword = () => {
  const {
    register,
    handleSubmit,
    watch,
    setError,
    clearErrors,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Form Data:", data);
  };

  // Watch new password and confirm password
  const newPassword = watch("newPassword");
  const confirmPassword = watch("confirmPassword");

  // Validate confirm password
  const validatePasswords = () => {
    if (newPassword !== confirmPassword) {
      setError("confirmPassword", {
        type: "manual",
        message: "Passwords do not match",
      });
    } else {
      clearErrors("confirmPassword");
    }
  };

  return (
    <div className="max-w-[650px] m-auto">
      <form className="bg-white p-4" onSubmit={handleSubmit(onSubmit)}>
        {/* Current Password */}
        
        <label className="">Current Password
          <input
            className={`bg-white border py-2 px-1 border-neutral-300 mb-4 w-full ${
              errors.currentPassword ? "border-red-500" : ""
            }`}
            {...register("currentPassword", { required: "Current password is required" })}
            placeholder="Current Password"
          />
          {errors.currentPassword && (
            <p className="text-red-500 text-sm">{errors.currentPassword.message}</p>
          )}
        </label>
        
       

        {/* New Password */}
     
       
        <label className="">New Password
       
          <input
            className={`bg-white border py-2 px-1 border-neutral-300 mb-4 w-full ${
              errors.newPassword ? "border-red-500" : ""
            }`}
            {...register("newPassword", {
              required: "New password is required",
              minLength: {
                value: 6,
                message: "Password must be at least 6 characters",
              },
            })}
            placeholder="New Password"
            onBlur={validatePasswords}
          />
          {errors.newPassword && (
            <p className="text-red-500 text-sm">{errors.newPassword.message}</p>
          )}
        </label>


        {/* Confirm Password */}
      
          
          <label>
            <span className="">Confirm Password</span>
            <input
              className={`bg-white border py-2 px-1 border-neutral-300 w-full ${
                errors.confirmPassword ? "border-red-500" : ""
              }`}
              {...register("confirmPassword", { required: "Confirm password is required" })}
              placeholder="Confirm Password"
              onBlur={validatePasswords}
            />
            {errors.confirmPassword && (
              <p className="text-red-500 text-sm">{errors.confirmPassword.message}</p>
            )}
          
          </label>

        {/* Submit Button */}
        <div className="flex justify-center mt-11">
          <input
            className="bg-[#2F799E] cursor-pointer px-11 py-1 text-white rounded mt-6"
            type="submit"
            value="Update"
          />
        </div>
      </form>
    </div>
  );
};

export default ChangPassword;
