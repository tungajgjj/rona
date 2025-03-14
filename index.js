import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { Sun, Moon } from "lucide-react";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark bg-gray-900 text-white" : "bg-white text-black"}>
      <header className="p-5 flex justify-between items-center">
        <h1 className="text-2xl font-bold">My Portfolio</h1>
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="p-2 bg-gray-200 dark:bg-gray-700 rounded-full"
        >
          {darkMode ? <Sun size={20} /> : <Moon size={20} />}
        </button>
      </header>
      <main className="min-h-screen flex flex-col items-center justify-center text-center p-5">
        <motion.h2
          className="text-4xl font-extrabold mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Welcome to My Website
        </motion.h2>
        <p className="text-lg max-w-2xl">
          I create beautiful, responsive websites with modern design trends. Explore my work and get in touch!
        </p>
        <div className="mt-5">
          <Link href="/portfolio" className="mr-3 px-5 py-2 bg-blue-500 text-white rounded-lg">
            View Portfolio
          </Link>
          <Link href="/contact" className="px-5 py-2 bg-gray-800 text-white rounded-lg">
            Contact Me
          </Link>
        </div>
      </main>
      
      {/* Portfolio Section */}
      <section className="p-10 text-center">
        <h2 className="text-3xl font-bold mb-5">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          <div className="p-5 bg-gray-100 dark:bg-gray-800 rounded-lg">
            <h3 className="text-xl font-semibold">Project 1</h3>
            <p className="text-sm">Description of the project.</p>
          </div>
          <div className="p-5 bg-gray-100 dark:bg-gray-800 rounded-lg">
            <h3 className="text-xl font-semibold">Project 2</h3>
            <p className="text-sm">Description of the project.</p>
          </div>
          <div className="p-5 bg-gray-100 dark:bg-gray-800 rounded-lg">
            <h3 className="text-xl font-semibold">Project 3</h3>
            <p className="text-sm">Description of the project.</p>
          </div>
        </div>
      </section>
      
      {/* Contact Section */}
      <section className="p-10 text-center bg-gray-200 dark:bg-gray-700">
        <h2 className="text-3xl font-bold mb-5">Contact Me</h2>
        <form className="max-w-md mx-auto">
          <input className="w-full p-2 mb-3 rounded" type="text" placeholder="Your Name" required />
          <input className="w-full p-2 mb-3 rounded" type="email" placeholder="Your Email" required />
          <textarea className="w-full p-2 mb-3 rounded" placeholder="Your Message" rows="4" required></textarea>
          <button className="px-5 py-2 bg-blue-500 text-white rounded-lg" type="submit">
            Send Message
          </button>
        </form>
      </section>
    </div>
  );
}
