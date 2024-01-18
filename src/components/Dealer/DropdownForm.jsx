import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import FormComponent from "./FormComponent";

export default function DropdownForm({
  handleFormDataChange,
  handleProductDataChange,
  contactFields,
  productFields,
  isContactForm,
}) {
  const [isFormVisible, setIsFormVisible] = useState(false);

  const handleToggle = () => {
    setIsFormVisible(!isFormVisible);
  };

  return (
    <div className='relative w-full bg-gray-100 text-gray-700'>
      <div className='flex flex-col justify-between p-2 border cursor-pointer rounded-lg'>
        <div className='flex justify-between items-center p-5'>
          <span className='text-2xl'>
            {isContactForm ? "Contact Information" : "Product Information"}
          </span>
          <div onClick={handleToggle} className='bg-white p-4 rounded-md'>
            {isFormVisible ? <ChevronUp /> : <ChevronDown />}
          </div>
        </div>
        {isFormVisible && (
          <div className='flex flex-col'>
            {isContactForm ? (
              <FormComponent
                handleChange={handleFormDataChange}
                fields={contactFields}
              />
            ) : (
              <FormComponent
                handleChange={handleProductDataChange}
                fields={productFields}
              />
            )}
          </div>
        )}
      </div>
    </div>
  );
}
