export type ProductCategory =
  | "schnullerketten"
  | "beissketten"
  | "kinderwagenketten"
  | "schlüsselanhänger"
  | "babysocken"
  | "mützen";

export interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  category: ProductCategory;
  images: string[];
  featured?: boolean;
  colors: string[];
  inStock: boolean;
}

export const categoryTranslations = {
  schnullerketten: "Schnullerketten",
  beissketten: "Beißketten",
  kinderwagenketten: "Kinderwagenketten",
  schlüsselanhänger: "Schlüsselanhänger",
  babysocken: "Babysocken",
  mützen: "Mützen",
};

export const products: Product[] = [
  {
    id: "schnullerkette-1",
    name: "Rosalie Schnullerkette",
    price: 14.99,
    description:
      "Handgefertigte Schnullerkette in sanften Rosatönen mit kindersicheren Holzperlen. Perfekt für Ihr Baby.",
    category: "schnullerketten",
    images: ["/placeholder.svg"],
    featured: true,
    colors: ["Rosa", "Weiß"],
    inStock: true,
  },
  {
    id: "schnullerkette-2",
    name: "Himmelblau Schnullerkette",
    price: 15.99,
    description:
      "Handgefertigte Schnullerkette in Blautönen mit kindersicheren Holzperlen. Ideal für kleine Jungs.",
    category: "schnullerketten",
    images: ["/placeholder.svg"],
    colors: ["Blau", "Weiß"],
    inStock: true,
  },
  {
    id: "schnullerkette-3",
    name: "Waldfreunde Schnullerkette",
    price: 16.99,
    description:
      "Handgefertigte Schnullerkette mit niedlichen Tiermotiven und verschiedenen Holzperlen.",
    category: "schnullerketten",
    images: ["/placeholder.svg"],
    colors: ["Grün", "Braun"],
    inStock: true,
  },
  {
    id: "beisskette-1",
    name: "Wolke Beißkette",
    price: 12.99,
    description:
      "Sanfte Beißkette mit Wolkenmotiv, sicher für Babys Zahnungsphase und aus lebensmittelechtem Silikon.",
    category: "beissketten",
    images: ["/placeholder.svg"],
    featured: true,
    colors: ["Grau", "Weiß"],
    inStock: true,
  },
  {
    id: "beisskette-2",
    name: "Regenbogen Beißkette",
    price: 13.99,
    description:
      "Farbenfrohe Beißkette mit Regenbogenmotiv, aus lebensmittelechtem Silikon für empfindliches Zahnfleisch.",
    category: "beissketten",
    images: ["/placeholder.svg"],
    colors: ["Mehrfarbig"],
    inStock: true,
  },
  {
    id: "kinderwagenkette-1",
    name: "Sternenstaub Kinderwagenkette",
    price: 18.99,
    description:
      "Bezaubernde Kinderwagenkette mit Sternen- und Mondmotiven, handgefertigt für unterwegs.",
    category: "kinderwagenketten",
    images: ["/placeholder.svg"],
    featured: true,
    colors: ["Grau", "Weiß"],
    inStock: true,
  },
  {
    id: "kinderwagenkette-2",
    name: "Safari Kinderwagenkette",
    price: 19.99,
    description:
      "Abenteuerliche Kinderwagenkette mit niedlichen Tiermotiven für kleine Entdecker.",
    category: "kinderwagenketten",
    images: ["/placeholder.svg"],
    colors: ["Gelb", "Grün"],
    inStock: true,
  },
  {
    id: "schlüsselanhänger-1",
    name: "Glückspilz Schlüsselanhänger",
    price: 8.99,
    description:
      "Süßer handgefertigter Schlüsselanhänger mit Pilzmotiv, der perfekte Glücksbringer.",
    category: "schlüsselanhänger",
    images: ["/placeholder.svg"],
    colors: ["Rot", "Weiß"],
    inStock: true,
  },
  {
    id: "schlüsselanhänger-2",
    name: "Herzensfreude Schlüsselanhänger",
    price: 7.99,
    description:
      "Liebevoller Schlüsselanhänger mit Herzmotiv, ein perfektes Geschenk für jeden Anlass.",
    category: "schlüsselanhänger",
    images: ["/placeholder.svg"],
    featured: true,
    colors: ["Pink", "Weiß"],
    inStock: true,
  },
  {
    id: "babysocke-1",
    name: "Kuschelsocken Mini",
    price: 9.99,
    description:
      "Handgestrickte Babysocken aus weicher Merinowolle, warm und komfortabel für kleine Füße.",
    category: "babysocken",
    images: ["/placeholder.svg"],
    featured: true,
    colors: ["Blau", "Rosa", "Gelb"],
    inStock: true,
  },
  {
    id: "babysocke-2",
    name: "Streifensocken Baby",
    price: 8.99,
    description:
      "Handgestrickte Streifensocken für Babys aus hautfreundlicher Baumwolle.",
    category: "babysocken",
    images: ["/placeholder.svg"],
    colors: ["Mehrfarbig"],
    inStock: true,
  },
  {
    id: "mütze-1",
    name: "Bärenohren Mütze",
    price: 16.99,
    description:
      "Handgestrickte Babymütze mit niedlichen Bärenohren aus weicher Merinowolle.",
    category: "mützen",
    images: ["/placeholder.svg"],
    featured: true,
    colors: ["Braun", "Beige"],
    inStock: true,
  },
  {
    id: "mütze-2",
    name: "Zipfelmütze Zauberer",
    price: 15.99,
    description:
      "Handgestrickte Zipfelmütze für Babys und Kleinkinder, warm und niedlich zugleich.",
    category: "mützen",
    images: ["/placeholder.svg"],
    colors: ["Blau", "Rot", "Grün"],
    inStock: true,
  },
];

export const getFeaturedProducts = () =>
  products.filter((product) => product.featured);

export const getProductsByCategory = (category: ProductCategory) =>
  products.filter((product) => product.category === category);

export const getProductById = (id: string) =>
  products.find((product) => product.id === id);

export const getAllCategories = (): ProductCategory[] => [
  "schnullerketten",
  "beissketten",
  "kinderwagenketten",
  "schlüsselanhänger",
  "babysocken",
  "mützen",
];
