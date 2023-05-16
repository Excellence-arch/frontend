import React from "react";
import { Header } from "./Header";
import { Button } from "../../components/Button";
import { Footer } from "./Footer";

export const HomePage = () => {
  return (
    <div className="">
      <Header />
      <div className="flex justify-center items-center h-screen">
        <Button
          title="SOS"
          btnstyles="bg-button shadow rounded-full text-5xl w-[5em] md:w-[7em] h-[5em] md:h-[7em] text-center"
        />
      </div>
      <Footer />
    </div>
  );
};
