import { useState } from "react";
import { clsx } from "clsx";

import Button from "@/components/ui/button";

import CartIcon from "@/assets/icons/cart-icon";
import HamburgerIcon from "@/assets/icons/hamburger-icon";
import SearchIcon from "@/assets/icons/search-icon";
import XIcon from "@/assets/icons/x-icon";

const NavItem = ["About us", "Collaboration", "Product", "Articles"];

const NavLinks = () => {
  return (
    <>
      {NavItem.map((item, index) => (
        <h3
          key={index}
          className="font-space-grotesk text-inverted hover:text-primary text-center uppercase font-medium leading-5 tracking-wide duration-300 cursor-pointer"
        >
          {item}
        </h3>
      ))}
    </>
  )
}

type IconButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

const IconButton = ({ children, onClick, className }: IconButtonProps) => {
  return (
    <div
      onClick={onClick}
      className={clsx("group size-8 sm:size-10 lg:size-10 flex items-center justify-center text-xs gap-2.5 backdrop-blur-[10px] p-2 rounded-full bg-icon cursor-pointer hover:bg-inverted duration-400", className)}
    >
      {children}
    </div>
  )
}

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };


  return (
    <div className="absolute top-0 left-0 w-full z-2">
      <header className={clsx("p-6 md:pt-10 md:pb-5 md:px-15 lg:py-4 lg:px-33 border-b border-[#ffffff99]", { "bg-primary h-fit md:h-133 flex flex-col": isOpen })}>
        <div className="flex items-center justify-center">
          <div className="max-w-[1200px] w-full flex flex-wrap items-center justify-between">

            <h1 className="w-[280px] text-inverted font-bold uppercase text-2xl md:text-3.5xl lg:text-2xl leading-7 md:leading-9.5 lg:leading-7 tracking-wide md:tracking-normal lg:tracking-wide cursor-pointer">styleest</h1>

            <div className="hidden md:hidden lg:flex items-start justify-start gap-9">
              <NavLinks />
            </div>

            <div className="flex items-center justify-start gap-2.5 md:gap-5 lg:gap-5">
              <IconButton>
                <SearchIcon />
              </IconButton>

              <IconButton>
                <CartIcon />
              </IconButton>

              <IconButton onClick={toggleMenu} className="lg:hidden">
                {isOpen ? <XIcon /> : <HamburgerIcon />}
              </IconButton>

              <div className="w-35 h-auto hidden md:hidden lg:flex">
                <Button>Login</Button>
              </div>
            </div>

          </div>
        </div>
        {isOpen && (
          <div className="h-full flex flex-col items-center justify-center mt-5 gap-8">
            <NavLinks />
            <div className="w-35 h-auto">
              <Button>Login</Button>
            </div>
          </div>
        )}
      </header>
    </div>
  )
}
