import React, { useContext } from "react"
import { AppContext } from "../Context/AppContext"
import PatientCard from "../Components/PatientCard"
import PatientModal from "../Components/PatientModal"
import AddPatientForm from "../Components/AddPatientForm"

export default function Patients() {
  const { patients, query, setQuery, selected, setSelected, loading, error } =
    useContext(AppContext);

  const filtered = patients.filter((p) =>
    p.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <section className="p-6 md:p-20  min-h-screen">
      <h2 className="text-3xl font-bold mb-6 text-white">
        Patients
      </h2>

      {/* Add Patient Form */}
      <AddPatientForm />

      {/* Search & Status */}
      <div className="flex justify-between items-center mb-6">
        <input
          type="text"
          placeholder="Search by name..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="px-4 py-2 rounded-lg border border-gray-300 w-72 focus:ring-2 focus:ring-[var(--accent)] outline-none text-white"
        />
        <span className="text-white">
          Showing {filtered.length} of {patients.length}
        </span>
      </div>

      {/* Loading / Error */}
      {loading && <p className="text-white">Loading patients...</p>}
      {error && (
        <p className="text-red-600 font-semibold">
          ⚠️ Error: {error}
        </p>
      )}

      {/* Patient List */}
      <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
        {!loading &&
          !error &&
          filtered.map((p) => (
            <PatientCard key={p.id} patient={p} onView={() => setSelected(p)} />
          ))}
      </div>

      {/* Patient Modal */}
      {selected && <PatientModal patient={selected} onClose={() => setSelected(null)} />}
    </section>
  );
}
