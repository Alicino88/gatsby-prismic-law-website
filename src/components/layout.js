import * as React from "react";
import { useState } from "react";
import "./layout.css";
import ContactsNav from "./ContactsNav";
import MenuNav from "./MenuNav";
import MobileNav from "./MobileNav";
import Footer from "./Footer";

const Layout = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="fixed top-0 w-full z-20">
        <ContactsNav />
        <MenuNav toggle={toggle} isOpen={isOpen} />
        <MobileNav toggle={toggle} isOpen={isOpen} />
      </div>
      <main>{children}</main>
      <Footer />
      <div className="bg-blue-light text-xs sm:text-sm">
        <div className="max-w-screen-xl mx-auto py-4 px-5">
          © Alice Moretti - {new Date().getFullYear()} | Built with
          {` `}
          <a href="https://www.gatsbyjs.com">Gatsby</a> | Icons by Flaticon
        </div>
      </div>
    </>
  );
};

export default Layout;
