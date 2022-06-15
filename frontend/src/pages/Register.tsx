import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";

import api from "../services/api";
import { registerSchema } from "../validations/form";

import Toast, { showToast } from "../components/Toast";
import { Input } from "../components/Input";
import { Button } from "../components/Button";
import { Toggle } from "../components/Toggle";

import { UF } from "../utils/constants";

import logoImg from "../assets/logo.svg";
import logoImgLight from "../assets/logo_light.svg";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [city, setCity] = useState("");
  const [uf, setUf] = useState("");
  const [password, setPassword] = useState("");
  const [isDarkMode, setIsDarkMode] = useState(false);

  const navigate = useNavigate();

  const notify = (message: string) =>
    showToast({
      type: "error",
      message,
      config: {
        position: "top-center",
        className: "toast-login-error",
      },
    });

  async function handleRegister() {
    const data = {
      password,
      name,
      email,
      whatsapp: whatsapp.replace(/\D/g, ""),
      city,
      uf,
    };

    const formValid = await registerSchema.isValid(data);

    if (formValid) {
      try {
        const response = await api.post("ongs", data);
        alert(`Seu ID de acesso: ${response.data.id}`);

        navigate("/");
      } catch (err) {
        notify(
          "🧘🏼‍♂️ Ops. Houve um erro ao tentar seu cadastro. Tente novamente."
        );
      }
    } else {
      notify("👓 Ops. Verifique as informações fornecidas.");
    }
  }

  return (
    <div className="dark">
      <div
        className={`
          h-screen
          w-full
          m-auto
          justify-center
          flex
          items-center
          transition
          ${isDarkMode && "dark:bg-[#0c081c]"}
        `}
      >
        <div className="absolute right-0 top-0 m-10">
          <Toggle handleSetDarkMode={() => setIsDarkMode(!isDarkMode)} />
        </div>

        <div
          className={`
          ${isDarkMode ? "dark:bg-[#1a113d]" : "bg-gray-100"}
            transition
            w-full
            p-24
            shadow-md
            rounded
            flex
            justify-between
            items-center
            max-w-5xl
          `}
        >
          <section className="w-full max-w-sm">
            <img src={isDarkMode ? logoImgLight : logoImg} alt="Be The Hero" />

            <h1
              className={`mx-0 mt-16 mb-8 text-2xl ${
                isDarkMode ? "dark:text-white" : null
              }`}
            >
              Cadastro
            </h1>
            <p
              className={`text-lg text-[#737380] leading-8 ${
                isDarkMode ? "dark:text-[#c2c2c2]" : null
              }`}
            >
              Faça seu cadastro, entre na plataforma e ajude pessoas a
              encontrarem os casos de sua ONG.
            </p>

            <Link
              className="flex mt-5 text-lg items-center text-[#41414d]"
              to="/"
            >
              <FiArrowLeft className="mr-2" size={16} color="#E02041" />
              <span className={`${isDarkMode ? "dark:text-white" : null}`}>
                Voltar para Home
              </span>
            </Link>
          </section>

          <form className="w-full max-w-md ml-3">
            <Input
              placeholder="Nome da ONG"
              value={name}
              onChange={(e) => setName(e.target.value)}
              inputId={"ongName"}
              label={"Nome da ONG"}
              type="text"
              isDarkMode={isDarkMode}
            />
            <Input
              inputId={"email"}
              label={"E-mail"}
              type="email"
              placeholder="E-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              isDarkMode={isDarkMode}
            />
            <Input
              inputId={"whatsapp"}
              label={"Whastapp"}
              type="text"
              placeholder="Whastapp"
              mask="phone"
              value={whatsapp}
              onChange={(e) => setWhatsapp(e.target.value)}
              isDarkMode={isDarkMode}
            />

            <div className="flex">
              <Input
                inputId={"cidade"}
                label={"Cidade"}
                type="text"
                placeholder="Cidade"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                style={{ width: "22rem" }}
                isDarkMode={isDarkMode}
              />
              <select
                className={`
                font-normal
                shadow 
                appearance-none 
                rounded
                text-base
                w-20  
                py-2 
                px-3 
                border border-solid border-gray-300
                leading-tight 
                focus:shadow-outline 
                mb-2
                ml-2
                scrollbar-thumb-zinc-400 scrollbar-track-transparent scrollbar-thin
                focus:outline-none
                ${
                  isDarkMode
                    ? "bg-[#0e0628] focus:bg-[#0e0628] focus:border-white focus:text-gray-200 text-gray-200 active:bg-[#0e0628]"
                    : "focus:text-gray-700 focus:bg-white focus:border-blue-600"
                }
              `}
                placeholder="UF"
                value={uf}
                onChange={(e) => setUf(e.target.value)}
              >
                {Object.keys(UF).map((state, key) => (
                  <option
                    value={state}
                    key={key}
                    className={`focus:text-gray-700 focus:bg-white focus:border-blue-600 ${
                      isDarkMode &&
                      "bg-[#0e0628] focus:bg-[#0e0628] focus:border-white focus:text-gray-200 text-gray-200"
                    }`}
                  >
                    {state}
                  </option>
                ))}
              </select>
            </div>
            <Input
              inputId={"password"}
              label={"Password"}
              type="text"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              isDarkMode={isDarkMode}
            />

            <Button
              label="Cadastrar"
              color="red"
              type="submit"
              onClick={handleRegister}
              isDarkMode={isDarkMode}
            />
          </form>
        </div>

        <Toast />
      </div>
    </div>
  );
}
