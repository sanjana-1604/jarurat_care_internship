import React from "react"
import { FaPhoneAlt, FaUser } from "react-icons/fa"

const PatientCard = ({ patient, onView }) => {
  return (
    <div className="bg-white dark:bg-secondary shadow-md rounded-xl p-5 border border-gray-200 dark:border-gray-700 hover:shadow-lg transition">
      <div className="flex items-center gap-3 mb-3">
        <FaUser className="text-accent text-xl" />
        <h3 className="font-semibold text-lg">{patient.name}</h3>
      </div>
      <p className="text-sm text-gray-950 dark:text-gray-950 mb-1">
        Age: {patient.age}
      </p>
      <p className="text-sm text-gray-950 dark:text-gray-950 flex items-center gap-1">
        <FaPhoneAlt /> {patient.contact}
      </p>
      <button
        onClick={onView}
        className="mt-4 w-full px-4 py-2 rounded-md bg-accent border-2 hover:bg-teal transition"
      >
        View Details
      </button>
    </div>
  );
};

export default PatientCard;
