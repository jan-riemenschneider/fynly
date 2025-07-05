import React from "react";
import { Baby, Gift, Tag, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import ProductGrid from "@/components/ProductGrid";
import { getFeaturedProducts } from "@/data/products";
import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  const featuredProducts = getFeaturedProducts();

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <section className="border flex flex-col items-center pt-10">
        <div className="w-72 h-72 bg-white rounded-full shadow-md overflow-hidden">
          <Image
            width={50}
            height={50}
            src="https://picsum.photos/200"
            alt="alt"
            className="w-full h-full object-cover"
          />
        </div>
        <h1 className="heading-xl text-gray-800 mb-4 font-heading font-bold">
          Hey ich bin Lisa und willkommen auf meinem Shop!
        </h1>
        <p className="text-lg">Entdecken Sie unsere liebevollen Unikate</p>
        <div className="flex flex-wrap gap-4 justify-center md:justify-start">
          <Button asChild size={"lg"} className="">
            <Link href="/category/schnullerketten">Jetzt entdecken</Link>
          </Button>
        </div>
      </section>
      {/* Features Section */}
      <section className="py-16">
        <div className="container-custom">
          <h2 className="heading-md text-center mb-12">
            Warum unsere Produkte?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="flex flex-col items-center text-center p-6 rounded-lg bg-gray-100 transition-all hover:shadow-md">
              <div className="w-16 h-16 flex items-center justify-center rounded-full bg-amber-200 mb-4">
                <Baby className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-medium mb-2">Babysicher</h3>
              <p className="text-muted-foreground">
                Alle Materialien sind babyfreundlich und entsprechen den
                höchsten Sicherheitsstandards.
              </p>
            </div>
            <div className="flex flex-col items-center text-center p-6 rounded-lg bg-gray-100 transition-all hover:shadow-md">
              <div className="w-16 h-16 flex items-center justify-center rounded-full bg-pink-200 mb-4">
                <Gift className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-medium mb-2">Handgemacht</h3>
              <p className="text-muted-foreground">
                Jedes Stück wird mit Liebe von Hand gefertigt und ist ein
                einzigartiges Unikat.
              </p>
            </div>
            <div className="flex flex-col items-center text-center p-6 rounded-lg bg-gray-100 transition-all hover:shadow-md">
              <div className="w-16 h-16 flex items-center justify-center rounded-full bg-blue-100 mb-4">
                <Tag className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-medium mb-2">Personalisierbar</h3>
              <p className="text-muted-foreground">
                Viele unserer Produkte können nach Ihren Wünschen personalisiert
                werden.
              </p>
            </div>
            <div className="flex flex-col items-center text-center p-6 rounded-lg bg-gray-100 transition-all hover:shadow-md">
              <div className="w-16 h-16 flex items-center justify-center rounded-full bg-yellow-100 mb-4">
                <Star className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-medium mb-2">Qualität</h3>
              <p className="text-muted-foreground">
                Wir verwenden nur hochwertige Materialien für langlebige
                Produkte.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-orange-100">
        <div className="container-custom">
          <h2 className="heading-md text-center mb-4">
            Unsere beliebtesten Produkte
          </h2>
          <p className="text-center text-muted-foreground mb-10 max-w-2xl mx-auto">
            Entdecken Sie unsere meistverkauften handgefertigten
            Babyaccessoires, die mit Liebe hergestellt wurden.
          </p>
          <ProductGrid products={featuredProducts} />
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16">
        <div className="container-custom">
          <h2 className="heading-md text-center mb-12">
            Was unsere Kunden sagen
          </h2>
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
              <p className="font-medium">- Laura K.</p>
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
              <p className="font-medium">- Michael S.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center text-yellow-400 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <p className="mb-4 text-muted-foreground">
                Die Babysocken sind so weich und warm. Perfekt für den Winter
                und sie bleiben auch wirklich an!
              </p>
              <p className="font-medium text-muted-foreground">- Julia M.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
