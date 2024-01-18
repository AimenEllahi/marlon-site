import React from "react";
import Us from "../components/About/Us";
import Community from "../components/Gallery/cOMMUNITY.JSX";

export default function Gallery() {
  return (
    <div>
      <Community />
      <Us
        image="/Submission.png"
        heading="SEND US YOUR PICTURES"
        description="Want some free Marlon swag? Send us your pictures!?"
        buttonText="Let’s Do It!"
      />
    </div>
  );
}
