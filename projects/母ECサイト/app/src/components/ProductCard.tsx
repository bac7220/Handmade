import { Product } from "@/data/products";

type Props = {
    product: Product;
    onClick: () => void;
    index: number;
};

export default function ProductCard({ product, onClick, index }: Props) {
    return (
        <article
            className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all hover:-translate-y-1 cursor-pointer animate-fade-in-up"
            style={{ animationDelay: `${index * 60}ms` }}
            onClick={onClick}
        >
            {/* Image */}
            <div className="aspect-square bg-gradient-to-br from-teal-50 to-sky-50 flex items-center justify-center relative">
                <span className="text-gray-400 text-xs">{product.name}</span>
                {product.badge && (
                    <span
                        className={`absolute top-3 left-3 px-3 py-0.5 rounded-full text-xs font-medium text-white ${
                            product.badge === "新作"
                                ? "bg-emerald-400"
                                : "bg-orange-400"
                        }`}
                    >
                        {product.badge}
                    </span>
                )}
            </div>

            {/* Body */}
            <div className="p-4">
                <h3 className="text-sm font-medium text-gray-700 mb-1 leading-relaxed">
                    {product.name}
                </h3>
                <p className="text-base font-bold text-teal-600">
                    &yen;{product.price.toLocaleString()}
                </p>
            </div>
        </article>
    );
}
