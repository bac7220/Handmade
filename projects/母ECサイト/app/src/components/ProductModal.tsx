"use client";

import { Product } from "@/data/products";
import { useEffect } from "react";

type Props = {
    product: Product | null;
    onClose: () => void;
};

export default function ProductModal({ product, onClose }: Props) {
    useEffect(() => {
        if (product) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
        return () => {
            document.body.style.overflow = "";
        };
    }, [product]);

    useEffect(() => {
        const handleKey = (e: KeyboardEvent) => {
            if (e.key === "Escape") onClose();
        };
        window.addEventListener("keydown", handleKey);
        return () => window.removeEventListener("keydown", handleKey);
    }, [onClose]);

    if (!product) return null;

    return (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
            {/* Overlay */}
            <div
                className="absolute inset-0 bg-gray-800/40 backdrop-blur-sm"
                onClick={onClose}
            />

            {/* Content */}
            <div className="relative bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl animate-fade-in-up">
                <button
                    onClick={onClose}
                    className="absolute top-3 right-4 text-2xl text-gray-400 hover:text-gray-600 transition-colors z-10"
                    aria-label="閉じる"
                >
                    &times;
                </button>

                <div className="grid md:grid-cols-2">
                    {/* Image */}
                    <div className="aspect-square bg-gradient-to-br from-teal-50 to-sky-50 flex items-center justify-center">
                        <span className="text-gray-400 text-sm">
                            {product.name}
                        </span>
                    </div>

                    {/* Info */}
                    <div className="p-6 flex flex-col justify-center">
                        {product.badge && (
                            <span
                                className={`self-start px-3 py-0.5 rounded-full text-xs font-medium text-white mb-3 ${
                                    product.badge === "新作"
                                        ? "bg-emerald-400"
                                        : "bg-orange-400"
                                }`}
                            >
                                {product.badge}
                            </span>
                        )}
                        <h3 className="text-xl font-bold text-gray-800 mb-2">
                            {product.name}
                        </h3>
                        <p className="text-xl font-bold text-teal-600 mb-4">
                            &yen;{product.price.toLocaleString()}
                        </p>
                        <p className="text-sm text-gray-500 leading-relaxed mb-6">
                            {product.description}
                        </p>
                        <a
                            href={product.shopUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block text-center px-6 py-3 bg-teal-500 text-white rounded-full text-sm font-medium hover:bg-teal-600 transition-colors"
                        >
                            ショップで購入する
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
