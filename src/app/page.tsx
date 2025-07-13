import React from "react";
import { Baby, Gift, Tag, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import ProductGrid from "@/components/ProductGrid";
import { getFeaturedProducts } from "@/data/products";
import Link from "next/link";

export default function HomePage() {
  const featuredProducts = getFeaturedProducts();

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 space-y-12 lg:space-y-16">
      {/* Hero Section */}
      <section className="flex flex-col bg-[url(https://picsum.photos/200)] justify-center gap-8 items-center h-[60vh] md:h-[80vh] realtive px-6">
        <div className="flex flex-col items-center gap-6 max-w-lg">
          <h1 className="text-4xl mb-4 font-heading text-white">
            Hey ich bin Lisa!
          </h1>
          <p className="font-text font-semibold text-white text-center">
            Das sind unsere selbstgemachten Schnullerketten – jede mit viel
            Liebe und Sorgfalt gefertigt. Jede Kette ist ein echtes Unikat.
          </p>
          <Button asChild size={"lg"} className="mb-8" variant={"default"}>
            <Link href="/category/schnullerketten">Jetzt entdecken</Link>
          </Button>
        </div>
      </section>

      {/* Featured Products */}

      <section className="bg-gray-50 px-6">
        <div className="flex flex-col items-center mb-8">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-gray-900 mb-3 font-body">
            Unsere beliebtesten Produkte
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 leading-relaxed text-center font-body">
            Entdecken Sie unsere meistverkauften handgefertigten
            Babyaccessoires, die mit Liebe hergestellt wurden.
          </p>
          <div className="border-b-2 border-primary w-24 mt-6"></div>
        </div>
        <ProductGrid products={featuredProducts} />
      </section>

      {/* Features Section */}
      <section className="px-6 bg-gray-50">
        <div className="flex flex-col items-center mb-8">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-foreground mb-6 font-body text-center">
            Warum unsere Produkte?
          </h2>
          <div className="border-b-2 border-primary w-24 mt-1"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="flex flex-col items-center text-center p-6 rounded-lg bg-card transition-all shadow-sm">
            <div className="w-16 h-16 flex items-center justify-center rounded-full bg-amber-200 mb-4">
              <Baby className="h-8 w-8 text-card-foreground" />
            </div>
            <h3 className="text-xl font-medium mb-2 text-card-foreground">
              Babysicher
            </h3>
            <p className="text-muted-foreground">
              Alle Materialien sind babyfreundlich und entsprechen den höchsten
              Sicherheitsstandards.
            </p>
          </div>
          <div className="flex flex-col items-center text-center p-6 rounded-lg bg-card transition-all shadow-sm">
            <div className="w-16 h-16 flex items-center justify-center rounded-full bg-pink-200 mb-4">
              <Gift className="h-8 w-8 text-card-foreground" />
            </div>
            <h3 className="text-xl font-medium mb-2 text-card-foreground">
              Handgemacht
            </h3>
            <p className="text-muted-foreground">
              Jedes Stück wird mit Liebe von Hand gefertigt und ist ein
              einzigartiges Unikat.
            </p>
          </div>
          <div className="flex flex-col items-center text-center p-6 rounded-lg bg-card transition-all shadow-sm">
            <div className="w-16 h-16 flex items-center justify-center rounded-full bg-blue-100 mb-4">
              <Tag className="h-8 w-8 text-card-foreground" />
            </div>
            <h3 className="text-xl font-medium mb-2 text-card-foreground">
              Personalisierbar
            </h3>
            <p className="text-muted-foreground">
              Viele unserer Produkte können nach Ihren Wünschen personalisiert
              werden.
            </p>
          </div>
          <div className="flex flex-col items-center text-center p-6 rounded-lg bg-card transition-all shadow-sm">
            <div className="w-16 h-16 flex items-center justify-center rounded-full bg-yellow-100 mb-4">
              <Star className="h-8 w-8 text-card-foreground" />
            </div>
            <h3 className="text-xl font-medium mb-2 text-card-foreground">
              Qualität
            </h3>
            <p className="text-muted-foreground">
              Wir verwenden nur hochwertige Materialien für langlebige Produkte.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="px-6 bg-gray-50 mb-12 lg:mb-16">
        <div className="flex flex-col items-center mb-8">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-foreground mb-6 font-body text-center">
            Was unsere Kunden sagen
          </h2>
          <div className="border-b-2 border-primary w-24 mt-1"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex items-center text-yellow-400 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-current" />
              ))}
            </div>
            <p className="mb-4 text-muted-foreground">
              Die Schnullerketten sind einfach wunderschön und meine Tochter
              liebt sie. Sehr gute Qualität!
            </p>
            <p className="font-medium text-card-foreground">- Laura K.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex items-center text-yellow-400 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-current" />
              ))}
            </div>
            <p className="mb-4 text-muted-foreground">
              Super süße Beißketten, die meinem Sohn beim Zahnen sehr geholfen
              haben. Schnelle Lieferung!
            </p>
            <p className="font-medium text-card-foreground">- Michael S.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex items-center text-yellow-400 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-current" />
              ))}
            </div>
            <p className="mb-4 text-muted-foreground">
              Die Babysocken sind so weich und warm. Perfekt für den Winter und
              sie bleiben auch wirklich an!
            </p>
            <p className="font-medium text-card-foreground">- Julia M.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
