import React, {  useContext, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { loginFields } from "../constants/formFields";
import Input from "../components/Input";

import dropletImg from "../assets/logo.png";
import { loginUser } from "../services/auth.api";
import { useAppDispatch, useAppSelector } from "../redux/hook";
import { UserContext } from "../hooks/useAuth";

type fields = {
  [key: string]: string | number;
};
const fieldState: fields = {};

loginFields.forEach((field) => {
  fieldState[field.id as keyof typeof fieldState] = "";
});

const Login = () => {
  const [loginState, setLoginState] = useState(fieldState);
  const { error, user } = useAppSelector((state) => state.login);
  const {login} = useContext(UserContext);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      login({ user: { ...user } });
      navigate("/dashboard/");
    }
  }, [user]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { email, password } = loginState;
    return dispatch(loginUser({ username: email as string, password }));
  };

  return (
    <div className="min-h-full bg-[#eee]  h-screen flex flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col justify-center items-center ">
        <div className="mx-auto border flex h-[80px] w-[80px] items-center justify-center rounded-full p-1 shadow-sm">
          <img src={dropletImg} alt="" className="w-10 h-14  " />
        </div>
       
      </div>
      <div className="bg-white max-w-md w-full space-y-4 border p-3 rounded shadow-sm">
        {
          <div>
            {
              error && ( <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
                <strong className="font-bold">Error!</strong>
                <span className="block sm:inline">{error}</span>
              </div>)
            }
          </div>
        }
        <form className=" space-y-6" onSubmit={handleSubmit}>
          <div className="">
            {loginFields.map((field) => (
              <Input
                key={field.id}
                labelText={field.labelText}
                labelFor={field.labelFor}
                id={field.id}
                name={field.name}
                type={field.type}
                isRequired={field.isRequired}
                placeholder={field.placeholder}
                customClass="dark:bg-dark-bg"
                handleChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  setLoginState({
                    ...loginState,
                    [e.target.id]: e.target.value,
                  });
                }}
              />
            ))}
          </div>
          <div className="flex items-center justify-between ">
            <div className="text-sm">
              <a
                href="/password/reset"
                className="font-medium text-primary hover:text-yellow-500"
              >
                Forgot your password?
              </a>
            </div>
          </div>
          <button
            type="submit"
            className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-primary hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500 "
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
