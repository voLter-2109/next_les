"use client";

import { useActions } from "@/store/hooks/useActions";
import { useAuth } from "@/store/hooks/useAuth";
import { IEmailPassword } from "@/types/auth";
import CustomField from "@/ui/input/Field";
import authValidate from "@/validate/authValdate";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

const Auth = () => {
  const [type, setType] = useState<"login" | "register">("login");
  const { fetchUserById } = useActions();
  const { user, isLoading, errorMessage } = useAuth();

  // 5. Чем управляемые компоненты отличаются от неуправляемых?
  const {
    register: fromRegister,
    formState,
    handleSubmit,
    formState: { errors },
    clearErrors,
  } = useForm<IEmailPassword>({
    mode: "onBlur",
    resolver: yupResolver(authValidate),
  });

  const { isValid } = formState;

  const onSubmit: SubmitHandler<IEmailPassword> = (data) => {
    fetchUserById(data);
  };

  return (
    <section className="flex w-full h-full  flex-col justify-center items-center ">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="rounded-lg w-[50vw] border border-orange-400 bd-white  p-10 mx-auto bg-bg-gray 
				shadow-2xl text-center flex flex-col justify-between"
      >
        <CustomField
          {...fromRegister("email")}
          placeholder="Email"
          error={errors.email?.message}
        />
        <CustomField
          {...fromRegister("password")}
          type="password"
          placeholder="Password"
          error={errors.password?.message}
        />
        <button
          className="px-6 py-2 border rounded-md mt-2 hover:shadow-lg disabled:opacity-50 disabled:hover:shadow-none hover:shadow-orange-400 "
          type="submit"
          disabled={!isValid && isLoading}
        >
          {true ? (
            type === "login" ? (
              "login"
            ) : (
              "register"
            )
          ) : (
            <span>Loading...</span>
          )}
        </button>
        {isLoading && <span>loading</span>}
        {errorMessage && (
          <div>
            <span className="text-red-600">{errorMessage}</span>
          </div>
        )}
      </form>
      <button
        className="px-6 py-2 border rounded-md mt-2 hover:shadow-lg hover:shadow-orange-400"
        type="button"
        {...{
          onClick: () => {
            setType(type === "login" ? "register" : "login");
            clearErrors();
          },
        }}
      >
        {type === "login" ? "register" : "login"}
      </button>
    </section>
  );
};

export default Auth;
