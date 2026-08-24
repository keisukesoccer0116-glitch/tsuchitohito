export type Product = {
  id: string;
  name: string;
  price: number;
  origin: string;
  category: string;
  maxQuantity?: number;
  images: string[];
};

export const products: Product[] = [
  {
    id: "soup-001",
    name: "スープカップ",
    price: 2200,
    origin: "益子焼（山口慶祐）",
    category: "湯呑・カップ",
    maxQuantity: 2,
    images: [
      "/products/soup-001.jpg",
      "/products/soup-001-1.jpg",
      "/products/soup-001-2.jpg",
      "/products/soup-001-3.jpg",
      "/products/soup-001-4.jpg",
    ],
  },

  {
    id: "meshiwan-flat-001",
    name: "飯碗",
    price: 2200,
    origin: "益子焼（山口慶祐）",
    category: "飯碗・丼",
    maxQuantity: 4,
    images: [
      "/products/meshiwan-flat-001.jpg",
      "/products/meshiwan-flat-001-1.jpg",
      "/products/meshiwan-flat-001-2.jpg",
      "/products/meshiwan-flat-001-3.jpg",
      "/products/meshiwan-flat-001-4.jpg",
    ],
  },

  {
    id: "ramen-001",
    name: "ラーメンどんぶり",
    price: 3300,
    origin: "益子焼（山口慶祐）",
    category: "飯碗・丼",
    maxQuantity: 2,
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
    maxQuantity: 6,
    images: [
      "/products/square-smal-001.jpg",
      "/products/square-smal-001-1.jpg",
      "/products/square-smal-001-2.jpg",
      "/products/square-smal-001-3.jpg",
    ],
  },

  {
    id: "square-medium-001",
    name: "角皿",
    price: 2500,
    origin: "益子焼（山口慶祐）",
    category: "皿・プレート",
    maxQuantity: 5,
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
    maxQuantity: 4,
    images: [
      "/products/plate-medium-001.jpg",
      "/products/plate-medium-001-1.jpg",
      "/products/plate-medium-001-2.jpg",
      "/products/plate-medium-001-3.jpg",
      "/products/plate-medium-001-4.jpg",
    ],
  },

  {
    id: "plate-large-001",
    name: "大皿（リム皿）",
    price: 3800,
    origin: "益子焼（山口慶祐）",
    category: "皿・プレート",
    maxQuantity: 3,
    images: [
      "/products/plate-large-001.jpg",
      "/products/plate-large-001-1.jpg",
      "/products/plate-large-001-2.jpg",
      "/products/plate-large-001-3.jpg",
      "/products/plate-large-001-4.jpg",
    ],
  },

  {
    id: "bowl-small-001",
    name: "ボウル",
    price: 2200,
    origin: "益子焼（山口慶祐）",
    category: "鉢・ボウル",
    maxQuantity: 6,
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
    maxQuantity: 7,
    images: [
      "/products/gratin-black-001.jpg",
      "/products/gratin-black-001-1.jpg",
      "/products/gratin-black-001-2.jpg",
      "/products/gratin-black-001-3.jpg",
      "/products/gratin-black-001-4.jpg",
    ],
  },

  {
    id: "flower-small-a-001",
    name: "一輪挿し（飴色）",
    price: 2400,
    origin: "益子焼（山口慶祐）",
    category: "花器",
    maxQuantity: 1,
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
    maxQuantity: 1,
    images: [
      "/products/flower-small-b-001.jpg",
      "/products/flower-small-b-001-1.jpg",
      "/products/flower-small-b-001-2.jpg",
    ],
  },
];