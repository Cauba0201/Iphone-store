/* eslint-disable react/no-unescaped-entities */
import React from "react";
import FooterList from "./FooterList";
import Link from "next/link";
import Container from "../Container";
import {
  FaFacebook,
  FaInstagramSquare,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-slate-700 text-slate-200 text-sm mt-16">
      <Container>
        <div className="flex flex-col md:flex-row justify-between pt-16 pb-8">
          <FooterList>
            <h3 className="text-base font-bold">Shop Categories</h3>
            <Link href={"#"}>Phone</Link>
            <Link href={"#"}>Laptops</Link>
            <Link href={"#"}>Desktops</Link>
            <Link href={"#"}>Watches</Link>
            <Link href={"#"}>Tvs</Link>
            <Link href={"#"}>Accessories</Link>
          </FooterList>
          <FooterList>
            <h3 className="text-base font-bold">Cusormer Service</h3>
            <Link href={"#"}>Contract Us</Link>
            <Link href={"#"}>Shipping Pollicy</Link>
            <Link href={"#"}>Return and Exchanges</Link>
            <Link href={"#"}>Watches</Link>
            <Link href={"#"}>FAQs</Link>
          </FooterList>
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-base font-bold">About Us</h3>
            <p>
              At our electronics store, we are dedicated to providing the latest
              and greatest devices and accessories to our custormers. With a
              wide selection of phones, Tvs, Laptops, Watches, and accessories.
            </p>
            <p>
              &copy; {new Date().getFullYear()} An'Store. All rights reserved
            </p>
          </div>
          <FooterList>
            <h3 className="text-base font-bold">Follow Us</h3>
            <div className="flex gap-2">
              <Link href={"#"}>
                <FaFacebook size={24} />
              </Link>
              <Link href={"#"}>
                <FaInstagramSquare size={24} />
              </Link>
              <Link href={"#"}>
                <FaTwitter size={24} />
              </Link>
              <Link href={"#"}>
                <FaYoutube size={24} />
              </Link>
            </div>
          </FooterList>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
