import React from "react"
import FeatureCard from "../Components/FeatureCard"
import { FaClipboardList, FaSearch, FaLaptop } from "react-icons/fa"

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="flex flex-col md:flex-row items-center justify-between px-6 md:px-20 py-16  text-white">
        <div className="max-w-xl">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Patient Records Made Simple
          </h2>
          <p className="text-lg mb-6 text-[var(--lightblue)]">
            Manage, track, and access patient details with an intuitive dashboard — built for doctors and healthcare workers.
          </p>
          <div className="flex gap-4">
            <a
              href="/patients"
              className="px-6 py-3 rounded-lg bg-[var(--info)] text-white font-medium hover:bg-[var(--teal)] transition"
            >
              Get Started
            </a>
            <a
              href="#features"
              className="px-6 py-3 rounded-lg border border-[var(--info)] text-[var(--info)] hover:bg-[var(--info)] hover:text-white transition"
            >
              Learn More
            </a>
          </div>
        </div>
        <div className="mt-10 md:mt-0">
          <img
            src="https://cdn-icons-png.flaticon.com/512/2966/2966489.png"
            alt="Medical Dashboard Illustration"
            className="w-72 md:w-96 drop-shadow-lg"
          />
        </div>
      </section>

      {/* Features */}
      <section id="features" className="px-6 md:px-20 py-16 text-center ">
        <h3 className="text-3xl font-bold mb-12 text-white">
          Why Jarurat Care?
        </h3>
        <div className="grid md:grid-cols-3 gap-8 ">
          <FeatureCard
            icon={<FaClipboardList />}
            title="Easy Records"
            desc="Quickly view, add, and update patient details."
          />
          <FeatureCard
            icon={<FaSearch />}
            title="Smart Search"
            desc="Filter patients by name, age, or contact instantly."
          />
          <FeatureCard
            icon={<FaLaptop />}
            title="Responsive UI"
            desc="Optimized for desktop, tablet, and mobile devices."
          />
        </div>
      </section>
    </>
  );
}
