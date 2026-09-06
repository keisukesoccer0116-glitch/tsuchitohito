export type Product = {
  id: string;
  name: string;
  price: number;
  origin: string;
  category: string;
  description: string;
  maxQuantity?: number;
  images: string[];

  // 商品仕様
  size: string;

  // 使用可否
  oven: boolean;
  microwave: boolean;
  dishwasher: boolean;
  directFire: boolean;
};

export const products: Product[] = [
  {
    id: "soup-001",
    name: "スープカップ",
    price: 2200,
    origin: "益子焼（山口慶祐）",
    category: "湯呑・カップ",
    description:
      "ご家庭でたっぷり入れられるように少し大きめに作っております。飴色にはコーンスープが合いそうです。もちろんどんなスープも受け止められます",
    maxQuantity: 2,

    size: "直径12.5cm × 高さ6cm",
    oven: false,
    microwave: true,
    dishwasher: true,
    directFire: false,

    images: [
      "/products/soup-001.jpg",
      "/products/soup-001-1.jpg",
      "/products/soup-001-2.jpg",
      "/products/soup-001-3.jpg",
      "/products/soup-001-4.jpg",
    ],
  },

  {
    id: "rockcup-001",
    name: "ロックカップ・湯呑（黒）",
    price: 2200,
    origin: "益子焼（山口慶祐）",
    category: "湯呑・カップ",
    description:
      "小さめのカップです。暖かいものでも冷たいものでも色々なシーンで利用できます。",
    maxQuantity: 5,

    size: "直径9cm × 高さ6.5cm",
    oven: false,
    microwave: true,
    dishwasher: true,
    directFire: false,

    images: [
      "/products/rockcup-001.jpg",
      "/products/rockcup-001-1.jpg",
      "/products/rockcup-001-2.jpg",
      "/products/rockcup-001-4.jpg",
    ],
  },

  {
    id: "rockcupwhite-001",
    name: "ロックカップ・湯呑（白）",
    price: 2200,
    origin: "益子焼（山口慶祐）",
    category: "湯呑・カップ",
    description:
      "小さめのカップです。暖かいものでも冷たいものでも色々なシーンで利用できます。",
    maxQuantity: 5,

    size: "直径9cm × 高さ6.5cm",
    oven: false,
    microwave: true,
    dishwasher: true,
    directFire: false,

    images: [
      "/products/rockcupwhite-001.jpg",
      "/products/rockcupwhite-001-1.jpg",
      "/products/rockcupwhite-001-2.jpg",
      "/products/rockcupwhite-001-4.jpg",
    ],
  },

  {
    id: "meshiwan-flat-001",
    name: "飯碗（平形）",
    price: 2200,
    origin: "益子焼（山口慶祐）",
    category: "飯碗・丼",
    description:
      "白いごはんが引き立つ黒釉。開いた形は、卵かけごはんが食べやすい。また他にも何かを盛れるように少し大きめの飯碗です。",
    maxQuantity: 7,

    size: "直径15.5cm × 高さ6.5cm",
    oven: true,
    microwave: true,
    dishwasher: true,
    directFire: false,

    images: [
      "/products/meshiwan-flat-001.jpg",
      "/products/meshiwan-flat-001-1.jpg",
      "/products/meshiwan-flat-001-2.jpg",
      "/products/meshiwan-flat-001-3.jpg",
      "/products/meshiwan-flat-001-4.jpg",
    ],
  },

  {
    id: "meshiwan-bowl-001",
    name: "飯碗（椀形）",
    price: 2000,
    origin: "益子焼（山口慶祐）",
    category: "飯碗・丼",
    description:
      "おわん型の飯碗、小さめのサイズが好みの方へ",
    maxQuantity: 10,

    size: "直径11.5cm × 高さ5.5cm",
    oven: true,
    microwave: true,
    dishwasher: true,
    directFire: false,

    images: [
      "/products/meshiwan-bowl-001.jpg",
      "/products/meshiwan-bowl-001-1.jpg",
      "/products/meshiwan-bowl-001-2.jpg",
      "/products/meshiwan-bowl-001-3.jpg",
      "/products/meshiwan-bowl-001-4.jpg",
    ],
  },

  {
    id: "nandemo-a-001",
    name: "中皿",
    price: 2800,
    origin: "益子焼（山口慶祐）",
    category: "飯碗・丼",
    description:
      "何でも乗せられる器を目指しました。洗い物を減らしたい朝ごはんやお昼ごはん、サッと済ませたいときにも重宝します。",
    maxQuantity: 4,

    size: "直径18cm × 高さ6.5cm",
    oven: true,
    microwave: true,
    dishwasher: true,
    directFire: false,

    images: [
      "/products/nandemo-a-001.jpg",
      "/products/nandemo-a-001-1.jpg",
      "/products/nandemo-a-001-2.jpg",
      "/products/nandemo-a-001-3.jpg",
      "/products/nandemo-a-001-4.jpg",
    ],
  },

  {
    id: "ramen-001",
    name: "どんぶり",
    price: 3300,
    origin: "益子焼（山口慶祐）",
    category: "飯碗・丼",
    description:
      "ご家庭で作るインスタントラーメンもこの器で満足感たっぷり。もちろん、かつ丼・牛丼・親子丼などごはんものも合います。",
    maxQuantity: 2,

    size: "直径19.5cm × 高さ8cm",
    oven: true,
    microwave: true,
    dishwasher: true,
    directFire: false,

    images: [
      "/products/ramen-001.jpg",
      "/products/ramen-001-1.jpg",
      "/products/ramen-001-2.jpg",
      "/products/ramen-001-3.jpg",
      "/products/ramen-001-4.jpg",
    ],
  },

  {
    id: "square-small-001",
    name: "角皿（小）",
    price: 1100,
    origin: "益子焼（山口慶祐）",
    category: "皿・プレート",
    description:
      "お漬物やちょっとしたものを盛るときに重宝します。",
    maxQuantity: 6,

    size: "約9cm × 6.5cm × 高さ2.5cm",
    oven: true,
    microwave: true,
    dishwasher: true,
    directFire: false,

    images: [
      "/products/square-small-001.jpg",
      "/products/square-small-001-1.jpg",
      "/products/square-small-001-2.jpg",
      "/products/square-small-001-3.jpg",
    ],
  },

  {
    id: "square-medium-001",
    name: "角皿",
    price: 2500,
    origin: "益子焼（山口慶祐）",
    category: "皿・プレート",
    description:
      "切り身魚やカプレーゼなど趣向を変えてたまには長方形の器を。",
    maxQuantity: 5,

    size: "約21cm × 12cm × 高さ2.5cm",
    oven: true,
    microwave: true,
    dishwasher: true,
    directFire: false,

    images: [
      "/products/square-medium-001.jpg",
      "/products/square-medium-001-1.jpg",
      "/products/square-medium-001-2.jpg",
      "/products/square-medium-001-3.jpg",
      "/products/square-medium-001-4.jpg",
    ],
  },

  {
    id: "plate-medium-001",
    name: "取り皿",
    price: 2200,
    origin: "益子焼（山口慶祐）",
    category: "皿・プレート",
    description:
      "料理を取り分けるのはもちろん、前菜やお菓子を盛る一皿としても使いやすいサイズ。",
    maxQuantity: 4,

    size: "直径21cm × 高さ3.5cm",
    oven: true,
    microwave: true,
    dishwasher: true,
    directFire: false,

    images: [
      "/products/plate-medium-001.jpg",
      "/products/plate-medium-001-1.jpg",
      "/products/plate-medium-001-2.jpg",
      "/products/plate-medium-001-3.jpg",
      "/products/plate-medium-001-4.jpg",
    ],
  },

{
    id: "pasta-001",
    name: "パスタ皿・カレー皿",
    price: 3800,
    origin: "益子焼（山口慶祐）",
    category: "鉢・ボウル",
    description:
      "パスタやカレーなどのメイン料理とともに。煮物などシェア料理にも。",
    maxQuantity: 2,

    size: "直径23.5cm × 高さ5.5cm",
    oven: true,
    microwave: true,
    dishwasher: true,
    directFire: false,

    images: [
      "/products/pasta-001.jpg",
      "/products/pasta-001-1.jpg",
      "/products/pasta-001-2.jpg",
      "/products/pasta-001-4.jpg",
    ],
  },

  {
    id: "plate-large-001",
    name: "大皿（リム皿）",
    price: 3800,
    origin: "益子焼（山口慶祐）",
    category: "皿・プレート",
    description:
      "メイン料理、ワンプレート料理、何かをシェアする時の大皿としても重宝します。",
    maxQuantity: 3,

    size: "直径27cm × 高さ2cm",
    oven: true,
    microwave: true,
    dishwasher: true,
    directFire: false,

    images: [
      "/products/plate-large-001.jpg",
      "/products/plate-large-001-1.jpg",
      "/products/plate-large-001-2.jpg",
      "/products/plate-large-001-4.jpg",
    ],
  },

  {
    id: "bowl-small-001",
    name: "ボウル",
    price: 2200,
    origin: "益子焼（山口慶祐）",
    category: "鉢・ボウル",
    description:
      "ほどよい深さがあり、サラダや煮物、アサイーなど幅広い料理に使えるボウル。",
    maxQuantity: 6,

    size: "直径14.5cm × 高さ6.5cm",
    oven: false,
    microwave: true,
    dishwasher: true,
    directFire: false,

    images: [
      "/products/bowl-small-001.jpg",
      "/products/bowl-small-001-1.jpg",
      "/products/bowl-small-001-2.jpg",
      "/products/bowl-small-001-3.jpg",
      "/products/bowl-small-001-4.jpg",
    ],
  },

  {
    id: "gratin-black-001",
    name: "グラタン皿",
    price: 2800,
    origin: "益子焼（山口慶祐）",
    category: "鉢・ボウル",
    description:
      "オーブン料理をそのまま食卓へ運べるグラタン皿。グラタンやドリアはもちろん、焼き野菜やオーブン料理にも。熱々の料理と器の表情を一緒に楽しめます。",
    maxQuantity: 7,

    size: "直径14cm × 高さ5.5cm",
    oven: true,
    microwave: true,
    dishwasher: true,
    directFire: false,

    images: [
      "/products/gratin-black-001.jpg",
      "/products/gratin-black-001-1.jpg",
      "/products/gratin-black-001-2.jpg",
      "/products/gratin-black-001-3.jpg",
      "/products/gratin-black-001-4.jpg",
    ],
  },

  {
    id: "choko-a-001",
    name: "おちょこ（黒色）",
    price: 1500,
    origin: "益子焼（山口慶祐）",
    category: "その他",
    description:
      "日本酒もさらに美味しく味わえます",
    maxQuantity: 2,

    size: "直径10cm × 高さ4cm",
    oven: false,
    microwave: true,
    dishwasher: true,
    directFire: false,

    images: [
      "/products/choko-a-001.jpg",
      "/products/choko-a-001-1.jpg",
      "/products/choko-a-001-2.jpg",
    ],
  },

{
  id: "choko-b-001",
    name: "おちょこ（翡翠色）",
    price: 2200,
    origin: "益子焼（山口慶祐）",
    category: "その他",
    description:
      "日本酒もさらに美味しく味わえます",
    maxQuantity: 3,

    size: "直径10cm × 高さ4cm",
    oven: false,
    microwave: true,
    dishwasher: true,
    directFire: false,

    images: [
      "/products/choko-b-001.jpg",
      "/products/choko-b-001-1.jpg",
      "/products/choko-b-001-2.jpg",
    ],
  },

  {
  id: "katakuchi-a-001",
    name: "片口",
    price: 2800,
    origin: "益子焼（山口慶祐）",
    category: "その他",
    description:
      "日本酒は、酒瓶から注ぐより片口から注ぐと気持ちが高まります。もちろんオリジナルのドレッシングを注ぐ時にも重宝します。",
    maxQuantity: 1,

    size: "15cm × 11cm  × 高さ7.5cm",
    oven: false,
    microwave: true,
    dishwasher: true,
    directFire: false,

    images: [
      "/products/katakuchi-a-001.jpg",
      "/products/katakuchi-a-001-1.jpg",
      "/products/katakuchi-a-001-2.jpg",
    ],
  },

  {
    id: "flower-small-a-001",
    name: "一輪挿し（飴色）",
    price: 2400,
    origin: "益子焼（山口慶祐）",
    category: "花器",
    description:
      "一輪の草花をそっと受け止める小さな花器。何も入れずにオブジェとしても置ける渋可愛いを目指しました。",
    maxQuantity: 1,

    size: "最大直径9cm × 高さ13cm",
    oven: false,
    microwave: true,
    dishwasher: true,
    directFire: false,

    images: [
      "/products/flower-small-a-001.jpg",
      "/products/flower-small-a-001-1.jpg",
      "/products/flower-small-a-001-2.jpg",
    ],
  },

  {
    id: "flower-small-b-001",
    name: "一輪挿し（瑠璃色）",
    price: 2400,
    origin: "益子焼（山口慶祐）",
    category: "花器",
    description:
      "一輪の草花をそっと受け止める小さな花器。何も入れずにオブジェとしても置ける渋可愛いを目指しました。",
    maxQuantity: 1,

    size: "最大直径9cm × 高さ13cm",
    oven: false,
    microwave: true,
    dishwasher: true,
    directFire: false,

    images: [
      "/products/flower-small-b-001.jpg",
      "/products/flower-small-b-001-1.jpg",
      "/products/flower-small-b-001-2.jpg",
    ],
  },
  {
    id: "flower-small-c-001",
    name: "一輪挿し",
    price: 2400,
    origin: "益子焼（山口慶祐）",
    category: "花器",
    description:
      "一輪の草花をそっと受け止める小さな花器。何も入れずにオブジェとしても良いです。",
    maxQuantity: 3,

    size: "最大直径7cm × 高さ14cm",
    oven: false,
    microwave: true,
    dishwasher: true,
    directFire: false,

    images: [
      "/products/flower-small-c-001.jpg",
      "/products/flower-small-c-001-1.jpg",
      "/products/flower-small-c-001-2.jpg",
    ],
  },
];