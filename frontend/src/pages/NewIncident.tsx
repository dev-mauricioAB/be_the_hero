import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";

import { ThemeContex } from "../contexts/ThemeContext";

import api from "../services/api";
import { newIncidentSchema } from "../validations/form";

import Toast, { showToast } from "../components/Toast";
import { Input } from "../components/Input";
import CurrencyInput from "../components/CurrencyInput";
import { Button } from "../components/Button";
import { Toggle } from "../components/Toggle";

import logoImg from "../assets/logo.svg";
import logoImgLight from "../assets/logo_light.svg";

export default function NewIncident() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [value, setValue] = useState("");

  const { isDarkMode } = useContext(ThemeContex);

  const navigate = useNavigate();

  const ongId = localStorage.getItem("ongId") as string | number | boolean;

  const notify = (message: string) =>
    showToast({
      type: "error",
      message,
      config: {
        position: "top-center",
        className: "toast-login-error",
      },
    });

  async function handleNewIncident() {
    const data = {
      title,
      description,
      value: value && parseFloat(value.replace("R$", "")).toFixed(2),
    };

    const formValid = await newIncidentSchema.isValid(data);

    if (formValid)
      try {
        await api.post("incidents", data, {
          headers: {
            Authorization: ongId,
          },
        });

        navigate("/profile");
      } catch (err) {
        notify(
          "🧘🏼‍♂️ Ops. Houve um erro ao tentar criar um novo caso. Tente novamente."
        );
      }
    else notify("👓 Ops. Verifique as informações fornecidas.");
  }

  return (
    <div className="dark">
      <div className={`${isDarkMode && "dark:bg-[#0c081c]"} transition`}>
        <div
          className={`h-screen w-full m-auto max-w-5xl flex items-center justify-center `}
        >
          <div className="absolute right-0 top-0 m-10">
            <Toggle />
          </div>
          <div
            className={`
              ${
                isDarkMode
                  ? "dark:bg-[#1a113d] shadow-[#1b162d]"
                  : "bg-gray-100"
              }
              transition
              w-full
              p-24
              shadow-md
              rounded
              flex
              justify-between
              items-center
            `}
          >
            <section className="w-full max-w-sm">
              <img
                src={isDarkMode ? logoImgLight : logoImg}
                alt="Be The Hero"
                className="select-none"
              />

              <h1
                className={`mx-0 mt-16 mb-8 text-2xl select-none ${
                  isDarkMode && "dark:text-white"
                }
              `}
              >
                Cadastrar novo caso
              </h1>
              <p
                className={`text-lg leading-8  ${
                  isDarkMode ? "dark:text-[#c2c2c2]" : "text-[#737380]"
                }`}
              >
                Cadastrar o caso detalhadamente para encontrar um herói para
                resolver isso.
              </p>

              <Link
                className="flex mt-5 text-lg items-center text-[#41414d]"
                to="/profile"
              >
                <FiArrowLeft size={16} color="#E02041" />
                <span className={`${isDarkMode && "dark:text-white"}`}>
                  Voltar para Home
                </span>
              </Link>
            </section>

            <form
              className="flex justify-center flex-col w-full max-w-md"
              onSubmit={handleNewIncident}
            >
              <Input
                value={title}
                inputId={"title"}
                label={"Título do caso"}
                placeholder="Título do caso"
                type="text"
                onChange={(e) => setTitle(e.target.value)}
                isDarkMode={isDarkMode}
              />

              <textarea
                className={`
                  shadow
                  form-control
                  block
                  w-full
                  px-3
                  py-1.5
                  text-base
                  text-gray-700
                  bg-white bg-clip-padding
                  border border-solid border-gray-300
                  rounded
                  transition
                  ease-in-out
                  mb-2
                  focus:shadow-outline
                  ${
                    isDarkMode
                      ? "bg-[#0e0628] focus:bg-[#0e0628] focus:border-white focus:text-gray-200 text-gray-200"
                      : "focus:text-gray-700 focus:bg-white focus:border-blue-600"
                  }`}
                rows={5}
                placeholder="Descrição"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />

              <CurrencyInput
                placeholder="R$ 0,00"
                type="text"
                onChange={(event) => setValue(event.target.value)}
                value={value}
                className={`form-control
                  block
                  w-full
                  h-[3.5rem]
                  px-3
                  py-1.5
                  text-base
                  font-normal
                  text-gray-700
                  bg-white bg-clip-padding
                  border border-solid border-gray-300
                  rounded
                  transition
                  shadow
                  ease-in-out
                  m-0
                  mb-2
                  ${
                    isDarkMode
                      ? "bg-[#0e0628] focus:bg-[#0e0628] focus:border-white focus:text-gray-200 text-gray-200"
                      : "focus:text-gray-700 focus:bg-white focus:border-blue-600"
                  }`}
              />
              <Button
                label="Cadastrar"
                color="red"
                type="submit"
                onClick={handleNewIncident}
                isDarkMode={isDarkMode}
              />
            </form>
          </div>

          <Toast />
        </div>
      </div>
    </div>
  );
}
