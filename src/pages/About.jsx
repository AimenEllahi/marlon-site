import React from "react";
import IntroSection from "../components/About/IntroSection";
import Team from "../components/About/Team";
import JoinUs from "../components/About/Us";

export default function About() {
  return (
    <div>
      <IntroSection />
      <Team />
      <JoinUs
        image="/Joinusimg.jpg"
        heading="JOIN US"
        description="Want to be a part of a great team who goes the extra mile?"
        buttonText="Check Open Positions"
      />
    </div>
  );
}
