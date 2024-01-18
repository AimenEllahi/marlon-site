import React from "react";
import Introduction from "../components/Ambassador/Introduction";
import Us from "../components/About/Us";

export default function Ambassador() {
  //methods
  return (
    <div>
      <Introduction />
      <Us
        image="/Joinusimg.jpg"
        heading="JOIN US"
        description="Think you have what it takes? Drop us a line and lets talk!"
        buttonText="Be an Ambassador"
      />
    </div>
  );
}
