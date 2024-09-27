import React from "react";
import { useLogin } from "@refinedev/core";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../Components/Button.tsx";

export const Login: React.FC = () => {
  const [email, setemail] = useState("");
  const [password, setPassword] = useState("");

  const { mutate: login } = useLogin();

  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    login(
      { email, password },
      {
        onSuccess: (result) => {
          if (result.success && result.redirectTo) {
            navigate(result.redirectTo); // Navigate to the dashboard
          }
        },
        onError: (error) => {
          console.error("Login failed: ", error.message);
        },
      }
    );
  };
  return (
    <div className="font-sans text-gray-900 antialiased">
      <div className="min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0 bg-[#f8f4f3]">
        <div className="w-full sm:max-w-md mt-6 px-6 py-4 bg-white shadow-md overflow-hidden sm:rounded-lg">
          <form onSubmit={handleSubmit}>
            <div className="py-8">
              <center>
                <span className="text-2xl font-semibold">Log In</span>
              </center>
            </div>

            <div>
              <label
                className="block font-medium text-sm text-gray-700"
                htmlFor="email"
              />
              <input
                className="w-full rounded-md py-2.5 px-4 border text-sm outline-[#f84525]"
                type="email"
                name="email"
                placeholder="Email"
                value={email}
                onChange={(e) => {
                  setemail(e.target.value);
                }}
              />
            </div>
            <div className="mt-4">
              <label
                className="block font-medium text-sm text-gray-700"
                htmlFor="password"
              />
              <div className="relative">
                <input
                  className="w-full rounded-md py-2.5 px-4 border text-sm outline-[#f84525]"
                  id="password"
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>
            <div className="flex items-center justify-end mt-4">
              <Button name="Sign In"></Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
