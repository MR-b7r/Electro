import React from "react";
import UpdatePasswordForm from "../ui/UpdatePasswordForm";
import UpdateUserDataForm from "../ui/UpdateUserDataForm";

const Settings = () => {
  return (
    <div className="space-y-6">
      <h1 className="text-[30px] sm:text-[35px] md:text-[40px] font-bold text-black-04 dark:text-white-01 mb-7 leading-[60px]">
        Update your account
      </h1>
      <div className="sm:mx-auto sm:w-full sm:max-w-[640px] space-y-6">
        <UpdateUserDataForm />
        <UpdatePasswordForm />
      </div>
    </div>
  );
};

export default Settings;
