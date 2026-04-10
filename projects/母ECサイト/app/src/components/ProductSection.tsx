"use client";

import { useState } from "react";
import { products, categories, Product } from "@/data/products";
import ProductCard from "./ProductCard";
import ProductModal from "./ProductModal";

export default function ProductSection() {
    const [activeCategory, setActiveCategory] = useState("all");
    const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

    const filtered =
        activeCategory === "all"
            ? products
            : products.filter((p) => p.category === activeCategory);

    return (
        <section className="py-20 px-4" id="products">
            <div className="max-w-5xl mx-auto">
                <h2 className="text-2xl font-bold text-center text-teal-600 mb-1">
                    商品一覧
                </h2>
                <p className="text-center text-gray-400 text-sm mb-8">
                    すべて手作りの一点ものです
                </p>

                {/* Filter */}
                <div className="flex justify-center gap-2 flex-wrap mb-10">
                    <button
                        className={`px-5 py-2 rounded-full text-sm border transition-all ${
                            activeCategory === "all"
                                ? "bg-teal-500 text-white border-teal-500"
                                : "bg-white text-gray-500 border-gray-200 hover:border-teal-400 hover:text-teal-600"
                        }`}
                        onClick={() => setActiveCategory("all")}
                    >
                        すべて
                    </button>
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            className={`px-5 py-2 rounded-full text-sm border transition-all ${
                                activeCategory === cat
                                    ? "bg-teal-500 text-white border-teal-500"
                                    : "bg-white text-gray-500 border-gray-200 hover:border-teal-400 hover:text-teal-600"
                            }`}
                            onClick={() => setActiveCategory(cat)}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filtered.map((product, i) => (
                        <ProductCard
                            key={product.id}
                            product={product}
                            index={i}
                            onClick={() => setSelectedProduct(product)}
                        />
                    ))}
                </div>
            </div>

            <ProductModal
                product={selectedProduct}
                onClose={() => setSelectedProduct(null)}
            />
        </section>
    );
}
