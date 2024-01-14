import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import FormComponent from "./FormComponent";

export default function DropdownForm({
  heading,
  contactFields,
  productFields,
}) {
  const [isContactFormVisible, setIsContactFormVisible] = useState(true);
  const [isProductFormVisible, setIsProductFormVisible] = useState(false);

  const [isFormVisible, setIsFormVisible] = useState(false);

  const handleToggle = () => {
    setIsFormVisible(!isFormVisible);
  };

  const handleBack = () => {
    setIsContactFormVisible(true);
    setIsProductFormVisible(false);
  };

  const handleContactInfoSubmit = () => {
    setIsContactFormVisible(false);
    setIsProductFormVisible(true);
  };

  return (
    <div className="relative w-full bg-gray-100 text-gray-700">
      <div className="flex flex-col justify-between p-2 border cursor-pointer rounded-lg">
        <div className="flex justify-between items-center p-5">
          <span className="text-2xl">{heading}</span>
          <div onClick={handleToggle} className="bg-white p-4 rounded-md">
            {isFormVisible ? <ChevronDown /> : <ChevronUp />}
          </div>
        </div>
        {isFormVisible && (
          <div className="flex flex-col">
            {isContactFormVisible && (
              <FormComponent
                fields={contactFields}
                handleButton={handleContactInfoSubmit}
                buttonText="Next"
              />
            )}
            {isProductFormVisible && (
              <FormComponent
                fields={productFields}
                handleButton={handleBack}
                buttonText="Back"
              />
            )}
          </div>
        )}
      </div>
    </div>
  );
}
