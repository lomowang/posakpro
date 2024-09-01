"use client";
import Nav from "./Nav";
import Social from "./Social";
import { Sheet, SheetContent, SheetTrigger } from "../components/ui/sheet";
import { Menu } from "lucide-react";

const MobileNav = () => {
  return (
    <Sheet>
      <SheetTrigger>
        <Menu size={36} className="text-black" />
      </SheetTrigger>
      <SheetContent side="left">
        <div className="flex flex-col justify-around h-full p-4">
          <Nav
            containerStyles="text-black "
            listStyles="flex flex-col gap-y-2 text-sm leading-6 mt-4  "
          />
          <div>
            <Social />
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
