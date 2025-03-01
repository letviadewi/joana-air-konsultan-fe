import React from "react";

function StartConversation() {
  return (
    <section className="flex gap-8 justify-center items-center flex-col p-48 text-center">
      <div>
        <div className="text-[48px]">Start Conversation</div>
        <div className="flex items-center justify-center gap-2 mt-8">
          <span className="border-[1px] border-gray-200 w-44" />
          <p className="text-lg">Contact us now to get started!</p>
          <span className="border-[1px] border-gray-200 w-44" />
        </div>
      </div>
      <div className="flex justify-center">
        <button className="bg-blue-900 text-white py-4 px-16 text-2xl mt-8 hover:bg-blue-950">
          Contact Us
        </button>
      </div>
    </section>
  );
}

export default StartConversation;
