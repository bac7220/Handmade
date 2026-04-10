export default function Hero() {
    return (
        <section className="pt-32 pb-20 px-4 text-center bg-gradient-to-b from-teal-50 via-sky-50 to-white">
            <p className="text-sm tracking-widest text-teal-500 mb-3">
                ひとつひとつ、心をこめて
            </p>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800 leading-relaxed mb-4">
                やさしい手仕事のお店
            </h1>
            <p className="text-gray-500 leading-loose mb-8">
                天然素材を使い、ていねいに手作りした
                <br />
                日常を彩るハンドメイド作品をお届けします。
            </p>
            <a
                href="#products"
                className="inline-block px-8 py-3 bg-teal-500 text-white rounded-full font-medium hover:bg-teal-600 transition-all hover:-translate-y-0.5 shadow-lg shadow-teal-500/25"
            >
                商品を見る
            </a>
        </section>
    );
}
