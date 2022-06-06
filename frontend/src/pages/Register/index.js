import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";

import api from "../../services/api";
import { registerSchema } from "../../validations/form";

import Toast, { showToast } from "../../components/Toast";
import { Input } from "../../components/Input";

import { UF } from "../../utils/constants";

import logoImg from "../../assets/logo.svg";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [city, setCity] = useState("");
  const [uf, setUf] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const notify = (message) =>
    showToast({
      type: "error",
      message,
      config: {
        position: "top-center",
        className: "toast-login-error",
      },
    });

  async function handleRegister(e) {
    e.preventDefault();

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
    <div className="h-screen w-full m-auto max-w-5xl flex items-center justify-center">
      <div className="bg-gray-100 w-full p-24 shadow-md rounded flex justify-between items-center">
        <section className="w-full max-w-sm">
          <img src={logoImg} alt="Be The Hero" />

          <h1 className="mx-0 mt-16 mb-8 text-2xl">Cadastro</h1>
          <p className="text-lg text-[#737380] leading-8">
            Faça seu cadastro, entre na plataforma e ajude pessoas a encontrarem
            os casos de sua ONG.
          </p>

          <Link
            className="flex mt-5 text-lg items-center text-[#41414d]"
            to="/"
          >
            <FiArrowLeft className="mr-2" size={16} color="#E02041" />
            <span>Voltar para Home</span>
          </Link>
        </section>

        <div className="w-full max-w-md ml-3">
          <Input
            placeholder="Nome da ONG"
            value={name}
            onChange={(e) => setName(e.target.value)}
            inputId={"ongName"}
            label={"Nome da ONG"}
            type={"text"}
          />
          <Input
            inputId={"email"}
            label={"E-mail"}
            type={"email"}
            placeholder="E-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            inputId={"whatsapp"}
            label={"Whastapp"}
            type={"text"}
            placeholder="Whastapp"
            mask="phone"
            value={whatsapp}
            onChange={(e) => setWhatsapp(e.target.value)}
          />

          <div className="flex">
            <Input
              inputId={"cidade"}
              label={"Cidade"}
              type={"text"}
              placeholder="Cidade"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              style={{ width: "22rem" }}
            />
            <select
              className="
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
                focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              placeholder="UF"
              value={uf}
              onChange={(e) => setUf(e.target.value)}
            >
              {Object.keys(UF).map((state, key) => (
                <option value={state} key={key}>
                  {state}
                </option>
              ))}
            </select>
          </div>
          <Input
            inputId={"password"}
            label={"Password"}
            type={"text"}
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            className="bg-red-500 w-full mt-2 h-[3.1rem] text-lg hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
            type="submit"
            onClick={handleRegister}
          >
            Cadastrar
          </button>
        </div>
      </div>

      <Toast />
    </div>
  );
}
