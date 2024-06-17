import ProgramTypes from "./ProgramType";
import ProgramImg from "../Assets/logo3.png";
import ProgramTimeline from "./ProgramTimeline";
import Contact from "./Contact";
import FlashMessage from "./FlashMessage";
import React from "react";

export default function Programs() {
  return (
    <div>
      <img src={ProgramImg} className="lg:w-4/5 m-auto cursor-pointer"></img>
      <ProgramTimeline></ProgramTimeline>
      <FlashMessage></FlashMessage>
      <ProgramTypes></ProgramTypes>
      <Contact></Contact>
    </div>
  );
}
