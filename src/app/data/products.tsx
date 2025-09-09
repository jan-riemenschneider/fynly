export type ProductCategory =
  | 'schnullerketten'
  | 'beissketten'
  | 'kinderwagenketten'
  | 'schlüsselanhänger'
  | 'babysocken'
  | 'mützen'

export interface Product {
  id: string
  name: string
  price: number
  description: string
  category: ProductCategory
  publicId: string[]
  featured?: boolean
  inStock: boolean
  quantity: number
  technicalDetails: string
}

export const categoryTranslations = {
  schnullerketten: 'Schnullerketten',
  beissketten: 'Beißketten',
  kinderwagenketten: 'Kinderwagenketten',
}

export const products: Product[] = [
  {
    id: 'schnullerkette-1',
    name: 'Rosalie Schnullerkette',
    price: 14.99,
    description:
      'Handgefertigte Schnullerkette in sanften Rosatönen mit kindersicheren Holzperlen. Perfekt für Ihr Baby.',
    category: 'schnullerketten',
    publicId: ['fynlyTest/secondary', 'fynlyTest/main', 'fynlyTest/third'],
    featured: true,
    inStock: true,
    quantity: 1,
    technicalDetails: '',
  },
  {
    id: 'schnullerkette-2',
    name: 'Himmelblau Schnullerkette',
    price: 15.99,
    description:
      'Handgefertigte Schnullerkette in Blautönen mit kindersicheren Holzperlen. Ideal für kleine Jungs.',
    category: 'schnullerketten',
    publicId: ['fynlyTest/secondary', 'fynlyTest/main', 'fynlyTest/third'],
    inStock: true,
    quantity: 1,
    technicalDetails: '',
  },
  {
    id: 'schnullerkette-3',
    name: 'Waldfreunde Schnullerkette',
    price: 16.99,
    description:
      'Handgefertigte Schnullerkette mit niedlichen Tiermotiven und verschiedenen Holzperlen.',
    category: 'schnullerketten',
    publicId: ['fynlyTest/secondary', 'fynlyTest/main', 'fynlyTest/third'],
    inStock: true,
    quantity: 1,
    technicalDetails: '',
  },
  {
    id: 'beisskette-1',
    name: 'Wolke Beißkette',
    price: 12.99,
    description:
      'Sanfte Beißkette mit Wolkenmotiv, sicher für Babys Zahnungsphase und aus lebensmittelechtem Silikon.',
    category: 'beissketten',
    publicId: ['fynlyTest/secondary', 'fynlyTest/main', 'fynlyTest/third'],
    featured: true,
    inStock: true,
    quantity: 1,
    technicalDetails: '',
  },
  {
    id: 'beisskette-2',
    name: 'Regenbogen Beißkette',
    price: 13.99,
    description:
      'Farbenfrohe Beißkette mit Regenbogenmotiv, aus lebensmittelechtem Silikon für empfindliches Zahnfleisch.',
    category: 'beissketten',
    publicId: ['fynlyTest/secondary', 'fynlyTest/main', 'fynlyTest/third'],
    inStock: true,
    quantity: 1,
    technicalDetails: '',
  },
  {
    id: 'kinderwagenkette-1',
    name: 'Sternenstaub Kinderwagenkette',
    price: 18.99,
    description:
      'Bezaubernde Kinderwagenkette mit Sternen- und Mondmotiven, handgefertigt für unterwegs.',
    category: 'kinderwagenketten',
    publicId: ['fynlyTest/secondary', 'fynlyTest/main', 'fynlyTest/third'],
    featured: true,
    inStock: true,
    quantity: 1,
    technicalDetails: '',
  },
  {
    id: 'kinderwagenkette-2',
    name: 'Safari Kinderwagenkette',
    price: 19.99,
    description:
      'Abenteuerliche Kinderwagenkette mit niedlichen Tiermotiven für kleine Entdecker.',
    category: 'kinderwagenketten',
    publicId: ['fynlyTest/secondary', 'fynlyTest/main', 'fynlyTest/third'],
    inStock: true,
    quantity: 1,
    technicalDetails: '',
  },
  {
    id: 'schluesselanhaenger-1',
    name: 'Glückspilz Schlüsselanhänger',
    price: 8.99,
    description:
      'Süßer handgefertigter Schlüsselanhänger mit Pilzmotiv, der perfekte Glücksbringer.',
    category: 'schlüsselanhänger',
    publicId: ['fynlyTest/secondary', 'fynlyTest/main', 'fynlyTest/third'],
    inStock: true,
    quantity: 1,
    technicalDetails: '',
  },
  {
    id: 'schluesselanhaenger-2',
    name: 'Herzensfreude Schlüsselanhänger',
    price: 7.99,
    description:
      'Liebevoller Schlüsselanhänger mit Herzmotiv, ein perfektes Geschenk für jeden Anlass.',
    category: 'schlüsselanhänger',
    publicId: ['fynlyTest/secondary', 'fynlyTest/main', 'fynlyTest/third'],
    featured: true,
    inStock: true,
    quantity: 1,
    technicalDetails: '',
  },
  {
    id: 'babysocke-1',
    name: 'Kuschelsocken Mini',
    price: 9.99,
    description:
      'Handgestrickte Babysocken aus weicher Merinowolle, warm und komfortabel für kleine Füße.',
    category: 'babysocken',
    publicId: ['fynlyTest/secondary', 'fynlyTest/main', 'fynlyTest/third'],
    featured: true,
    inStock: true,
    quantity: 1,
    technicalDetails: '',
  },
  {
    id: 'babysocke-2',
    name: 'Streifensocken Baby',
    price: 8.99,
    description:
      'Handgestrickte Streifensocken für Babys aus hautfreundlicher Baumwolle.',
    category: 'babysocken',
    publicId: ['fynlyTest/secondary', 'fynlyTest/main', 'fynlyTest/third'],
    inStock: true,
    quantity: 1,
    technicalDetails: '',
  },
  {
    id: 'muetze-1',
    name: 'Bärenohren Mütze',
    price: 16.99,
    description:
      'Handgestrickte Babymütze mit niedlichen Bärenohren aus weicher Merinowolle.',
    category: 'mützen',
    publicId: ['fynlyTest/secondary', 'fynlyTest/main', 'fynlyTest/third'],
    featured: true,
    inStock: true,
    quantity: 1,
    technicalDetails: '',
  },
  {
    id: 'muetze-2',
    name: 'Zipfelmütze Zauberer',
    price: 15.99,
    description:
      'Handgestrickte Zipfelmütze für Babys und Kleinkinder, warm und niedlich zugleich.',
    category: 'mützen',
    publicId: ['fynlyTest/secondary', 'fynlyTest/main', 'fynlyTest/third'],
    inStock: true,
    quantity: 1,
    technicalDetails: '',
  },
]

export const getFeaturedProducts = () =>
  products.filter(product => product.featured)

export const getProductsByCategory = (category: ProductCategory) =>
  products.filter(product => product.category === category)

export const getProductById = (id: string) =>
  products.find(product => product.id === id)

export const getAllCategories = (): ProductCategory[] => [
  'schnullerketten',
  'beissketten',
  'kinderwagenketten',
  'schlüsselanhänger',
  'babysocken',
  'mützen',
]
