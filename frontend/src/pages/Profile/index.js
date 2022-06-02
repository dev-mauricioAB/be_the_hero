import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FiPower, FiTrash2 } from "react-icons/fi";

import api from "../../services/api";
import Modal from "../../components/Modal";
import logoImg from "../../assets/logo.svg";

export default function Profile() {
  const [incidents, setIncidents] = useState([]);

  const navigate = useNavigate();

  const ongId = localStorage.getItem("ongId");
  const ongName = localStorage.getItem("ongName");

  useEffect(() => {
    api
      .get("profile", {
        headers: {
          Authorization: ongId,
        },
      })
      .then((response) => {
        setIncidents(response.data);
      });
  }, [ongId]);

  async function handleDeleteIncident(id) {
    try {
      await api.delete(`incidents/${id}`, {
        headers: {
          Authorization: ongId,
        },
      });

      setIncidents(incidents.filter((incident) => incident.id !== id));
    } catch (err) {
      alert("Erro ao deleter caso. Tente novamente.");
    }
  }

  function handleLogout() {
    localStorage.clear();

    navigate("/");
  }

  return (
    <div className="h-screen w-full m-auto max-w-5xl flex items-center justify-center">
      <div className="absolute top-0 w-full max-w-6xl px-0 py-8 mx-8 my-auto">
        <header className="flex items-center">
          <img className="h-16" src={logoImg} alt="Be The Hero" />
          <span className="text-xl ml-6">Bem Vinda, {ongName}</span>

          <Link className="button w-64 ml-auto mt-0" to="/incidents/new">
            Cadastrar novo caso
          </Link>
          <button
            className="flex justify-center items-center h-14 w-14 rounded border bg-transparent ml-4 transition hover:bg-slate-100"
            onClick={handleLogout}
            type="button"
          >
            <FiPower size={18} color="#E02041" />
          </button>
        </header>

        <h1 className="mt-20 mb-6">Casos cadastrados:</h1>

        <ul className="grid grid-cols-3 gap-3 list-none">
          {incidents.map((incident) => (
            <li
              className="p-6 rounded relative shadow flex justify-between"
              key={incident.id}
            >
              <div>
                <strong className="block mb-1 text-zinc-600">CASO:</strong>
                <p className="text-zinc-500 leading-5 text-base mb-2">
                  {incident.title}
                </p>

                <strong className="block mb-1 text-zinc-600">DESCRIÇÂO:</strong>
                <p className="text-zinc-500 leading-5 text-base mb-2">
                  {incident.description}
                </p>

                <strong className="block mb-1 text-zinc-600">VALOR:</strong>
                <p className="text-zinc-500 leading-5 text-base mb-2">
                  {Intl.NumberFormat("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                  }).format(incident.value)}
                </p>
              </div>
              <div>
                <button
                  className="border-0 hover:opacity-80"
                  onClick={() => handleDeleteIncident(incident.id)}
                  type="button"
                >
                  <FiTrash2 size={20} color="#a8a8b3" />
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
