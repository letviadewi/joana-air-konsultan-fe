import React from "react";
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

function Navbar() {
  return (
    <nav className="flex w-full h-[86px] justify-center relative text-white">
      <div className="flex w-full max-w-[80%] justify-between px-8 items-center">
        {/* Kolom Kiri */}
        <div className="flex flex-col gap-4">
          <p>Jl. Salemba Tengah No.35C,</p>
          <p>Kota Jakarta Pusat</p>
          <div className="flex items-center gap-4 font-thin text-[20px]">
            {menu1.map((m: any, index: any) => (
              <Link key={index} href={m.path} className="hover:text-blue-900">
                {m.menu}
              </Link>
            ))}
          </div>
        </div>

        {/* Logo di Tengah */}
        <div>
          <img
            src="images/logo/logo.png"
            alt="logo"
            className="w-32 h-32 rounded-full"
          />
        </div>

        {/* Kolom Kanan */}
        <div className="flex flex-col gap-4 text-right">
          <p>Telepon : +62 852-1083-4732</p>
          <p>Email : notaris.juanitalr@gmail.com</p>
          <div className="flex items-center gap-4 justify-start font-thin text-[20px]">
            {menu2.map((m: any, index: any) => (
              <Link key={index} href={m.path} className="hover:text-blue-900">
                {m.menu}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
