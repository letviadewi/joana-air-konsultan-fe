import React, { ReactNode } from "react";
import Navbar from "./navbar";

interface MainDashboardProps {
  children: ReactNode;
  backgroundImage: string
}

export function MainDashboard({ backgroundImage, children }: MainDashboardProps) {
  return (
    <div
      className="relative min-h-screen bg-cover bg-center flex items-center justify-center p-6"
      style={{ backgroundImage: `url('${backgroundImage}')` }}
    >
      <div className="absolute inset-0 bg-black/50">
        <div className="relative top-12 z-10 text-white">
          <Navbar />
          <div className="flex flex-col justify-center">
            {children} {/* Konten yang bisa diganti */}
          </div>
        </div>
      </div>
    </div>
  );
}
