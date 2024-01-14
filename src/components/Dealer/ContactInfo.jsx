import React, { useState } from "react";
import FormComponent from "./FormComponent";
import icon from "/icon.png";
import DropdownForm from "./DropdownForm";
import { benefitsList, formFields, productFields } from "../../utils/data";

const ListItem = ({ text }) => (
  <li className='flex items-center space-x-2'>
    <img src={icon} alt='Bullet Icon' className='w-4 h-4' />
    <span className='text-xl font-thin'>{text}</span>
  </li>
);

export default function ContactInfo() {
  const [formData, setFormData] = useState({
    businessName: "",
    firstName: "",
    lastName: "",
    website: "",
    country: "",
    zipCode: "",
    address1: "",
    address2: "",
    city: "",
    location: "",
    phone: "",
    alternateNumber: "",
    email: "",
  });
  const [productData, setProductData] = useState({
    modelNumber: "",
    serialNumber: "",
    datePurchased: "",
    dealerName: "",
    dealerCity: "",
    reasonForPurchase: "",
  });
  const [isContactForm, setIsContactForm] = useState(false);

  const handleFormDataChange = (e, field) => {
    setFormData({
      ...formData,
      [field]: e.target.value,
    });
  };
  const handleProductDataChange = (e, field) => {
    setProductData({
      ...productData,
      [field]: e.target.value,
    });
  };

  console.log(formData);

  const isProductFormValid = () => {
    const requiredFields = [
      "modelNumber",
      "serialNumber",
      "datePurchased",
      "dealerName",
      "dealerCity",
    ];
    const missingFields = requiredFields.filter((field) => !productData[field]);

    return missingFields.length === 0;
  };
  const isContactFormValid = () => {
    const requiredFields = [
      "businessName",
      "firstName",
      "lastName",
      "address1",
      "city",
      "location",
      "country",
      "phone",
      "email",
    ];
    const missingFields = requiredFields.filter((field) => !formData[field]);

    return missingFields.length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!isContactFormValid()) {
      alert(`Please fill in the required fields: ${missingFields.join(", ")}`);
    } else {
      // Add your form submission logic here
      console.log("Form submitted!");
    }
  };

  return (
    <div className='w-screen h-full border bg-white'>
      <div className=' -mt-[70%] md:-mt-[22%] w-[90%] m-auto h-[80vh] relative'>
        <img
          src='/benefits.jpeg'
          alt=''
          className='w-full h-full object-cover'
        />
        <div className='absolute top-5 left-0 w-full text-white md:p-12 p-6'>
          <div className='flex flex-col'>
            <h1 className='text-2xl md:text-3xl lg:text-4xl font-bold'>
              Benefits of Being a Marlon Dealer
            </h1>
            <div className='mt-10 flex flex-col md:flex-row'>
              <span className='md:w-1/2 text-sm md:text-base lg:text-lg font-thin md:mr-4'>
                We’ve been listed within the Top 500 Growth-Oriented Companies
                in Canada for the past 4 years, and we’re committed to
                continuing that tradition. With 4 well-positioned Marlon
                locations, you can expect:
              </span>
              <span className='md:w-1/2 flex items-center justify-center mt-4 md:mt-0'>
                <ul className='list-none space-y-3'>
                  {benefitsList.map((text, index) => (
                    <ListItem key={index} text={text} />
                  ))}
                </ul>
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className='w-[90%] m-auto my-10'>
        <DropdownForm
          contactFields={formFields}
          productFields={productFields}
          handleFormDataChange={handleFormDataChange}
          handleProductDataChange={handleProductDataChange}
          isContactForm={isContactForm}
        />
      </div>

      <div className='px-16  m-auto my-10 flex justify-end gap-x-3'>
        {isContactForm && (
          <button
            className='bg-black text-white px-10 py-2 rounded-md'
            onClick={() => {
              setIsContactForm(false);
            }}
          >
            back
          </button>
        )}
        <button
          className='bg-black disabled:opacity-60 disabled:cursor-not-allowed text-white px-10 py-2 rounded-md'
          disabled={
            !isContactForm ? !isProductFormValid() : !isContactFormValid()
          }
          onClick={() => {
            if (isContactForm) {
              handleSubmit();
            } else {
              setIsContactForm(true);
            }
          }}
        >
          {!isContactForm ? "Next" : "Submit"}
        </button>
      </div>
    </div>
  );
}
