import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { categoryTranslations } from "../../products";
import Image from "next/image";
import { ShoppingCart } from "lucide-react";
import { Badge } from "@/components/ui/badge";

function NavigationBar() {
  return (
    <NavigationMenu className="bg-nav w-screen">
      <NavigationMenuList className="w-screen flex justify-between px-7">
        <div>
          <NavigationMenuItem className="self-start">
            <NavigationMenuLink href="/" className="bg-white rounded p-2">
              <Image
                src="/LogoFynnly.jpg"
                alt="Fynnly Logo"
                width={100}
                height={100}
              ></Image>
            </NavigationMenuLink>
          </NavigationMenuItem>
        </div>
        <div className="flex gap-10">
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
  );
}

export default NavigationBar;
