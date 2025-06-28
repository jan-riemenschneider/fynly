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
import Hamburger from "hamburger-react";
import { useState } from "react";
import Link from "next/link";
import clsx from "clsx";
import Logo from "./../../../../public/LogoFynnly.svg";
import CartSlideoverContent from "./CartSlideoverContent";

function NavigationBar() {
  const [toggleHamburger, setToggleHamburger] = useState(false);

  return (
    <>
      <NavigationMenu className="bg-background sticky top-0 lg:hidden">
        <NavigationMenuList className="w-screen flex justify-between px-7 shadow-md">
          <Sheet open={toggleHamburger} onOpenChange={setToggleHamburger}>
            <SheetTrigger>
              <Hamburger
                size={24}
                toggled={toggleHamburger}
                toggle={setToggleHamburger}
              />
            </SheetTrigger>
            <SheetContent className="w-80">
              <SheetHeader className="bg-accent shadow-sm">
                <SheetTitle>Unsere Kategorien</SheetTitle>
              </SheetHeader>
              <div className="flex gap-6 flex-col">
                {Object.entries(categoryTranslations).map(([key, value]) => (
                  <NavigationMenuItem key={key} className="">
                    <NavigationMenuLink
                      href={`/category/${key}`}
                      className={clsx(
                        key === "schnullerketten" ? "font-bold" : null,
                        "text-base pl-4"
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
              <Logo className="h-20 w-20" />
            </Link>
          </div>
          <CartSlideoverContent />
        </NavigationMenuList>
      </NavigationMenu>

      <NavigationMenu className="bg-background sticky top-0 hidden lg:block max-w-[2100px] mx-auto">
        <NavigationMenuList className="flex justify-between px-7 shadow-md">
          <Link href={"/"}>
            <Logo className="h-30 w-30" />
          </Link>
          <div className="flex gap-8 pl-2">
            {Object.entries(categoryTranslations).map(([key, value]) => (
              <NavigationMenuItem key={key}>
                <NavigationMenuLink asChild className="text-base">
                  <Link href={`/category/${key}`}>{value}</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </div>
          <CartSlideoverContent />
        </NavigationMenuList>
      </NavigationMenu>
    </>
  );
}

export default NavigationBar;
