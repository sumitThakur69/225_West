import React, { useEffect, useState } from "react";
import { MdMenu } from "react-icons/md";
import { LuLeaf } from "react-icons/lu"; 
import ResponsiveMenu from "./ResponsiveMenu";

const Navbar = () => {
const [open , setOpen] = useState(false)
const [scrolled , setScrolled] = useState(false)

const handleScroll = () => {
  setScrolled(window.scrollY > 10);
}

useEffect(()=>{
  window.addEventListener('scroll',handleScroll,{passive: true});
  return () => window.removeEventListener('scroll',handleScroll);
})

  return ( 
    <>
    <nav className={`fixed top-0 left-0 w-full z-50 backdrop-blur-md transition-all ${
        scrolled ? " bg-(--west-bg)/80" : "bg-transparent"}`}>
      <div className="container py-2 flex justify-between items-center">
        
        <div className="flex items-center gap-3 cursor-pointer max-md:order-2">
          <div 
          onClick={()=>setOpen(!open)}
          className="w-12 h-10 border border-(--west-bg-secondary) rounded-full flex items-center justify-center">
            <MdMenu className="text-(--west-bg-secondary) text-2xl" />
          </div>
          <p className="uppercase max-md:hidden">
            Menu
          </p>
        </div>

        <div className="flex md:items-center text-left md:ml-17  gap-3 text-3xl">
          <LuLeaf />
          <p>The Seed Hub</p>
        </div>

        <button className="hidden btn-regular">
          Book a tour
          <span className="text-2xl">→</span>
        </button>
      </div>
    </nav>

    {open ? <ResponsiveMenu open={open} setOpen={setOpen} /> : null}

      </>
  );
};

export default Navbar;