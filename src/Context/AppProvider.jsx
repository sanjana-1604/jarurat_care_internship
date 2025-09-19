import React, { useState, useEffect } from "react";
import { AppContext } from "./AppContext";

export default function AppProvider({ children }) {
  const [patients, setPatients] = useState([]);
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch Patients
  useEffect(() => {
    setLoading(true);
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch patients");
        return res.json();
      })
      .then((data) => {
        setPatients(
          data.map((u, i) => ({
            id: u.id,
            name: u.name,
            age: 20 + ((i * 3) % 40),
            contact: u.phone,
          }))
        );
        setError(null);
      })
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  // Add new patient locally
  const addPatient = (patient) => {
    setPatients((prev) => [
      ...prev,
      { ...patient, id: prev.length + 1 },
    ]);
  };

  return (
    <AppContext.Provider
      value={{
        patients,
        query,
        setQuery,
        selected,
        setSelected,
        loading,
        error,
        addPatient,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
