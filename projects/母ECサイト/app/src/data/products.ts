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
        name: "リネンのトートバッグ",
        price: 3500,
        category: "バッグ",
        description:
            "天然リネン100%のやさしい風合いのトートバッグ。日常使いにぴったりのサイズ感です。",
        image: "/images/product-01.jpg",
        shopUrl: "#",
        badge: "人気",
    },
    {
        id: 2,
        name: "コットンレースのポーチ",
        price: 1800,
        category: "ポーチ",
        description:
            "繊細なコットンレースをあしらった小ぶりなポーチ。化粧品や小物の整理に。",
        image: "/images/product-02.jpg",
        shopUrl: "#",
    },
    {
        id: 3,
        name: "刺繍のブックカバー",
        price: 2200,
        category: "雑貨",
        description:
            "小花の刺繍がかわいいブックカバー。文庫本サイズ。読書のお供にどうぞ。",
        image: "/images/product-03.jpg",
        shopUrl: "#",
        badge: "新作",
    },
    {
        id: 4,
        name: "ナチュラルリースの壁飾り",
        price: 4200,
        category: "インテリア",
        description:
            "ドライフラワーとプリザーブドフラワーを使ったナチュラルリース。お部屋を優しく彩ります。",
        image: "/images/product-04.jpg",
        shopUrl: "#",
    },
    {
        id: 5,
        name: "手編みのコースター（4枚セット）",
        price: 1500,
        category: "雑貨",
        description:
            "コットン糸で一枚一枚手編みしたコースター。食卓をやさしい雰囲気に。",
        image: "/images/product-05.jpg",
        shopUrl: "#",
    },
    {
        id: 6,
        name: "リバティ柄のがま口財布",
        price: 2800,
        category: "ポーチ",
        description:
            "リバティプリントの生地を使ったがま口財布。小銭やカードの収納に便利です。",
        image: "/images/product-06.jpg",
        shopUrl: "#",
    },
];

export const categories = [...new Set(products.map((p) => p.category))];
