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

export const categoryTranslations: Record<ProductCategory, string> = {
  schnullerketten: 'Schnullerketten',
  beissketten: 'Beißketten',
  kinderwagenketten: 'Kinderwagenketten',
  schlüsselanhänger: 'Schlüsselanhänger',
  babysocken: 'Babysocken',
  mützen: 'Mützen',
}

export const products: Product[] = [
  {
    id: 'schnullerkette-1',
    name: 'Maus Blue',
    price: 19.9,
    description:
      'Nie wieder Schnuller suchen – mit unserer handgemachten, personalisierten Schnullerkette geht kein Schnuller mehr verloren. Die BPA-freie Schnullerkette besteht aus einem Holzclip mit Metallverschluss sowie aus bunten Holz-, Silikon- und Häkelperlen. Der Silikonring am Ende dient zur Befestigung des Schnullers. Geeignet ab 0 Jahren und nach individuellen Wünschen verfügbar.',
    category: 'schnullerketten',
    publicId: ['fynlyTest/secondary', 'fynlyTest/main', 'fynlyTest/third'],
    featured: true,
    inStock: true,
    quantity: 1,
    technicalDetails:
      'Die Materialien bestehen aus 100% Silikon, 100% Holz und 100% Baumwolle (gemäß DIN EN 71-3). Die Anfertigung erfolgt mit hoher Sorgfalt unter Beachtung der gesetzlichen Vorschriften. Es werden ausschließlich qualitativ hochwertige Materialien aus Deutschland verwendet, die lutsch-/speichelfest und schadstofffrei sind. Der nickelfreie Clip ist mit 3 Ventilationslöchern ausgestattet, um eine Erstickungsgefahr zu reduzieren. Die Länge der Schnullerkette beträgt max. 22 cm (ab Clip), da sonst Strangulationsgefahr besteht. Warnhinweis: Kontrolliere die Schnullerkette vor jedem Gebrauch. Wirf sie bei ersten Anzeichen von Beschädigungen weg. Befestige die Schnullerkette niemals an Schnüren, Bändern, Trägern oder losen Teilen der Kleidung.',
  },
  {
    id: 'schnullerkette-2',
    name: 'Flower Ivory',
    price: 16.9,
    description:
      'Nie wieder Schnuller suchen – mit unserer handgemachten, personalisierten Schnullerkette geht kein Schnuller mehr verloren. Die BPA-freie Schnullerkette besteht aus einem Holzclip mit Metallverschluss sowie aus bunten Holz-, Silikon- und Häkelperlen. Der Silikonring am Ende dient zur Befestigung des Schnullers. Geeignet ab 0 Jahren und nach individuellen Wünschen verfügbar.',
    category: 'schnullerketten',
    publicId: ['fynlyTest/secondary', 'fynlyTest/main', 'fynlyTest/third'],
    inStock: true,
    quantity: 1,
    technicalDetails:
      'Die Materialien bestehen aus 100% Silikon, 100% Holz und 100% Baumwolle (gemäß DIN EN 71-3). Herstellung und Sicherheit wie oben beschrieben.',
  },
  {
    id: 'schnullerkette-3',
    name: 'Daisy Pink Dust',
    price: 19.9,
    description:
      'Nie wieder Schnuller suchen – handgemachte, personalisierte Schnullerkette mit Holzclip und Holz-, Silikon- sowie Häkelperlen. Geeignet ab 0 Jahren.',
    category: 'schnullerketten',
    publicId: ['fynlyTest/secondary', 'fynlyTest/main', 'fynlyTest/third'],
    inStock: true,
    quantity: 1,
    technicalDetails:
      'Materialien: 100% Silikon, 100% Holz, 100% Baumwolle (DIN EN 71-3). Länge max. 22 cm. Warnhinweise wie oben.',
  },
  {
    id: 'schnullerkette-4',
    name: 'Daisy Soft Brown',
    price: 19.9,
    description:
      'Nie wieder Schnuller suchen – handgemachte, personalisierte Schnullerkette.',
    category: 'schnullerketten',
    publicId: ['fynlyTest/secondary', 'fynlyTest/main', 'fynlyTest/third'],
    featured: true,
    inStock: true,
    quantity: 1,
    technicalDetails: 'Materialien und Warnhinweise wie oben.',
  },
  {
    id: 'schnullerkette-5',
    name: 'Daisy Butter Yellow',
    price: 19.9,
    description:
      'Nie wieder Schnuller suchen – handgemachte, personalisierte Schnullerkette.',
    category: 'schnullerketten',
    publicId: ['fynlyTest/secondary', 'fynlyTest/main', 'fynlyTest/third'],
    inStock: true,
    quantity: 1,
    technicalDetails: 'Materialien und Warnhinweise wie oben.',
  },
  {
    id: 'schlüsselanhänger-1',
    name: 'MOM',
    price: 7.99,
    description:
      'Dieser handgefertigte Schlüsselanhänger ist nicht nur eine emotionale Überraschung, sondern auch eine bleibende Erinnerung für alle Mamas. Ob am Schlüsselbund oder an der Handtasche – ein besonderes Stück, das dich begleitet.',
    category: 'schlüsselanhänger',
    publicId: ['fynlyTest/secondary', 'fynlyTest/main', 'fynlyTest/third'],
    inStock: true,
    quantity: 1,
    technicalDetails:
      'Materialien: hochwertiges Holz, Silikon- und Häkelperlen sowie ein Karabiner aus Edelstahl.',
  },
  {
    id: 'schlüsselanhänger-2',
    name: 'Patentante Rose',
    price: 7.99,
    description:
      'Manche Fragen sind so besonders, dass sie ein einzigartiges Geschenk verdienen. Mit unserem liebevoll gestalteten Schlüsselanhänger kannst du wunderschön fragen: „Willst du meine Patentante werden?“',
    category: 'schlüsselanhänger',
    publicId: ['fynlyTest/secondary', 'fynlyTest/main', 'fynlyTest/third'],
    featured: true,
    inStock: true,
    quantity: 1,
    technicalDetails:
      'Materialien: hochwertiges Holz, Silikon- und Häkelperlen sowie ein Karabiner aus Edelstahl.',
  },
  {
    id: 'schlüsselanhänger-3',
    name: 'Patentante Blue',
    price: 7.99,
    description:
      'Liebevoll gestalteter Schlüsselanhänger – „Willst du meine Patentante werden?“',
    category: 'schlüsselanhänger',
    publicId: ['fynlyTest/secondary', 'fynlyTest/main', 'fynlyTest/third'],
    featured: true,
    inStock: true,
    quantity: 1,
    technicalDetails:
      'Materialien: hochwertiges Holz, Silikon- und Häkelperlen sowie ein Karabiner aus Edelstahl.',
  },
  {
    id: 'schlüsselanhänger-4',
    name: 'Patentante Green',
    price: 7.99,
    description:
      'Liebevoll gestalteter Schlüsselanhänger – „Willst du meine Patentante werden?“',
    category: 'schlüsselanhänger',
    publicId: ['fynlyTest/secondary', 'fynlyTest/main', 'fynlyTest/third'],
    inStock: true,
    quantity: 1,
    technicalDetails:
      'Materialien: hochwertiges Holz, Silikon- und Häkelperlen sowie ein Karabiner aus Edelstahl.',
  },
]

export const getFeaturedProducts = () => products.filter(p => p.featured)

export const getProductsByCategory = (category: ProductCategory) =>
  products.filter(p => p.category === category)

export const getProductById = (id: string) => products.find(p => p.id === id)

export const getAllCategories = (): ProductCategory[] => [
  'schnullerketten',
  'beissketten',
  'kinderwagenketten',
  'schlüsselanhänger',
  'babysocken',
  'mützen',
]
