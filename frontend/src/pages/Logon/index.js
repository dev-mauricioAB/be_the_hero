import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FiLogIn } from "react-icons/fi";
import { ToastContainer, toast } from "react-toastify";

import api from "../../services/api";

import "./styles.css";

import herosImg from "../../assets/heroes.png";
import logoImg from "../../assets/logo.svg";

export default function Logon() {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const notify = () =>
    toast("👓 Ops. Verifique suas credenciais.", {
      position: "top-center",
      className: "toast-login-error",
    });

  async function handleLogin(e) {
    e.preventDefault();

    try {
      const response = await api.post("sessions", { id, password });

      localStorage.setItem("ongId", id);
      localStorage.setItem("ongName", response.data.name);

      navigate("/profile");
    } catch (err) {
      notify();
    }
  }

  return (
    <div className="flex sm:flex-col md:flex-row mt-0 sm:pt-2 justify-center items-center ">
      <section>
        <img src={logoImg} alt="Be The Hero" className="mb-8" />

        <h1 className="text-2xl mb-2">Faça seu Logon</h1>

        <div className="w-80">
          <form
            onSubmit={handleLogin}
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            <div className="mb-2">              
              <input
                value={id}
                onChange={(e) => setId(e.target.value)}
                className="                  
                  block
                  w-full
                  px-3
                  py-1.5
                  text-base
                  font-normal
                  text-gray-700
                  bg-white bg-clip-padding
                  border border-solid border-gray-300
                  rounded
                  transition
                  ease-in-out
                  m-0
                  invalid:border-pink-500         
                  focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                id="username"
                type="text"
                placeholder="Username"
              />
            </div>
            <div className="mb-4">
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                class="form-control block
                  w-full
                  px-3
                  py-1.5
                  text-base
                  font-normal
                  text-gray-700
                  bg-white bg-clip-padding
                  border border-solid border-gray-300
                  rounded
                  transition
                  ease-in-out
                  m-0
                  invalid:border-pink-500
                  focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                id="password"
                type="password"
                placeholder="******************"
              />
            </div>
            <button className="button bg-red-500" type="submit">
              Entrar
            </button>

            <Link className="back-link" to="./register">
              <FiLogIn size={16} color="#E02041" />
              Não tenho cadastro
            </Link>
          </form>
        </div>
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

      <ToastContainer />
    </div>
  );
}
