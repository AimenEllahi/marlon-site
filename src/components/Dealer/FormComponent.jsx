import React, { useState } from "react";
import Dropdown from "./Dropdown";

export default function FormComponent({ fields, handleButton, buttonText }) {
  return (
    <div className="bg-gray-100 w-[97%] h-full mx-auto py-6 border-t-2 rounded-md">
      <form
        className="grid grid-cols-1 md:grid-cols-2 gap-4"
        onSubmit={(e) => {
          e.preventDefault();
          handleButton();
        }}
      >
        {fields.map((field, index) => (
          <div key={index} className="mb-4">
            {field.type !== "dropdown" ? (
              <>
                <label className="block text-md font-medium text-gray-700">
                  {field.label}{" "}
                  {field.required && <span className="text-gray-700">*</span>}
                </label>
                {field.type === "textarea" ? (
                  <textarea
                    className="form-input mt-1 block w-full border rounded-md p-2"
                    rows="4"
                    placeholder={field.placeholder}
                    onChange={field.onChange}
                    value={field.value}
                    required={field.required}
                  ></textarea>
                ) : (
                  <input
                    type={field.type || "text"}
                    className="form-input mt-1 block w-full border rounded-md p-2"
                    placeholder={field.placeholder}
                    onChange={field.onChange}
                    value={field.value}
                    required={field.required}
                  />
                )}
              </>
            ) : (
              <Dropdown
                label={field.label}
                options={field.options}
                onChange={field.onChange}
                value={field.value}
                required={field.required}
              />
            )}
          </div>
        ))}

        <div className="col-span-2 mt-4">
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-md"
          >
            {buttonText}
          </button>
        </div>
      </form>
    </div>
  );
}
