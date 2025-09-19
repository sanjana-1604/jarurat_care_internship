import React from "react"

export default function Footer() {
  return (
    <footer className=" dark:bg-softblue dark:text-primary text-center py-6 mt-10 text-white">
      <p>© 2025 Jarurat Care. All rights reserved.</p>
      <div className="flex justify-center gap-6 mt-2 text-sm">
        <a href="#" className="hover:text-info">Privacy Policy</a>
        <a href="#" className="hover:text-info">Terms</a>
        <a href="#" className="hover:text-info">Contact</a>
      </div>
    </footer>
  );
}
