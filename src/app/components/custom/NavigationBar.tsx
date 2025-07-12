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
import Hamburger from "hamburger-react";
import { useState } from "react";
import Link from "next/link";
import clsx from "clsx";
import Logo from "./../../../../public/LogoFynnly.svg";
import CartSlideoverContent from "@/components/utils/CartSlideoverContent";
import { ChevronRight } from "lucide-react";
import { categoryTranslations } from "../../data/products";
function NavigationBar() {
  const [toggleHamburger, setToggleHamburger] = useState(false);

  return (
    <>
      <NavigationMenu className="bg-white/95 backdrop-blur-sm sticky top-0 lg:hidden hover:bg-background z-10">
        <NavigationMenuList className="w-screen flex justify-between px-7 shadow-sm ">
          <Sheet open={toggleHamburger} onOpenChange={setToggleHamburger}>
            <SheetTrigger>
              <Hamburger
                size={24}
                toggled={toggleHamburger}
                toggle={setToggleHamburger}
              />
            </SheetTrigger>
            <SheetContent className="w-80 gap-0">
              <SheetHeader className="shadow-sm">
                <SheetTitle>Unsere Kategorien</SheetTitle>
              </SheetHeader>
              <div className="flex flex-col">
                {Object.entries(categoryTranslations).map(([key, value]) => (
                  <NavigationMenuItem key={key} className="list-none">
                    <NavigationMenuLink
                      href={`/category/${key}`}
                      className={clsx(
                        "text-base p-5 flex flex-row justify-between"
                      )}
                    >
                      {value}
                      <ChevronRight strokeWidth={1} />
                    </NavigationMenuLink>
                    <div className="border-b" />
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

      <NavigationMenu className="bg-white/95 backdrop-blur-sm sticky top-0 hidden lg:block w-full">
        <NavigationMenuList className="flex justify-between px-7 shadow-sm">
          <Link href={"/"}>
            <Logo className="h-30 w-30" />
          </Link>
          <div className="flex gap-8 pl-2">
            {Object.entries(categoryTranslations).map(([key, value]) => (
              <NavigationMenuItem key={key}>
                <NavigationMenuLink
                  asChild
                  className="text-base hover:cursor-pointer"
                >
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
