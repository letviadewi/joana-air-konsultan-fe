import React from 'react';
import { MainDashboard } from '@/components/main-dashboard';

const Beranda: React.FC = () => {
  return (
    <MainDashboard backgroundImage="/images/background/bg-city-3.jpg">
      <div className="max-w-[800px] mt-44 font-semibold text-center mx-auto">
        <div className="text-[40px]">NOTARY SERVICE MADE SIMPLE</div>
        <div className="text-[18px] mt-2">
          Joana Air Konsultan. Modern and professional.
        </div>
      </div>
      <div className="flex justify-center">
        <button className="bg-blue-900 py-4 px-6 mt-8">Get in touch</button>
      </div>
    </MainDashboard>
  );
};

export default Beranda;