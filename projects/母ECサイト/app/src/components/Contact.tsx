export default function Contact() {
    const methods = [
        { icon: "✉️", label: "メールで問い合わせ", href: "#" },
        { icon: "💬", label: "LINEで問い合わせ", href: "#" },
        { icon: "🏠", label: "ショップページ（BASE等）", href: "#" },
    ];

    return (
        <section className="py-20 px-4" id="contact">
            <div className="max-w-lg mx-auto text-center">
                <h2 className="text-2xl font-bold text-teal-600 mb-1">
                    お問い合わせ
                </h2>
                <p className="text-gray-400 text-sm mb-8">
                    ご質問やオーダーのご相談など、お気軽にどうぞ
                </p>

                <div className="flex flex-col gap-3">
                    {methods.map((m, i) => (
                        <a
                            key={i}
                            href={m.href}
                            className="flex items-center gap-4 px-5 py-4 bg-white rounded-lg shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all text-sm text-gray-600"
                        >
                            <span className="text-xl">{m.icon}</span>
                            <span>{m.label}</span>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
}
