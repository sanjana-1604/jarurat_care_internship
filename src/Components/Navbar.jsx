//import React, { useContext } from "react"
import { Link } from "react-router"
import { FaMoon, FaSun, FaUserInjured } from "react-icons/fa"
import { MdHome, MdInfo } from "react-icons/md"
import { AppContext } from "../Context/AppProvider"

export default function Navbar() {
 // const { darkMode, setDarkMode } = useContext(AppContext);

  return (
    <nav className="flex justify-between items-center px-6 py-4 shadow-md  text-white">
      <h2 className="text-2xl font-bold flex items-center gap-2">
        <FaUserInjured /> Jarurat Care
      </h2>
      <ul className="flex gap-6 items-center font-medium">
        <li>
          <Link
            to="/"
            className="flex items-center gap-1 hover:text-[var(--sky)]"
          >
            <MdHome /> Home
          </Link>
        </li>
        <li>
          <Link
            to="/patients"
            className="flex items-center gap-1 hover:text-[var(--sky)]"
          >
            <FaUserInjured /> Patients
          </Link>
        </li>
        <li>
          <Link
            to="/about"
            className="flex items-center gap-1 hover:text-[var(--sky)]"
          >
            <MdInfo /> About
          </Link>
        </li>
        {/* <li>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-full border border-[var(--sky)] hover:bg-[var(--sky)] hover:text-[var(--primary)] transition"
          >
            {darkMode ? <FaSun /> : <FaMoon />}
          </button>
        </li> */}
      </ul>
    </nav>
  );
}
