import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FiPower, FiTrash2 } from "react-icons/fi";

import api from "../services/api";

import Modal from "../components/Modal";
import { LoadingSpinner } from "../components/LoadingSpinner";
import { LoadingCard } from "../components/LoadingCard";
import { Toggle } from "../components/Toggle";

import { IncidentProps } from "../models/Incident";

import logoImg from "../assets/logo.svg";
import heroImg from "../assets/hero.png";
import logoImgLight from "../assets/logo_light.svg";

export default function Profile() {
  const [incidents, setIncidents] = useState<IncidentProps[]>([]);
  const [incidentSelected, setIncidentSelected] = useState<IncidentProps>();
  const [deleteIncidentId, setDeleteInidentId] = useState("");
  const [loadingDeleteCase, setLoadingDeleteCase] = useState(false);
  const [loadingCases, setLoadingCases] = useState(false);

  const [isDarkMode, setIsDarkMode] = useState(false);

  const navigate = useNavigate();

  const ongId = localStorage.getItem("ongId") as string | number | boolean;
  const ongName = localStorage.getItem("ongName");

  useEffect(() => {
    setLoadingCases(true);
    api
      .get("profile", {
        headers: {
          Authorization: ongId,
        },
      })
      .then((response) => {
        setIncidents(response.data);
        setLoadingCases(false);
      });
  }, [ongId]);

  async function handleDeleteIncident(id: string) {
    updateIncidentsValues(id);
    setLoadingDeleteCase(true);

    const modalButton = document.getElementById("staticBackdropButton");

    if (modalButton) modalButton.click();
  }

  function handleLogout() {
    localStorage.clear();

    navigate("/");
  }

  async function handleModalChoise(choise: boolean) {
    if (choise) {
      try {
        await api.delete(`incidents/${deleteIncidentId}`, {
          headers: {
            Authorization: ongId,
          },
        });

        setIncidents(
          incidents.filter((incident) => incident.id !== deleteIncidentId)
        );
        setLoadingDeleteCase(false);
      } catch (err) {
        setLoadingDeleteCase(false);
        alert("Erro ao deleter caso. Tente novamente.");
      }
    } else {
      setDeleteInidentId("");
      setLoadingDeleteCase(false);
    }
  }

  function updateIncidentsValues(id: string) {
    setDeleteInidentId(id);
    const incident = incidents.find((incident) => incident.id === id);

    setIncidentSelected(incident);
  }

  return (
    <div className="dark">
      <div
        className={`h-screen w-full m-auto  flex items-center justify-center trasition ${
          isDarkMode && "dark:bg-[#0c081c]"
        }`}
      >
        <div className="absolute right-0 top-0 m-10">
          <Toggle handleSetDarkMode={() => setIsDarkMode(!isDarkMode)} />
        </div>

        <Modal
          onHandleChoise={handleModalChoise}
          incident={incidentSelected}
          isDarkMode={isDarkMode}
        />

        <div
          className={`absolute top-0 w-full max-w-6xl px-0 py-8 mx-8 my-auto transition `}
        >
          <header className="flex items-center justify-between">
            <div className="flex items-center select-none">
              <img
                className="h-16"
                src={isDarkMode ? logoImgLight : logoImg}
                alt="Be The Hero"
              />
              <span
                className={`text-xl ml-6 ${isDarkMode && "dark:text-white"}`}
              >
                Bem Vinda, {ongName}
              </span>
            </div>

            <div className="flex items-center">
              <Link
                className={`
                  select-none
                  h-14 
                  text-lg 
                  items-center 
                  font-medium
                  leading-tight              
                  flex 
                  py-2 
                  px-4 
                  rounded
                  bg-red-500 
                  hover:bg-red-700
                  transition
                  ${isDarkMode ? "dark:text-white" : "text-black"}
                `}
                to="/incidents/new"
              >
                Cadastrar novo caso
              </Link>
              <button
                className={`flex justify-center items-center h-14 w-14 rounded border bg-transparent ml-4 transition ${
                  isDarkMode ? "hover:bg-slate-900" : "hover:bg-slate-100"
                }`}
                onClick={handleLogout}
                type="button"
              >
                <FiPower
                  size={18}
                  color="#E02041"
                  className={`${isDarkMode && "dark:bg-[#0e0628]"}`}
                />
              </button>
            </div>
          </header>
          {incidents.length > 0 && (
            <h1
              className={`mt-20 mb-6 select-none ${
                isDarkMode ? "dark:text-white" : "text-black"
              }`}
            >
              Casos cadastrados:
            </h1>
          )}
          <div className="grid grid-cols-3 gap-3 list-none">
            {loadingCases ? (
              <LoadingCard />
            ) : (
              incidents.length > 0 &&
              incidents.map((incident) => (
                <div className="flex justify-center" key={incident.id}>
                  <div
                    className={`flex justify-between py-6 pl-4 pr-0 rounded-lg shadow-lg ${
                      isDarkMode ? "bg-[#0e0628]" : "bg-white"
                    } max-w-sm w-full`}
                  >
                    <div>
                      <h5
                        className={`${
                          isDarkMode ? "text-zinc-200" : "text-zinc-700"
                        } text-xl leading-tight font-medium mb-2`}
                      >
                        {incident.title}
                      </h5>
                      <strong
                        className={`block mb-1 ${
                          isDarkMode ? "text-zinc-300" : "text-zinc-600"
                        }`}
                      >
                        DESCRIÇÂO:
                      </strong>
                      <p
                        className={`leading-5 text-base mb-2 500 ${
                          isDarkMode ? "text-zinc-400" : "text-zinc-500"
                        }`}
                      >
                        {incident.description}
                      </p>
                      <strong
                        className={`block mb-1 ${
                          isDarkMode ? "text-zinc-300" : "text-zinc-600"
                        }`}
                      >
                        VALOR:
                      </strong>
                      <p
                        className={`leading-5 text-base mb-2 ${
                          isDarkMode ? "text-zinc-400" : "text-zinc-500"
                        }`}
                      >
                        {Intl.NumberFormat("pt-BR", {
                          style: "currency",
                          currency: "BRL",
                        }).format(incident.value)}
                      </p>
                    </div>
                    <div>
                      <button
                        type="button"
                        className="
                        inline-block 
                        px-3
                        text-white 
                        font-medium 
                        text-xs 
                        leading-tight 
                        uppercase 
                        rounded 
                        transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
                        onClick={() => handleDeleteIncident(incident.id)}
                      >
                        {incident.id === deleteIncidentId &&
                        loadingDeleteCase ? (
                          <LoadingSpinner />
                        ) : (
                          <FiTrash2
                            className="transition duration-0 hover:duration-150"
                            size={20}
                            color={`${isDarkMode ? "#e6e6e6" : "#a8a8b3"}`}
                          />
                        )}
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
          {incidents.length === 0 && !loadingCases && (
            <div className="h-96 w-full flex justify-center items-center first-line:">
              <img
                src={heroImg}
                alt="Imagem de Super Herói"
                className="mr-10 select-none"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
