import React from "react";
import { IncidentProps } from "../models/Incident";

interface IModal {
  onHandleChoise: (choise: boolean) => void;
  incident: IncidentProps | undefined;
}

const Modal: React.FC<IModal> = ({ onHandleChoise, incident }) => {
  return (
    <>
      <button
        type="button"
        className="hidden px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
        data-bs-toggle="modal"
        data-bs-target="#staticBackdrop"
        id="staticBackdropButton"
      ></button>

      <div
        className="modal fade fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto"
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex={-1}
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog relative w-auto pointer-events-none">
          <div className="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current">
            <div className="modal-header flex flex-shrink-0 items-center justify-between p-4 border-b border-gray-200 rounded-t-md">
              <h5
                className="text-xl font-medium leading-normal text-gray-800"
                id="exampleModalLabel"
              >
                Deletar '{incident?.title}'
              </h5>
            </div>
            <div className="modal-body relative p-4">
              Deseja realmente deletar o caso '{incident?.title}'?
            </div>
            <div className="modal-footer flex flex-shrink-0 flex-wrap items-center justify-end p-4 border-t border-gray-200 rounded-b-md">
              <button
                className="mr-2 bg-blue-500 inline-block px-6 py-2.5 text-white font-semibold text-xs leading-tight uppercase rounded shadow-md active:bg-blue-500 hover:bg-blue-600 hover:shadow-lg transition duration-150 ease-in-out"
                data-bs-dismiss="modal"
                onClick={() => onHandleChoise(false)}
              >
                Cancelar
              </button>
              <button
                className="bg-red-500 inline-block px-6 py-2.5 text-white font-semibold text-xs leading-tight uppercase rounded shadow-md hover:bg-red-700 hover:shadow-lg transition duration-150 ease-in-out"
                data-bs-dismiss="modal"
                onClick={() => onHandleChoise(true)}
              >
                Excluir
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
