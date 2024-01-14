import React from "react";

export default function Dropdown({ label, options = [], onChange, value }) {
  return (
    <div className='mt-1'>
      <label className='block text-md font-medium text-gray-700'>{label}</label>
      <select
        className='form-select block w-full border rounded-md p-2 dark:text-slate-200'
        onChange={onChange}
        value={value}
      >
        <option value='' disabled className='text-gray-400'>
          Select {label}
        </option>
        {options?.map((option) => (
          <option
            key={option.value}
            className='dark:text-slate-200'
            value={option.value}
          >
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}
