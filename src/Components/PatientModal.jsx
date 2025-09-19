import React from "react"
import { FaTimes } from "react-icons/fa"

const PatientModal = ({ patient, onClose }) => {
  return (
    <div className="fixed inset-0 z-40 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white dark:bg-secondary p-6 rounded-2xl w-full max-w-md shadow-lg">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">{patient.name}</h2>
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition"
          >
            <FaTimes />
          </button>
        </div>
        <p className="mb-2"><strong>Age:</strong> {patient.age}</p>
        <p className="mb-2"><strong>Contact:</strong> {patient.contact}</p>
      </div>
    </div>
  );
};

export default PatientModal;