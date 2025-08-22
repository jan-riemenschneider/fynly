'use client'
import CartSlideoverContent from '@/components/CartSlideoverContent'
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from '@/components/ui/navigation-menu'
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'
import { categoryTranslations } from '@/data/products'
import Logo from '@/publicLogoFynnly.svg'
import clsx from 'clsx'
import Hamburger from 'hamburger-react'
import { ChevronRight } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'

export function NavigationBar() {
  const [toggleHamburger, setToggleHamburger] = useState(false)

  return (
    <>
      <NavigationMenu className="sticky top-0 z-10 bg-white/85 backdrop-blur-sm lg:hidden">
        <NavigationMenuList className="flex w-screen justify-between px-7 shadow-sm">
          <Sheet open={toggleHamburger} onOpenChange={setToggleHamburger}>
            <SheetTrigger>
              <Hamburger
                size={24}
                toggled={toggleHamburger}
                toggle={setToggleHamburger}
                color="#1e2939"
              />
            </SheetTrigger>
            <SheetContent className="w-100 gap-0">
              <SheetHeader className="border-b">
                <SheetTitle>Unsere Kategorien</SheetTitle>
              </SheetHeader>
              <div className="flex flex-col">
                {Object.entries(categoryTranslations).map(([key, value]) => (
                  <NavigationMenuItem key={key} className="list-none">
                    <NavigationMenuLink
                      href={`/category/${key}`}
                      className={clsx(
                        'flex flex-row justify-between p-6 text-base'
                      )}
                    >
                      {value}
                      <ChevronRight
                        strokeWidth={1}
                        className="hover:text-2xl"
                      />
                    </NavigationMenuLink>
                    <div className="border-b" />
                  </NavigationMenuItem>
                ))}
              </div>
            </SheetContent>
          </Sheet>
          <div className="bg-nav flex w-screen justify-center">
            <Link href={'/'}>
              <Logo className="h-20 w-20" />
            </Link>
          </div>
          <CartSlideoverContent />
        </NavigationMenuList>
      </NavigationMenu>

      <NavigationMenu className="sticky top-0 z-10 hidden w-full bg-white/85 shadow-sm backdrop-blur-sm lg:block">
        <NavigationMenuList className="mx-auto px-10">
          <div className="flex w-full items-center justify-between">
            <div className="flex space-x-20">
              <Link href={'/'}>
                <Logo className="h-20 w-20" />
              </Link>
              <div className="flex items-center gap-15">
                {Object.entries(categoryTranslations).map(([key, value]) => (
                  <NavigationMenuItem key={key}>
                    <NavigationMenuLink
                      asChild
                      className="text-md text-foreground tracking-wide"
                    >
                      <Link href={`/category/${key}`}>
                        {value.toUpperCase()}
                      </Link>
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                ))}
                <NavigationMenuItem>
                  <NavigationMenuLink
                    asChild
                    className="text-md text-foreground tracking-wide"
                  >
                    <Link href="/ueberUns">ÜBER UNS</Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              </div>
            </div>
            <CartSlideoverContent />
          </div>
        </NavigationMenuList>
      </NavigationMenu>
    </>
  )
}
