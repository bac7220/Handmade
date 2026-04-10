"use client";

import { useState } from "react";
import Link from "next/link";

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="fixed top-0 left-0 w-full bg-white/95 backdrop-blur-md z-50 border-b border-gray-100">
            <div className="max-w-5xl mx-auto px-4 h-16 flex items-center justify-between">
                <Link href="/" className="flex items-center gap-2 font-bold text-lg text-teal-600">
                    <span className="text-2xl">🧶</span>
                    <span>Handmade Shop</span>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:block">
                    <ul className="flex gap-8">
                        <li>
                            <a href="#products" className="text-sm text-gray-500 hover:text-teal-600 transition-colors">
                                商品一覧
                            </a>
                        </li>
                        <li>
                            <a href="#about" className="text-sm text-gray-500 hover:text-teal-600 transition-colors">
                                作り手について
                            </a>
                        </li>
                        <li>
                            <a href="#contact" className="text-sm text-gray-500 hover:text-teal-600 transition-colors">
                                お問い合わせ
                            </a>
                        </li>
                    </ul>
                </nav>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden flex flex-col gap-1.5 p-1"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="メニュー"
                >
                    <span className={`block w-6 h-0.5 bg-teal-600 transition-transform ${isOpen ? "translate-y-2 rotate-45" : ""}`} />
                    <span className={`block w-6 h-0.5 bg-teal-600 transition-opacity ${isOpen ? "opacity-0" : ""}`} />
                    <span className={`block w-6 h-0.5 bg-teal-600 transition-transform ${isOpen ? "-translate-y-2 -rotate-45" : ""}`} />
                </button>
            </div>

            {/* Mobile Nav */}
            <nav className={`md:hidden bg-white/98 backdrop-blur-md border-b border-gray-100 transition-all overflow-hidden ${isOpen ? "max-h-60 opacity-100" : "max-h-0 opacity-0"}`}>
                <ul className="flex flex-col items-center gap-4 py-6">
                    {["商品一覧", "作り手について", "お問い合わせ"].map((label, i) => (
                        <li key={i}>
                            <a
                                href={`#${["products", "about", "contact"][i]}`}
                                className="text-gray-600 hover:text-teal-600 transition-colors"
                                onClick={() => setIsOpen(false)}
                            >
                                {label}
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
}
