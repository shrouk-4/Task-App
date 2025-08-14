// components/Hero.jsx
import React from "react";
import { motion as Motion } from "framer-motion";

export default function Hero() {
return (
    <section className="min-h-screen flex items-center justify-between px-8 lg:px-24 bg-gradient-to-tr from-blue-900 via-black to-gray-900">

    <Motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 1 }}
        className="max-w-xl"
    >
        <h1 className="text-9xl font-extrabold mb-6 leading-tight">
        TaskApp
        </h1>
        <p className="text-6xl mb-8 opacity-80">
        Organize your tasks with ease and style.
        </p>
        <button className="bg-cyan-500 hover:bg-cyan-600 text-white px-12 py-4 rounded-full text-2xl font-bold shadow-lg transition-transform transform hover:scale-110">
        Get Started
        </button>
    </Motion.div>

    <Motion.div
        initial={{ opacity: 0, rotate: -10, x: 100 }}
        whileInView={{ opacity: 1, rotate: 0, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2 }}
        className="relative w-2/5 h-full flex justify-center items-center"
    >
        <img
        src={`${import.meta.env.BASE_URL}main1.jpg`}
        alt="Task management illustration"
        className="rounded-lg shadow-lg w-full h-full "
        style={{ transform: "skew(-10deg)" }}
        />
    </Motion.div>
    </section>
);
}

