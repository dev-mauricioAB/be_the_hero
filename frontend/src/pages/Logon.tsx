import React, { FormEvent, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FiLogIn } from "react-icons/fi";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";

import Toast, { showToast } from "../components/Toast";
import { Input } from "../components/Input";

import api from "../services/api";
import { loginSchema } from "../validations/form";

import herosImg from "../assets/heroes.png";
import logoImg from "../assets/logo.svg";

export default function Logon() {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  const notify = (message: string) =>
    showToast({
      type: "error",
      message,
      config: {
        position: "top-center",
        className: "toast-login-error",
        bodyStyle: {
          color: "#000000",
        },
      },
    });

  async function handleLogin(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const loginData = {
      id,
      password,
    };

    const formValid = await loginSchema.isValid(loginData);

    if (formValid)
      try {
        const response = await api.post("sessions", loginData);

        localStorage.setItem("ongId", id);
        localStorage.setItem("ongName", response.data.name);

        navigate("/profile");
      } catch (err) {
        notify("🧘🏼‍♂️ Ops. Houve um erro ao tentar logar. Tente novamente.");
      }
    else notify("👓 Ops. Verifique suas credenciais.");
  }

  const handleShowPassword = () => setShowPassword(!showPassword);

  return (
    <div className="flex sm:flex-col md:flex-row mt-0 sm:pt-2 justify-center items-center ">
      <section className="w-full max-w-sm">
        <img src={logoImg} alt="Be The Hero" className="mb-8" />

        <h1 className="text-2xl mb-2">Faça seu Logon</h1>

        <form
          className="w-full justify-center items-center"
          onSubmit={handleLogin}
        >
          <Input
            value={id}
            onChange={(e) => setId(e.target.value)}
            label={"Seu ID"}
            inputId={"id"}
            type="text"
            placeholder="Seu ID"
          />
          <div className="hidden">
            <Input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              inputId={"password"}
              type={showPassword === false ? "password" : "text"}
              placeholder={showPassword === false ? "*******" : "Sua senha"}
            />
            <div className="text-2xl absolute ml-[17rem]">
              {showPassword === false ? (
                <AiFillEye
                  onClick={handleShowPassword}
                  color="#585858"
                  cursor="pointer"
                />
              ) : (
                <AiFillEyeInvisible
                  onClick={handleShowPassword}
                  color="#585858"
                  cursor="pointer"
                />
              )}
            </div>
          </div>
          <button
            className="bg-red-500 w-full mt-2 h-[3.1rem] text-lg hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
            type="submit"
          >
            Entrar
          </button>
        </form>

        <Link
          className="flex mt-5 text-lg items-center text-[#41414d]"
          to="./register"
        >
          <FiLogIn size={16} color="#E02041" className="mr-2" />
          Não tenho cadastro
        </Link>
      </section>

      <section className="min-h-screen flex items-center justify-center px-16">
        <div className="relative w-full max-w-lg">
          <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
          <div className="absolute top-0 -right-4 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
          <div className="m-8 relative space-y-4">
            <img src={herosImg} alt="Heroes" />
          </div>
        </div>
      </section>

      <Toast />
    </div>
  );
}
