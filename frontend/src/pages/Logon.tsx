import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FiLogIn } from "react-icons/fi";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";

import Toast, { showToast } from "../components/Toast";
import { Input } from "../components/Input";
import { Button } from "../components/Button";
import { Toggle } from "../components/Toggle";
import { Animation } from "../components/Animation";

import api from "../services/api";
import { loginSchema } from "../validations/form";

import logoImg from "../assets/logo.svg";
import logoImgLight from "../assets/logo_light.svg";

export default function Logon() {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const [isDarkMode, setIsDarkMode] = useState(false);

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

  async function handleLogin() {
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
    <div className=" w-full dark h-screen justify-center">
      <div
        className={`
          flex
          sm:flex-col
          md:flex-row
          mt-0
          sm:pt-2
          justify-center
          items-center
          transition
          ${isDarkMode && "dark:bg-[#0c081c]"}
        `}
      >
        <div className="absolute right-0 top-0 m-10">
          <Toggle handleSetDarkMode={() => setIsDarkMode(!isDarkMode)} />
        </div>

        <section className={`w-full max-w-sm `}>
          <img
            src={isDarkMode ? logoImgLight : logoImg}
            alt="Be The Hero"
            className="mb-8"
          />

          <h1
            className={`text-2xl text-[#585858] mb-2 ${
              isDarkMode ? "dark:text-white" : null
            }`}
          >
            Faça seu Logon
          </h1>

          <form className="w-full justify-center items-center">
            <Input
              value={id}
              onChange={(e) => setId(e.target.value)}
              label={"Seu ID"}
              inputId={"id"}
              type="text"
              placeholder="Seu ID"
              isDarkMode={isDarkMode}
            />
            <div className="hidden">
              <Input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                inputId={"password"}
                type={showPassword === false ? "password" : "text"}
                placeholder={showPassword === false ? "*******" : "Sua senha"}
                isDarkMode={isDarkMode}
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
            <Button
              label="Entrar"
              color="red"
              type="submit"
              onClick={handleLogin}
              isDarkMode={isDarkMode}
            />
          </form>

          <Link
            className={`flex mt-5 text-lg items-center text-[#41414d] ${
              isDarkMode ? "dark:text-white" : null
            }`}
            to="./register"
          >
            <FiLogIn size={16} color="#E02041" className="mr-2" />
            Não tenho cadastro
          </Link>
        </section>

        <Animation isDarkMode={isDarkMode} />

        <Toast />
      </div>
    </div>
  );
}
