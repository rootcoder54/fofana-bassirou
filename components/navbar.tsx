import Link from "next/link";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList
} from "@/components/ui/navigation-menu";
import {
  Popover,
  PopoverContent,
  PopoverTrigger
} from "@/components/ui/popover";
import { Button, buttonVariants } from "@/components/ui/button";
import { BadgeAlert, FileSliders, Menu, Phone, Server } from "lucide-react";
import { cn } from "@/lib/utils";
import { Mode } from "./theme";

const Navbar = () => {
  return (
    <div className="w-full px-5 py-2 mb-3 border-b top-0 bg-background/50 backdrop-blur-sm sticky z-50 flex items-center justify-between">
      <Link href={"/"} className="text-zinc-500 dark:text-zinc-300 text-4xl">
        FB
      </Link>
      <NavigationMenu viewport={false}>
        <NavigationMenuList className="hidden md:flex">
          <NavigationMenuItem>
            <NavigationMenuLink asChild>
              <Link
                href="#competence"
                className="flex flex-row items-center gap-2"
              >
                <FileSliders />
                Compétence
              </Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink asChild>
              <Link
                href="#services"
                className="flex flex-row items-center gap-2"
              >
                {" "}
                <Server />
                Services
              </Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink asChild>
              <Link href="#about" className="flex flex-row items-center gap-2">
                <BadgeAlert />
                A-propos
              </Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink asChild>
              <Link
                href="#contact"
                className="flex flex-row items-center gap-2"
              >
                <Phone />
                Contact
              </Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
        <div className="md:hidden flex flex-row items-center gap-4">
          <Link
            href="#contact"
            className={cn(
              "flex flex-row items-center gap-2",
              buttonVariants({ variant: "outline" })
            )}
          >
            <Phone />
            Contact
          </Link>
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="outline">
                <Menu />
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-80">
              <div className="flex flex-col gap-1">
                <Link
                  href="#about"
                  className={cn(
                    buttonVariants({ variant: "ghost" }),
                    "flex flex-row justify-start gap-2"
                  )}
                >
                  <BadgeAlert />
                  A-propos
                </Link>
                <Link
                  href="#competence"
                  className={cn(
                    buttonVariants({ variant: "ghost" }),
                    "flex flex-row justify-start gap-2"
                  )}
                >
                  <FileSliders />
                  Compétence
                </Link>
                <Link
                  href="#services"
                  className={cn(
                    buttonVariants({ variant: "ghost" }),
                    "flex flex-row justify-start gap-2"
                  )}
                >
                  <Server />
                  Services
                </Link>
              </div>
            </PopoverContent>
          </Popover>
        </div>
        <Mode />
      </NavigationMenu>
    </div>
  );
};

export default Navbar;
