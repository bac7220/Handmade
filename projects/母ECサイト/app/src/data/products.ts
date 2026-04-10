export type Product = {
    id: number;
    name: string;
    price: number;
    category: string;
    description: string;
    image: string;
    shopUrl: string;
    badge?: string;
};

export const products: Product[] = [
    {
        id: 1,
        name: "手編みクラッチバッグ 3色セット",
        price: 4500,
        category: "バッグ",
        description:
            "イエロー・ピンク・ミントの3色が揃った手編みクラッチバッグ。しっかりとした編み目で丈夫な仕上がりです。",
        image: "/images/product-01.jpg",
        shopUrl: "#",
        badge: "人気",
    },
    {
        id: 2,
        name: "ブラック ハンドバッグ",
        price: 3800,
        category: "バッグ",
        description:
            "シックなブラックの手編みハンドバッグ。持ち手付きでお出かけにぴったり。どんなコーデにも合わせやすい一品です。",
        image: "/images/product-02.jpg",
        shopUrl: "#",
    },
    {
        id: 3,
        name: "花柄クラッチポーチ",
        price: 2200,
        category: "ポーチ",
        description:
            "白地にピンクの花柄が可愛いクラッチポーチ。太めの糸でざっくり編んだナチュラルな風合いが魅力です。",
        image: "/images/product-03.jpg",
        shopUrl: "#",
        badge: "新作",
    },
    {
        id: 4,
        name: "ミントグリーン クラッチバッグ",
        price: 2800,
        category: "バッグ",
        description:
            "爽やかなミントグリーンの手編みクラッチバッグ。持ち手の切り込み入りで使いやすいデザインです。",
        image: "/images/product-04.jpg",
        shopUrl: "#",
    },
];

export const categories = [...new Set(products.map((p) => p.category))];
