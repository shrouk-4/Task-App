// components/Footer.jsx
import React from "react";
import { motion as Motion } from "framer-motion";

const socials = [
{
    name: "Facebook",
    href: "https://facebook.com",
    svgPath:
    "M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z",
},
{
    name: "Twitter",
    href: "https://twitter.com",
    svgPath:
    "M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z",
},
{
    name: "Instagram",
    href: "https://instagram.com",
    svgPath:
    "M7 2C4.243 2 2 4.243 2 7v10c0 2.757 2.243 5 5 5h10c2.757 0 5-2.243 5-5V7c0-2.757-2.243-5-5-5H7z",
},
{
    name: "LinkedIn",
    href: "https://linkedin.com",
    svgPath:
    "M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-4 0v7h-4v-7a6 6 0 016-6zM2 9h4v12H2zM4 2a2 2 0 110 4 2 2 0 010-4z",
},
];

export default function Footer() {
return (
    <Motion.footer
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 1 }}
    className="bg-gray-900 text-gray-400 text-center py-8 mt-20"
    >
    <div className="max-w-6xl mx-auto mb-6 flex justify-center space-x-10">
        {socials.map(({ name, href, svgPath }) => (
        <a
            key={name}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={name}
            className="text-gray-400 hover:text-cyan-400 transition-colors"
        >
            <svg
            className="w-8 h-8"
            fill="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            >
            <path d={svgPath} />
            </svg>
        </a>
        ))}
    </div>
    <p>© {new Date().getFullYear()} TaskFlow. All rights reserved.</p>
    </Motion.footer>
);
}
