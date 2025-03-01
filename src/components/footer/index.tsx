import React from "react";
import {
  TiSocialFacebook,
  TiSocialLinkedin,
  TiSocialInstagram,
  TiSocialTwitter,
} from "react-icons/ti";
import Link from "next/link";

const menu1 = [
  {
    menu: "Home",
    path: "/",
  },
  {
    menu: "Service",
    path: "/",
    submenu: [
      {
        name: "Submenu 1",
        path: "/submenu 1",
      },
    ],
  },
  {
    menu: "About",
    path: "/contact-us",
  },
];

const menu2 = [
  {
    menu: "Our Notaries",
    path: "/",
  },
  {
    menu: "Locations",
    path: "/",
  },
  {
    menu: "Contact",
    path: "/contact-us",
  },
];

function Footer() {
  return (
    <footer className="py-4">
      <div className="flex max-w-[981px] mx-auto justify-between items-center">
        <div>
          <img src="/images/logo/logo.png" alt="logo" className="w-24 h-24" />
          {/* <p>Stay Connected</p> */}
        </div>
        <div>
          <p>Jl. Salemba Tengah No.35C,</p>
          <p>Kota Jakarta Pusat</p>
        </div>
        <div>
          <p>Telepon : +62 852-1083-4732</p>
          <p>Email : notaris.juanitalr@gmail.com</p>
        </div>
        <div>
          <p>Social Media</p>
          <div className="flex gap-4 mt-2">
            <div className="border-[1px] border-blue-900 rounded-full p-1">
              <TiSocialFacebook size={22} />
            </div>
            <div className="border-[1px] border-blue-900 rounded-full p-1">
              <TiSocialLinkedin size={22} />
            </div>
            <div className="border-[1px] border-blue-900 rounded-full p-1">
              <TiSocialInstagram size={22} />
            </div>
            <div className="border-[1px] border-blue-900 rounded-full p-1">
              <TiSocialTwitter size={22} />
            </div>
          </div>
        </div>
      </div>
      {/* Bagian Menu & Copyright ke tengah */}
      <div className="flex flex-col items-center justify-center mt-4">
        <div>
          <div className="flex items-center gap-4 font-light text-[20px]">
            {menu1.map((m: any, index: any) => (
              <Link
                key={index}
                href={m.path}
                className="hover:text-blue-900 hover:border-b-[1px] border-blue-900"
              >
                {m.menu}
              </Link>
            ))}
            {menu2.map((m: any, index: any) => (
              <Link
                key={index}
                href={m.path}
                className="hover:text-blue-900 hover:border-b-[1px] border-blue-900"
              >
                {m.menu}
              </Link>
            ))}
          </div>
        </div>
        <div className="mt-2 text-xs">
          © 2025 Vanner Perez Notaries. All Rights Reserved. Terms of Business.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
