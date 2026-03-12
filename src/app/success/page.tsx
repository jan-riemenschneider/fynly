"use client";

import { CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { useEffect } from "react";
import { Section } from "@/components/sections/Section";
import { Heading } from "@/components/typography/heading";
import { Text } from "@/components/typography/text";
import { Button } from "@/components/ui/button";
import { useCart } from "@/context/CartContext";

export default function SuccessPage() {
  const { clearCart } = useCart();

  useEffect(() => {
    clearCart();
  }, [clearCart]);

  return (
    <Section fullWidth background="bg-white" className="min-h-[70vh]">
      <div className="col-span-12 mx-auto max-w-2xl rounded-lg bg-white p-8 text-center shadow-sm md:p-12">
        <CheckCircle2 className="mx-auto mb-6 size-14 text-green-600" />
        <Heading level={1} variant="lg" className="mb-4">
          Zahlung erfolgreich
        </Heading>
        <Text level="p" variant="body" className="mb-3">
          Danke für deine Bestellung. Deine Zahlung wurde erfolgreich
          abgeschlossen.
        </Text>
        <Text level="p" variant="muted" className="mb-8">
          Du erhälst in Kürze eine Bestätigung und wir kümmern uns um den
          Versand.
        </Text>
        <Button asChild size="lg">
          <Link href="/">Zur Startseite</Link>
        </Button>
      </div>
    </Section>
  );
}
