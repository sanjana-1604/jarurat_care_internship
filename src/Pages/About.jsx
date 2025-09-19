import React from "react"

export default function About() {
  return (
    <section className="p-6 md:p-20 max-w-3xl mx-auto  rounded-xl ">
      <h2 className="text-3xl font-bold mb-4 text-white">
        About Us
      </h2>
      <p className="leading-relaxed mb-4 text-white">
        Jarurat Care is a modern patient management dashboard that helps doctors
        and healthcare workers keep track of patient details, history, and
        contact information. Designed with a clean, responsive UI and seamless
        search features.
      </p>
      <p className="leading-relaxed mb-4 text-white">
        This project is built using <strong>React</strong>, styled with{" "}
        <strong>TailwindCSS</strong>, and enhanced with{" "}
        <strong>Framer Motion</strong> for smooth animations.
      </p>
    </section>
  );
}
