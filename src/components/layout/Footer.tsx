"use client";
import { useRouter } from "next/navigation";
import { FaTiktok } from "react-icons/fa";
import AmericanExpress from "@/public/payment/american-express.svg";
import ApplePay from "@/public/payment/apple-pay.svg";
import MasterCard from "@/public/payment/mastercard.svg";
import PayPal from "@/public/payment/paypal.svg";
import Visa from "@/public/payment/visa.svg";
import { Heading } from "../typography/heading";
import { List } from "../typography/list";
import { Text } from "../typography/text";
import { Button } from "../ui/button";
import { SeparatingLine } from "../ui/SeparatingLine";

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  const router = useRouter();

  return (
    <footer className="bg-rose-50 py-16 shadow-sm">
      <div className="container px-6 mx-auto">
        <div className="mb-20 grid gap-12 md:grid-cols-2 xl:grid-cols-[minmax(0,1.65fr)_repeat(3,minmax(0,0.75fr))] xl:gap-16">
          <section>
            <Heading level={4} variant="footer" className="mb-4">
              UNSER VERSPRECHEN
            </Heading>
            <Text level="p" variant="small" className="max-w-md">
              Unser Ziel ist es, mit Dir den ersten Schritt zu meistern. Den
              ersten Schritt dahin, Dein Baby mit liebevoll handgefertigten
              Schnullerketten zu verwöhnen. Wir richten uns daher an Eltern, die
              Qualität schätzen und nicht lange suchen wollen. Echte Handarbeit.
              Sichere Materialien.
            </Text>
          </section>

          <section>
            <Heading level={4} variant="footer" className="mb-4">
              PRODUKTE
            </Heading>
            <nav>
              <List className="flex flex-col gap-3">
                <List.Item>
                  <Button
                    onClick={() => router.push("/category/schnullerketten")}
                    variant="link"
                    size="link"
                    className="justify-start"
                  >
                    Schnullerketten
                  </Button>
                </List.Item>
                <List.Item>
                  <Button
                    onClick={() => router.push("/category/schluesselanhaenger")}
                    variant="link"
                    size="link"
                    className="justify-start"
                  >
                    Schlüsselanhänger
                  </Button>
                </List.Item>
              </List>
            </nav>
          </section>

          <section>
            <Heading level={4} variant="footer" className="mb-4">
              RECHTLICHES
            </Heading>
            <nav>
              <List className="flex flex-col gap-3">
                <List.Item>
                  <Button
                    onClick={() => router.push("/legalNotice")}
                    variant="link"
                    size="link"
                    className="justify-start"
                  >
                    Impressum
                  </Button>
                </List.Item>
                <List.Item>
                  <Button
                    onClick={() => router.push("/privacyPolicy")}
                    variant="link"
                    size="link"
                    className="justify-start"
                  >
                    Datenschutz
                  </Button>
                </List.Item>
                <List.Item>
                  <Button
                    onClick={() => router.push("/agb")}
                    variant="link"
                    size="link"
                    className="justify-start"
                  >
                    AGB
                  </Button>
                </List.Item>
                <List.Item>
                  <Button
                    onClick={() => router.push("/widerruf")}
                    variant="link"
                    size="link"
                    className="justify-start"
                  >
                    Widerruf
                  </Button>
                </List.Item>
              </List>
            </nav>
          </section>

          <section>
            <Heading level={4} variant="footer" className="mb-4">
              SERVICE
            </Heading>
            <nav>
              <List className="flex flex-col gap-3">
                <List.Item>
                  <Button
                    onClick={() => router.push("/contact")}
                    variant="link"
                    size="link"
                    className="justify-start"
                  >
                    Kontakt
                  </Button>
                </List.Item>
                <List.Item>
                  <Button
                    onClick={() => router.push("/shipping")}
                    variant="link"
                    size="link"
                    className="justify-start"
                  >
                    Zahlung & Versand
                  </Button>
                </List.Item>
              </List>
            </nav>
          </section>
        </div>

        <div className="flex w-full flex-col gap-8 border-t border-black/10 pt-8 lg:flex-row lg:items-end">
          <div className="flex flex-col items-center gap-2 lg:w-1/3 lg:items-start">
            <div className="flex items-center gap-2">
              <Text variant="body" level="p">
                FOLGE UNS AUF TIKTOK!
              </Text>
              <Button size="icon" className="rounded-full">
                <FaTiktok />
              </Button>
            </div>
          </div>
          <Text
            variant="small"
            level="small"
            className="flex justify-center text-center lg:w-1/3"
          >
            © {currentYear} fynly - Alle Rechte vorbehalten
          </Text>
          <SeparatingLine className="w-full lg:hidden" />
          <section className="flex flex-wrap items-center justify-center gap-4 lg:w-1/3 lg:justify-end">
            <ApplePay className="h-6 w-auto rounded-xs border border-gray-200 bg-white" />
            <PayPal className="h-6 w-auto" />
            <Visa className="h-6 w-auto" />
            <MasterCard className="h-6 w-auto" />
            <AmericanExpress className="h-6 w-auto" />
          </section>
        </div>
      </div>
    </footer>
  );
};
