"use client";
import { NormalBtn } from "@/ui/buttons";
import React, { HTMLInputTypeAttribute, useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const RequestYourAppointment = () => {
  return (
    <form
      action=""
      className="w-full flex items-center justify-center flex-col bg-[#f4f4f6] px-4 py-5 rounded-2xl gap-6"
    >
      <h2 className="text-base font-semibold text-center">Request Your Appointment</h2>
      <div className="flex flex-col gap-4 w-full">
        <Input title="name" required />
        <Input title="phone" type="tel" required />
        <Input title="email" />
        <SelectInput
          title="Department"
          required
          placeholder="select department"
          options={["sdsdsds", "asfdsfsf", "fdfaf"]}
        />
        <SelectInput
          title="specialist"
          placeholder="select specialist"
          options={["sdsdsds", "asfdsfsf", "fdfaf"]}
        />
        <Input title="City" />
      </div>
      <NormalBtn className="bg-black text-sm">
        Request Your Application
      </NormalBtn>
    </form>
  );
};

const Input = ({
  title,
  required,
  placeholder,
  type = "text",
}: {
  title: string;
  required?: boolean;
  placeholder?: string;
  type?: HTMLInputTypeAttribute;
}) => {
  return (
    <label className="w-full flex flex-col gap-0.5  ">
      <p
        className={`${
          required && "after:content-['*'] after:text-red-500"
        }  capitalize text-sm font-medium`}
      >
        {title}
      </p>
      <input
        required={required}
        type={type}
        name={title}
        id=""
        placeholder={placeholder ? placeholder : title}
        className="px-4 py-2 bg-white outline-none capitalize  border border-gray-200 rounded-lg   text-sm font-medium"
      />
    </label>
  );
};
const SelectInput = ({
  title,
  required,
  placeholder,
  options,
}: {
  title: string;
  required?: boolean;
  placeholder?: string;
  options: string[];
}) => {
  const [value, setValue] = useState("");
  const [toggle, setToggle] = useState(false);

  return (
    <label className="w-full flex flex-col gap-0.5 relative z-auto ">
      <p
        className={`${
          required && "after:content-['*'] after:text-red-500"
        }  capitalize text-sm font-medium`}
      >
        {title}
      </p>
      <input
        required={required}
        name={title}
        id=""
        // disabled
        value={value}
        onMouseDown={() => setToggle((prev) => !prev)}
        placeholder={placeholder ? placeholder : title}
        className="px-4 py-2 bg-white outline-none capitalize  border border-gray-200 rounded-lg   text-sm font-medium cursor-pointer caret-transparent"
      />
      <svg
        className={`w-2.5 h-2.5 ms-2.5 absolute right-4 top-10 pointer-events-none ${
          toggle && "rotate-180"
        } duration-300`}
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 10 6"
      >
        <path
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="m1 1 4 4 4-4"
        />
      </svg>
      <div
        className={`absolute z-50 w-full top-20 left-0 bg-white   flex flex-col border-gray-200 rounded-lg  ${
          toggle
            ? "max-h-[200px] overflow-y-scroll py-2 border "
            : "max-h-0 overflow-hidden"
        }`}
      >
        {options.map((item, idx) => (
          <p
            key={idx}
            onClick={() => {
              if (value !== item) {
                setToggle(false);
                setValue(item);
              } else {
                setToggle(false);
                setValue("");
              }
            }}
            className={`text-sm font-medium capitalize hover:bg-gray-200 cursor-pointer duration-300 px-4 py-2 ${
              value === item && "bg-gray-200"
            }`}
          >
            {item}
          </p>
        ))}
      </div>
    </label>
  );
};

const PhoneNumberInput = ({
  title,
  required,
}: {
  title: string;
  required?: boolean;
}) => {
  return (
    <label className="w-full flex flex-col gap-0.5  ">
      <p
        className={`${
          required && "after:content-['*'] after:text-red-500"
        }  capitalize text-base font-medium`}
      >
        {title}
      </p>
      <PhoneInput
        // country={"ae"}
        containerClass="px-4 py-2 bg-white outline-none capitalize  border border-gray-200 rounded-md !text-base !font-primary !font-medium"
        inputClass="!outline-none !border-none !h-full !text-base !font-primary !font-medium"
        buttonClass="!bg-transparent !border-transparent !border-r-gray-200 left-[6px] pr-2"
        dropdownClass="border !border-gray-200 !rounded-lg !shadow-none"
        placeholder="+971 50 123 4567"
      />
    </label>
  );
};

export default RequestYourAppointment;
