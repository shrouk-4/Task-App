// components/Pricing.jsx
import React from "react";
import { motion as Motion } from "framer-motion";

const plans = [
{
    title: "Starter",
    price: "$29",
    period: "/month",
    description: "Best option for personal use & for your next project.",
    features: [
    "Individual configuration",
    "No setup, or hidden fees",
    "Team size: 1 developer",
    "Premium support: 6 months",
    "Free updates: 6 months",
    ],
},
{
    title: "Company",
    price: "$99",
    period: "/month",
    description: "Relevant for multiple users, extended & premium support.",
    features: [
    "Individual configuration",
    "No setup, or hidden fees",
    "Team size: 10 developers",
    "Premium support: 24 months",
    "Free updates: 24 months",
    ],
},
{
    title: "Enterprise",
    price: "$499",
    period: "/month",
    description: "Best for large scale uses and extended redistribution rights.",
    features: [
    "Individual configuration",
    "No setup, or hidden fees",
    "Team size: 100+ developers",
    "Premium support: 36 months",
    "Free updates: 36 months",
    ],
},
];

export default function Pricing() {
return (
    <section className="py-20 px-8 max-w-7xl mx-auto relative">
    <h2 className="text-5xl font-extrabold text-center mb-16 text-gray-200">
        Pricing Plans
    </h2>
    <div className="flex flex-col md:flex-row justify-center gap-12">
        {plans.map(({ title, price, period, description, features }, i) => (
        <Motion.div
            key={i}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 0.95, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: i * 0.3 }}
            className="bg-gray-800 bg-opacity-60 backdrop-blur-md rounded-3xl border border-gray-700 shadow-lg p-12 max-w-md mx-auto text-center"
            style={{ minWidth: 320 }}
        >
            <h3 className="text-3xl font-bold mb-4">{title}</h3>
            <p className="opacity-70 mb-8 text-lg">{description}</p>
            <div className="flex justify-center items-baseline mb-10 space-x-2">
            <span className="text-6xl font-extrabold">{price}</span>
            <span className="text-xl opacity-70">{period}</span>
            </div>
            <ul className="text-left mb-10 space-y-5 text-lg opacity-90">
            {features.map((f, idx) => (
                <li key={idx} className="flex items-center space-x-3">
                <svg
                    className="w-6 h-6 text-cyan-400 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                >
                    <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                    />
                </svg>
                <span>{f}</span>
                </li>
            ))}
            </ul>
            <button className="bg-cyan-500 hover:bg-cyan-600 text-white rounded-full px-14 py-4 text-2xl font-bold shadow-lg w-full transition-transform transform hover:scale-105">
            Get Started
            </button>
        </Motion.div>
        ))}
    </div>
    </section>
);
}
