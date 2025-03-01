import { MainDashboard } from "@/components/main-dashboard";
import React from "react";
import EnquiryTextSection from "./enquiry-text";
import Form from "./form";
import StartConversation from "@/components/start-conversation";
import Footer from "@/components/footer";

function ContactUsSection() {
  return (
    <>
      <MainDashboard backgroundImage="/images/background/jkt-bg.jpg">
        <div className="max-w-[882px] mt-52 font-semibold text-center mx-auto">
          <div className="text-[48px]">GET A QUOTE</div>
        </div>
      </MainDashboard>
      <div className="flex w-full gap-24 py-16 px-64">
        <div className="w-[20%]">
          <EnquiryTextSection />
        </div>
        <div className="w-[80%]">
          <Form />
        </div>
      </div>
      <div>
        <StartConversation />
      </div>
      <Footer />
    </>
  );
}

export default ContactUsSection;
