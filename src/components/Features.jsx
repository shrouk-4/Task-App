// components/Features.jsx
import React from "react";
import { motion as Motion } from "framer-motion";

const features = [
{
    title: "Easy to Use",
    desc: "Manage tasks effortlessly with our clean UI.",
    Icon: () => (
    <svg
        className="w-16 h-16 text-cyan-400 mb-4"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        viewBox="0 0 24 24"
        aria-hidden="true"
    >
        <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9 12l2 2 4-4m5 2a9 9 0 11-18 0 9 9 0 0118 0z"
        />
    </svg>
    ),
},
{
    title: "Customizable",
    desc: "Adjust settings to suit your workflow.",
    Icon: () => (
    <svg
        className="w-16 h-16 text-cyan-400 mb-4"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        viewBox="0 0 24 24"
        aria-hidden="true"
    >
        <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
        />
    </svg>
    ),
},
{
    title: "Cloud Sync",
    desc: "Access your tasks anywhere, anytime.",
    Icon: () => (
    <svg
        className="w-16 h-16 text-cyan-400 mb-4"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        viewBox="0 0 24 24"
        aria-hidden="true"
    >
        <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3 15a4 4 0 014-4h9a3 3 0 110 6H7a4 4 0 01-4-4z"
        />
        <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M7 15v-3a3 3 0 116 0v3"
        />
    </svg>
    ),
},
];

export default function Features() {
return (
    <section className="py-20 px-8 bg-gray-800">
        <Motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-5xl font-extrabold text-center mb-16"
    >
        Features
        <h3 className ="p-5 font-bold text-4xl">Everything you need to organize your tasks efficiently, all in one place.</h3>
        </Motion.h2>
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-16">
        {features.map(({ title, desc, Icon }, i) => (
        <Motion.div
            key={i}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: i * 0.3 }}
            className="bg-gray-700 rounded-3xl p-14 shadow-lg flex flex-col items-center text-center"
        >
            <Icon />
            <h4 className="text-3xl font-bold mb-4">{title}</h4>
            <p className="text-lg opacity-80">{desc}</p>
        </Motion.div>
        ))}
    </div>
    </section>
);
}
