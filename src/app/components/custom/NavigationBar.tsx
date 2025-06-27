"use client";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { categoryTranslations } from "../../products";
import Image from "next/image";
import { ShoppingCart } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import Hamburger from "hamburger-react";
import { useState } from "react";
import Link from "next/link";
import clsx from "clsx";

function NavigationBar() {
  const [toggleHamburger, setToggleHamburger] = useState(false);
  return (
    <>
      <nav className="sticky top-0 lg:hidden">
        <NavigationMenu className="bg-nav w-screen">
          <NavigationMenuList className="w-screen flex justify-between px-7">
            <Sheet open={toggleHamburger} onOpenChange={setToggleHamburger}>
              <SheetTrigger>
                <Hamburger
                  toggled={toggleHamburger}
                  toggle={setToggleHamburger}
                />
              </SheetTrigger>
              <SheetContent>
                <SheetHeader className="bg-nav">
                  <SheetTitle>Unsere Kategorien</SheetTitle>
                </SheetHeader>
                <div className="flex gap-8 flex-col pl-2">
                  {Object.entries(categoryTranslations).map(([key, value]) => (
                    <NavigationMenuItem key={key}>
                      <NavigationMenuLink
                        href={`/category/${key}`}
                        className={clsx(
                          key === "schnullerketten" ? "font-bold" : null
                        )}
                      >
                        {value}
                      </NavigationMenuLink>
                    </NavigationMenuItem>
                  ))}
                </div>
              </SheetContent>
            </Sheet>
            <div className="bg-nav w-screen flex justify-center">
              <Link href={"/"}>
                <Image
                  src="/LogoFynnly.jpg"
                  alt="Fynnly Logo"
                  width={100}
                  height={100}
                ></Image>
              </Link>
            </div>
            <div className="h-auto w-auto">
              <NavigationMenuItem className="">
                <NavigationMenuLink href="/cart" className="">
                  <ShoppingCart className="w-10 h-10 relative margin-0 padding-0" />
                  <Badge className="absolute -top-2 -right-2 h-6 w-6 rounded-full text-xs flex items-center justify-center p-0">
                    3
                  </Badge>
                </NavigationMenuLink>
              </NavigationMenuItem>
            </div>
          </NavigationMenuList>
        </NavigationMenu>
      </nav>

      <nav className="sticky top-0 hidden lg:block">
        <NavigationMenu className="bg-nav w-screen">
          <NavigationMenuList className="w-screen flex justify-between px-7">
            <Link href={"/"}>
              <Image
                src="/LogoFynnly.jpg"
                alt="Fynnly Logo"
                width={100}
                height={100}
              ></Image>
            </Link>
            <div className="flex gap-8 pl-2">
              {Object.entries(categoryTranslations).map(([key, value]) => (
                <NavigationMenuItem key={key}>
                  <NavigationMenuLink href={`/category/${key}`}>
                    {value}
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
            </div>
            <div className="h-auto w-auto">
              <NavigationMenuItem className="">
                <NavigationMenuLink href="/cart" className="">
                  <ShoppingCart className="w-10 h-10 relative margin-0 padding-0" />
                  <Badge className="absolute -top-2 -right-2 h-6 w-6 rounded-full text-xs flex items-center justify-center p-0">
                    3
                  </Badge>
                </NavigationMenuLink>
              </NavigationMenuItem>
            </div>
          </NavigationMenuList>
        </NavigationMenu>
      </nav>
    </>
  );
}

export default NavigationBar;
