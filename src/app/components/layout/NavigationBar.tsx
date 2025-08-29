'use client'
import CartSlideoverContent from '@/components/cart/cartSlideoverContent'
import { AnnouncementBar } from '@/components/layout/AnnouncementBar'
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
import { motion } from 'framer-motion'
import Hamburger from 'hamburger-react'
import { ChevronRight } from 'lucide-react'
import { useMotionValueEvent, useScroll } from 'motion/react'
import Link from 'next/link'
import { useRef, useState } from 'react'

export function NavigationBar() {
  const [toggleHamburger, setToggleHamburger] = useState(false)
  const { scrollY } = useScroll()
  const [isVisible, setIsVisible] = useState(true)
  const lastScrollY = useRef(0)

  useMotionValueEvent(scrollY, 'change', current => {
    const previous = lastScrollY.current

    if (current < previous) {
      setIsVisible(true)
    } else if (current > previous && current > 50) {
      setIsVisible(false)
    }

    lastScrollY.current = current
  })

  return (
    <motion.header
      animate={{
        y: isVisible ? 0 : -100,
        opacity: isVisible ? 1 : 0,
      }}
      transition={{
        type: 'spring',
        stiffness: 300,
        damping: 30,
      }}
      className="fixed top-0 z-10 w-full"
    >
      <AnnouncementBar />
      <NavigationMenu className="bg-white/95 backdrop-blur-sm lg:hidden">
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
                <SheetTitle asChild>
                  <h3>Kategorie</h3>
                </SheetTitle>
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
                <NavigationMenuItem className="list-none">
                  <NavigationMenuLink
                    href="/ueberUns"
                    className="flex flex-row justify-between p-6 text-base"
                  >
                    Über uns
                    <ChevronRight strokeWidth={1} className="hover:text-2xl" />
                  </NavigationMenuLink>
                </NavigationMenuItem>
                <div className="border-b" />
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

      <NavigationMenu className="hidden w-full bg-white/95 shadow-sm backdrop-blur-sm lg:block">
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
                      className="text-base font-medium tracking-wide"
                    >
                      <Link href={`/category/${key}`}>{value}</Link>
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                ))}
                <NavigationMenuItem>
                  <NavigationMenuLink
                    asChild
                    className="text-md font-medium tracking-wide"
                  >
                    <Link href="/ueberUns">Über uns</Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              </div>
            </div>
            <CartSlideoverContent />
          </div>
        </NavigationMenuList>
      </NavigationMenu>
    </motion.header>
  )
}
