// components/Reviews.jsx
import React from "react";
import { motion as Motion } from "framer-motion";

const reviews = [
{
    name: "Sarah Johnson",
    stars: 5,
    text: "TaskFlow has completely transformed how I organize my projects. Super easy and intuitive!",
},
{
    name: "Michael Lee",
    stars: 4,
    text: "Great tool with powerful features. The cloud sync keeps me connected on all my devices.",
},
{
    name: "Emma Davis",
    stars: 5,
    text: "Highly recommend TaskFlow to anyone looking to boost their productivity and workflow.",
},
];

const Star = ({ filled }) => (
<svg
    className={`w-6 h-6 ${filled ? "text-yellow-400" : "text-gray-600"}`}
    fill="currentColor"
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
>
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.957a1 1 0 00.95.69h4.15c.969 0 1.371 1.24.588 1.81l-3.36 2.44a1 1 0 00-.364 1.118l1.287 3.957c.3.921-.755 1.688-1.54 1.118l-3.36-2.44a1 1 0 00-1.175 0l-3.36 2.44c-.784.57-1.838-.197-1.54-1.118l1.287-3.957a1 1 0 00-.364-1.118L2.036 9.384c-.783-.57-.38-1.81.588-1.81h4.15a1 1 0 00.95-.69l1.286-3.957z" />
</svg>
);

export default function Reviews() {
return (
    <section className="py-20 px-8 bg-gray-800">
    <h2 className="text-5xl font-extrabold text-center mb-16 text-gray-200">
        What our users say
    </h2>
    <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-12">
        {reviews.map(({ name, stars, text }, i) => (
        <Motion.div
            key={i}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: i * 0.3 }}
            className="bg-gray-700 rounded-3xl p-12 shadow-lg flex flex-col"
        >
            <div className="flex space-x-1 mb-6">
            {[...Array(5)].map((_, idx) => (
                <Star key={idx} filled={idx < stars} />
            ))}
            </div>
            <p className="text-lg opacity-90 flex-grow">{text}</p>
            <p className="mt-6 font-semibold text-right opacity-70">- {name}</p>
        </Motion.div>
        ))}
    </div>
    </section>
);
}
