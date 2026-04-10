export default function About() {
    return (
        <section className="py-20 px-4 bg-gradient-to-b from-white to-teal-50/50" id="about">
            <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
                <div>
                    <h2 className="text-2xl font-bold text-teal-600 mb-6">
                        作り手について
                    </h2>
                    <p className="text-sm text-gray-500 leading-loose">
                        はじめまして。当店のページをご覧いただきありがとうございます。
                        <br /><br />
                        天然素材を使って、日常にそっと寄り添うようなアイテムを
                        ひとつひとつ手作りしています。
                        <br /><br />
                        素材の風合いを大切にし、使うほどに愛着がわくような
                        作品づくりを心がけています。
                        <br /><br />
                        お気に入りの一品が見つかりましたら、とても嬉しいです。
                    </p>
                </div>
                <div className="order-first md:order-last">
                    <div className="aspect-[4/3] bg-white rounded-xl shadow-sm flex items-center justify-center text-gray-300 text-sm">
                        Photo
                    </div>
                </div>
            </div>
        </section>
    );
}
