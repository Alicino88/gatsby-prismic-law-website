import * as React from "react";
import { useState } from "react";
import "./layout.css";
import ContactsNav from "./ContactsNav";
import MenuNav from "./MenuNav";
import MobileNav from "./MobileNav";
import Footer from "./Footer";
import { Link } from "gatsby";

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
      <div className="bg-blue-light">
        <div className="text-xs sm:text-sm md:flex justify-between items-center py-6 max-w-screen-xl mx-auto">
          <div className="px-5 text-blue-dark">
            © Alice Moretti - {new Date().getFullYear()} | Built with
            {` `}
            <a href="https://www.gatsbyjs.com">Gatsby</a> | Icons by Flaticon
          </div>
          <div className="flex px-5 mt-3 md:mt-0 justify-center">
            <Link
              className="mr-3 cursor-pointer text-blue-dark underline"
              to="/privacy-policy"
            >
              Privacy policy
            </Link>
            <Link
              className="cursor-pointer text-blue-dark underline"
              to="/cookie-policy"
            >
              Cookie policy
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Layout;
