import React, { useId } from "react";

const Select = ({ options=[], label, className ='', ...props }, ref) => {
  const id = useId();
  return (
    <div className="w-full">
      {label && <label htmlFor={id} className={`${className}`}></label>}
      <select
        name=""
        id={id}
        {...props}
        ref={ref}
        className={`px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-300 w-full ${className}`}
      >
        {options?.map((option)=>(
            <options key={option}>
                {option}
            </options>
        ))}
      </select>
    </div>
  );
};

export default React.forwardRef(Select);
