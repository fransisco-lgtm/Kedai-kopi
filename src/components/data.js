import espressoImg from "../assets/espresso.png";
import americanoImg from "../assets/americano.png";
import cappucinoImg from "../assets/cappucino.png";
import icedLatteImg from "../assets/iced latte.png";
import kopiSusuImg from "../assets/kopi susu.png";
import matchaImg from "../assets/matcha latte.png";
import chocoImg from "../assets/chocolate.png";
import croissantImg from "../assets/Croissant.png";

export const WA_NUMBER = "6281234567890"; // optional, boleh tetap

export const MENU_ITEMS = [
  // ☕ COFFEE
  {
    id: "espresso",
    name: "Espresso",
    price: 15000,
    note: "Pekat, strong, dan bikin melek.",
    category: "coffee",
    image: espressoImg,
  },
  {
    id: "americano",
    name: "Americano",
    price: 18000,
    note: "Clean & ringan, cocok buat kerja.",
    category: "coffee",
    image: americanoImg,
  },
  {
    id: "cappuccino",
    name: "Cappuccino",
    price: 22000,
    note: "Foam tebal, creamy, wangi.",
    category: "coffee",
    image: cappucinoImg,
  },
  {
    id: "latte",
    name: "Iced Latte",
    price: 25000,
    note: "Smooth & refreshing, favorit banyak orang.",
    category: "coffee",
    image: icedLatteImg,
  },
  {
    id: "kopi-susu",
    name: "Kopi Susu",
    price: 22000,
    note: "Kopi + susu creamy, manis pas, favorit semua orang.",
    category: "coffee",
    image: kopiSusuImg,
  },

  // 🧋 NON-COFFEE
  {
    id: "matcha",
    name: "Matcha Latte",
    price: 24000,
    note: "Creamy matcha, cocok buat yang nggak minum kopi.",
    category: "non-coffee",
    image: matchaImg,
  },
  {
    id: "choco",
    name: "Chocolate",
    price: 23000,
    note: "Coklat rich & manis, favorit semua umur.",
    category: "non-coffee",
    image: chocoImg,
  },

  // 🍰 FOOD
  {
    id: "croissant",
    name: "Croissant",
    price: 20000,
    note: "Flaky & buttery, cocok buat temen ngopi.",
    category: "food",
    image: croissantImg,
  },
];

export function rupiah(n) {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
  }).format(n);
}

export function buildWaLink(message) {
  const text = encodeURIComponent(message);
  return `https://wa.me/${WA_NUMBER}?text=${text}`;
}