import React, { useState } from "react";
import { MdMenu } from "react-icons/md";
import { LuLeaf } from "react-icons/lu"; 
import ResponsiveMenu from "./ResponsiveMenu";

const Navbar = () => {
const [open , setOpen] = useState(false)

  return ( 
    <>
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

        <div className="flex items-center  gap-3">
          <LuLeaf className="text-2xl" />
          <p className="text-2xl">The Seed Hub</p>
        </div>

        <button className="hidden btn-regular">
          Book a tour
          <span class="h-fit">→</span>
        </button>
      </div>
      <ResponsiveMenu open={open} setOpen={setOpen} />
      </>
  );
};

export default Navbar;