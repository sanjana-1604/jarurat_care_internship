import React from "react"

export default function FeatureCard({ title, desc, icon }) {
  return (
    <div className="bg-white dark:bg-secondary rounded-xl shadow-md p-6 hover:shadow-xl transition text-center">
      <div className="text-4xl mb-4 text-accent">{icon}</div>
      <h4 className="text-xl font-semibold mb-2">{title}</h4>
      <p className="">{desc}</p>
    </div>
  );
}
