import React from "react";

function Promotion() {
  return (
    <div className="py-16 w-full flex flex-col justify-center">
      <div className="text-center max-w-[810px] mx-auto">
        <div className="text-[48px] font-semibold text-blue-900">
          Welcome to the leading firm of notaries in Jakarta
        </div>
        <div className="text-justify text-[24px] font-extralight mt-16 mb-10">
          Modern business needs a modern notary service. Vanner Perez Notaries
          offers cost-effective rates, helpful professionals and services built
          on the best technologies. In other words, everything you – and the
          many firms who’ve switched to us recently – really need.
        </div>
        <div className="text-justify text-[24px] font-extralight mt-16 mb-10">
          With vast experience in notarisation, legalisation and translation of
          a wide range of documents, it’s no surprise we’re London’s
          fastest-growing firm of notaries.
        </div>
        <div className="flex justify-center">
          <img src="/images/logo/logo.png" alt="logo" className="w-28 h-28" />
        </div>
      </div>
    </div>
  );
}

export default Promotion;
