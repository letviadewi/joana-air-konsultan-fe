import React from "react";

export default function EnquiryTextSection() {
  return (
    <div>
      <div>
        <img src="/images/logo/logo.png" alt="logo" className="w-28 h-28" />
        <p className="text-2xl font-normal text-blue-800 mt-4">Enquiry Form</p>
        <p className="text-lg font-light text-gray-500 mt-6">
          Different fees may apply depending on the type and amount of documents
          you have for notarisation. Please use the form on the right to get a
          quote or ask our notaries a question.
        </p>
        <p className="text-lg font-light text-gray-500 mt-6">
          You can also e-mail our notaries at info@vpnotaries.co.uk or phone us
          on 020 3668 6626. We look forward to hearing from you.
        </p>
      </div>
    </div>
  );
}
