import React, { FormEvent, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";

import api from "../services/api";
import { newIncidentSchema } from "../validations/form";

import Toast, { showToast } from "../components/Toast";
import { Input } from "../components/Input";

import logoImg from "../assets/logo.svg";

export default function NewIncident() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [value, setValue] = useState("");

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

  async function handleNewIncident(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const data = {
      title,
      description,
      value,
    };

    const formValid = await newIncidentSchema.isValid(data);

    if (formValid)
      try {
        debugger;
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
    <div className="h-screen w-full m-auto max-w-5xl flex items-center justify-center">
      <div className="bg-gray-100 w-full p-24 shadow-md rounded flex justify-between items-center">
        <section className="w-full max-w-sm">
          <img src={logoImg} alt="Be The Hero" />

          <h1 className="mx-0 mt-16 mb-8 text-2xl">Cadastrar novo caso</h1>
          <p className="text-lg text-[#737380] leading-8">
            Cadastrar o caso detalhadamente para encontrar um herói para
            resolver isso.
          </p>

          <Link
            className="flex mt-5 text-lg items-center text-[#41414d]"
            to="/profile"
          >
            <FiArrowLeft size={16} color="#E02041" />
            Voltar para home
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
          />

          <textarea
            className="
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
              focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:border-none focus:outline-none"
            rows={5}
            placeholder="Descrição"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />

          <Input
            mask="currency"
            onChange={(event) => setValue(event.target.value)}
            placeholder="R$"
            inputId={"title"}
            label={"R$"}
            type="text"
            className={`${value ? "px-9" : "px-3"} `}
            value={value}
          />
          <button
            className="bg-red-500 w-full mt-2 h-[3.1rem] text-lg hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
            type="submit"
          >
            Cadastrar
          </button>
        </form>
      </div>

      <Toast />
    </div>
  );
}
