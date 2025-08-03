'use client'
import CartSlideoverContent from '@/components/custom/CartSlideoverContent'
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
import clsx from 'clsx'
import Hamburger from 'hamburger-react'
import { ChevronRight } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'
import { categoryTranslations } from '../../data/products'
import Logo from './../../../../public/LogoFynnly.svg'

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
                        'flex flex-row justify-between p-5 text-base'
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
          <div className="bg-nav flex w-screen justify-center">
            <Link href={'/'}>
              <Logo className="h-20 w-20" />
            </Link>
          </div>
          <CartSlideoverContent />
        </NavigationMenuList>
      </NavigationMenu>

      <NavigationMenu className="sticky top-0 z-10 hidden w-full bg-white/85 pr-6 pl-6 shadow-sm backdrop-blur-sm lg:block">
        <NavigationMenuList className="mx-auto max-w-6xl">
          <div className="flex w-full items-center justify-between">
            <Link href={'/'}>
              <Logo className="h-25 w-25" />
            </Link>
            <div className="flex gap-8">
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
          </div>
        </NavigationMenuList>
      </NavigationMenu>
    </>
  )
}
