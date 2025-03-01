import React from "react";
import { MainDashboard } from "@/components/main-dashboard";
import Promotion from "./promotion-section";
import Quotes from "./quote-section";
import StartConversation from "../../components/start-conversation";
import Footer from "@/components/footer";

const Beranda: React.FC = () => {
  return (
    <>
      <MainDashboard backgroundImage="/images/background/bg-city-3.jpg">
        <div className="max-w-[882px] mt-40 font-semibold text-center mx-auto">
          <div className="text-[48px]">NOTARY SERVICE MADE SIMPLE</div>
          <div className="text-[18px] mt-2">
            Joana Air Konsultan. Modern and professional.
          </div>
        </div>
        <div className="flex justify-center">
          <button className="bg-blue-900 py-4 px-16 text-2xl mt-8 hover:bg-blue-950">
            Get in touch
          </button>
        </div>
      </MainDashboard>
      <div className="w-full flex flex-col justify-center">
        <Promotion />
      </div>
      <div>
        <Quotes />
      </div>
      <div>
        <StartConversation />
      </div>
      <Footer />
    </>
  );
};

export default Beranda;
