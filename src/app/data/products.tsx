export type ProductCategory = 'schnullerketten' | 'schluesselanhaenger'

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
  schluesselanhaenger: 'Schlüsselanhänger',
}

export const products: Product[] = [
  {
    id: 'schnullerkette-1',
    name: 'Maus Blue',
    price: 19.9,
    description:
      'Nie wieder Schnuller suchen – mit unserer handgemachten personalisierten Schnullerkette geht kein Schnuller mehr verloren. Die BPA-freie Schnullerkette besteht aus einem Holzclip mit Metallverschluss sowie aus bunten Holz-, Silikon- und Häkelperlen. Der Silikonring am Ende dient zur Befestigung des Schnullers. Geeignet ist die Schnullerkette ab 0 Jahren und nach individuellen Wünschen verfügbar.',
    category: 'schnullerketten',
    publicId: ['fynlyTest/secondary', 'fynlyTest/main', 'fynlyTest/third'],
    featured: true,
    inStock: true,
    quantity: 1,
    technicalDetails:
      'Die Materialien bestehen immer aus 100% Silikon, 100% Holz und 100% Baumwolle (gem. DIN EN 71-3). Die Anfertigung der Schnullerkette erfolgt mit hoher Sorgfalt unter Beachtung der gesetzlichen Vorschriften. Es werden ausschließlich qualitativ hochwertige Materialien aus Deutschland verwendet, die lutsch- und speichelfest sowie völlig schadstofffrei sind. Die Schnullerkette kann vom Baby unbedenklich in den Mund genommen werden. Der nickelfreie Clip ist mit drei Ventilationslöchern ausgestattet, um eine Erstickungsgefahr zu reduzieren. Die Länge der Schnullerkette beträgt max. 22 cm (ab Clip), da sonst Strangulationsgefahr besteht. Warnhinweis: Kontrolliere die Schnullerkette vor jedem Gebrauch. Wirf die Schnullerkette bereits bei den ersten Anzeichen von Beschädigungen oder Mängeln weg. Befestige die Schnullerkette niemals an Schnüren, Bändern, Trägern oder losen Teilen der Kleidung, da sich dein Kind sonst erdrosseln kann.',
  },
  {
    id: 'schnullerkette-2',
    name: 'Flower Ivory',
    price: 16.9,
    description:
      'Nie wieder Schnuller suchen – mit unserer handgemachten personalisierten Schnullerkette geht kein Schnuller mehr verloren. Die BPA-freie Schnullerkette besteht aus einem Holzclip mit Metallverschluss sowie aus bunten Holz-, Silikon- und Häkelperlen. Der Silikonring am Ende dient zur Befestigung des Schnullers. Geeignet ist die Schnullerkette ab 0 Jahren und nach individuellen Wünschen verfügbar.',
    category: 'schnullerketten',
    publicId: ['fynlyTest/secondary', 'fynlyTest/main', 'fynlyTest/third'],
    inStock: true,
    quantity: 1,
    technicalDetails:
      'Die Materialien bestehen immer aus 100% Silikon, 100% Holz und 100% Baumwolle (gem. DIN EN 71-3). Die Anfertigung der Schnullerkette erfolgt mit hoher Sorgfalt unter Beachtung der gesetzlichen Vorschriften. Es werden ausschließlich qualitativ hochwertige Materialien aus Deutschland verwendet, die lutsch- und speichelfest sowie völlig schadstofffrei sind. Die Schnullerkette kann vom Baby unbedenklich in den Mund genommen werden. Der nickelfreie Clip ist mit drei Ventilationslöchern ausgestattet, um eine Erstickungsgefahr zu reduzieren. Die Länge der Schnullerkette beträgt max. 22 cm (ab Clip), da sonst Strangulationsgefahr besteht. Warnhinweis: Kontrolliere die Schnullerkette vor jedem Gebrauch. Wirf die Schnullerkette bereits bei den ersten Anzeichen von Beschädigungen oder Mängeln weg. Befestige die Schnullerkette niemals an Schnüren, Bändern, Trägern oder losen Teilen der Kleidung, da sich dein Kind sonst erdrosseln kann.',
  },
  {
    id: 'Schnullerkette-3',
    name: 'Daisy Pink Dust',
    price: 19.9,
    description:
      'Nie wieder Schnuller suchen – mit unserer handgemachten personalisierten Schnullerkette geht kein Schnuller mehr verloren. Die BPA-freie Schnullerkette besteht aus einem Holzclip mit Metallverschluss sowie aus bunten Holz-, Silikon- und Häkelperlen. Der Silikonring am Ende dient zur Befestigung des Schnullers. Geeignet ist die Schnullerkette ab 0 Jahren und nach individuellen Wünschen verfügbar.',
    category: 'schnullerketten',
    publicId: ['fynlyTest/secondary', 'fynlyTest/main', 'fynlyTest/third'],
    inStock: true,
    quantity: 1,
    technicalDetails:
      'Die Materialien bestehen immer aus 100% Silikon, 100% Holz und 100% Baumwolle (gem. DIN EN 71-3). Die Anfertigung der Schnullerkette erfolgt mit hoher Sorgfalt unter Beachtung der gesetzlichen Vorschriften. Es werden ausschließlich qualitativ hochwertige Materialien aus Deutschland verwendet, die lutsch- und speichelfest sowie völlig schadstofffrei sind. Die Schnullerkette kann vom Baby unbedenklich in den Mund genommen werden. Der nickelfreie Clip ist mit drei Ventilationslöchern ausgestattet, um eine Erstickungsgefahr zu reduzieren. Die Länge der Schnullerkette beträgt max. 22 cm (ab Clip), da sonst Strangulationsgefahr besteht. Warnhinweis: Kontrolliere die Schnullerkette vor jedem Gebrauch. Wirf die Schnullerkette bereits bei den ersten Anzeichen von Beschädigungen oder Mängeln weg. Befestige die Schnullerkette niemals an Schnüren, Bändern, Trägern oder losen Teilen der Kleidung, da sich dein Kind sonst erdrosseln kann.',
  },
  {
    id: 'Schnullerkette-4',
    name: 'Daisy Soft Brown',
    price: 19.9,
    description:
      'Nie wieder Schnuller suchen – mit unserer handgemachten personalisierten Schnullerkette geht kein Schnuller mehr verloren. Die BPA-freie Schnullerkette besteht aus einem Holzclip mit Metallverschluss sowie aus bunten Holz-, Silikon- und Häkelperlen. Der Silikonring am Ende dient zur Befestigung des Schnullers. Geeignet ist die Schnullerkette ab 0 Jahren und nach individuellen Wünschen verfügbar.',
    category: 'schnullerketten',
    publicId: ['fynlyTest/secondary', 'fynlyTest/main', 'fynlyTest/third'],
    featured: true,
    inStock: true,
    quantity: 1,
    technicalDetails:
      'Die Materialien bestehen immer aus 100% Silikon, 100% Holz und 100% Baumwolle (gem. DIN EN 71-3). Die Anfertigung der Schnullerkette erfolgt mit hoher Sorgfalt unter Beachtung der gesetzlichen Vorschriften. Es werden ausschließlich qualitativ hochwertige Materialien aus Deutschland verwendet, die lutsch- und speichelfest sowie völlig schadstofffrei sind. Die Schnullerkette kann vom Baby unbedenklich in den Mund genommen werden. Der nickelfreie Clip ist mit drei Ventilationslöchern ausgestattet, um eine Erstickungsgefahr zu reduzieren. Die Länge der Schnullerkette beträgt max. 22 cm (ab Clip), da sonst Strangulationsgefahr besteht. Warnhinweis: Kontrolliere die Schnullerkette vor jedem Gebrauch. Wirf die Schnullerkette bereits bei den ersten Anzeichen von Beschädigungen oder Mängeln weg. Befestige die Schnullerkette niemals an Schnüren, Bändern, Trägern oder losen Teilen der Kleidung, da sich dein Kind sonst erdrosseln kann.',
  },
  {
    id: 'Schnullerkette-5',
    name: 'Daisy Butter-Yellow',
    price: 19.9,
    description:
      'Nie wieder Schnuller suchen – mit unserer handgemachten personalisierten Schnullerkette geht kein Schnuller mehr verloren. Die BPA-freie Schnullerkette besteht aus einem Holzclip mit Metallverschluss sowie aus bunten Holz-, Silikon- und Häkelperlen. Der Silikonring am Ende dient zur Befestigung des Schnullers. Geeignet ist die Schnullerkette ab 0 Jahren und nach individuellen Wünschen verfügbar.',
    category: 'schnullerketten',
    publicId: ['fynlyTest/secondary', 'fynlyTest/main', 'fynlyTest/third'],
    inStock: true,
    quantity: 1,
    technicalDetails:
      'Die Materialien bestehen immer aus 100% Silikon, 100% Holz und 100% Baumwolle (gem. DIN EN 71-3). Die Anfertigung der Schnullerkette erfolgt mit hoher Sorgfalt unter Beachtung der gesetzlichen Vorschriften. Es werden ausschließlich qualitativ hochwertige Materialien aus Deutschland verwendet, die lutsch- und speichelfest sowie völlig schadstofffrei sind. Die Schnullerkette kann vom Baby unbedenklich in den Mund genommen werden. Der nickelfreie Clip ist mit drei Ventilationslöchern ausgestattet, um eine Erstickungsgefahr zu reduzieren. Die Länge der Schnullerkette beträgt max. 22 cm (ab Clip), da sonst Strangulationsgefahr besteht. Warnhinweis: Kontrolliere die Schnullerkette vor jedem Gebrauch. Wirf die Schnullerkette bereits bei den ersten Anzeichen von Beschädigungen oder Mängeln weg. Befestige die Schnullerkette niemals an Schnüren, Bändern, Trägern oder losen Teilen der Kleidung, da sich dein Kind sonst erdrosseln kann.',
  },
  {
    id: 'schluesselanhaenger-1',
    name: 'MOM',
    price: 7.9,
    description:
      'Dieser handgefertigte Schlüsselanhänger ist nicht nur eine emotionale Überraschung, sondern auch eine bleibende Erinnerung für alle Mamas. Egal, ob am Schlüsselbund oder an der Handtasche – dieser Anhänger wird für dich ein ganz besonderer sein und dich immer begleiten.',
    category: 'schluesselanhaenger',
    publicId: ['fynlyTest/secondary', 'fynlyTest/main', 'fynlyTest/third'],
    inStock: true,
    quantity: 1,
    technicalDetails:
      'Als Materialien werden hochwertiges Holz, Silikon und Häkelperlen verwendet sowie ein Karabiner aus Edelstahl.',
  },
  {
    id: 'schluesselanhaenger-2',
    name: 'Patentante Rose',
    price: 7.9,
    description:
      'Manche Fragen sind so besonders, dass sie ein einzigartiges Geschenk verdienen. Mit unserem liebevoll gestalteten Schlüsselanhänger kannst du auf wunderschöne Weise fragen: WILLST DU MEINE PATENTANTE WERDEN?',
    category: 'schluesselanhaenger',
    publicId: ['fynlyTest/secondary', 'fynlyTest/main', 'fynlyTest/third'],
    featured: true,
    inStock: true,
    quantity: 1,
    technicalDetails:
      'Als Materialien werden hochwertiges Holz, Silikon und Häkelperlen verwendet sowie ein Karabiner aus Edelstahl.',
  },
  {
    id: 'schluesselanhaenger-3',
    name: 'Patentante Blue',
    price: 7.9,
    description:
      'Manche Fragen sind so besonders, dass sie ein einzigartiges Geschenk verdienen. Mit unserem liebevoll gestalteten Schlüsselanhänger kannst du auf wunderschöne Weise fragen: WILLST DU MEINE PATENTANTE WERDEN?',
    category: 'schluesselanhaenger',
    publicId: ['fynlyTest/secondary', 'fynlyTest/main', 'fynlyTest/third'],
    featured: true,
    inStock: true,
    quantity: 1,
    technicalDetails:
      'Als Materialien werden hochwertiges Holz, Silikon und Häkelperlen verwendet sowie ein Karabiner aus Edelstahl.',
  },
  {
    id: 'schluesselanhaenger-4',
    name: 'Patentante Green',
    price: 7.9,
    description:
      'Manche Fragen sind so besonders, dass sie ein einzigartiges Geschenk verdienen. Mit unserem liebevoll gestalteten Schlüsselanhänger kannst du auf wunderschöne Weise fragen: WILLST DU MEINE PATENTANTE WERDEN?',
    category: 'schluesselanhaenger',
    publicId: ['fynlyTest/secondary', 'fynlyTest/main', 'fynlyTest/third'],
    inStock: true,
    quantity: 1,
    technicalDetails:
      'Als Materialien werden hochwertiges Holz, Silikon und Häkelperlen verwendet sowie ein Karabiner aus Edelstahl.',
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
  'schluesselanhaenger',
]
