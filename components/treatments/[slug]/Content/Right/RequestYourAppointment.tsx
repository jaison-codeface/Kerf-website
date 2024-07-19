"use client";
import { NormalBtn } from "@/ui/buttons";
import axios from "axios";
import React, { HTMLInputTypeAttribute, useMemo, useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

type Props = {
  departmentsTaxonomies: DepartmentsTaxonomiesType;
};

type FormType = {
  name?: string;
  phone?: string;
  email?: string;
  department?: string;
  specialist?: string;
  city?: string;
};

const initialState: FormType = {
  city: "",
  department: "",
  email: "",
  name: "",
  phone: "",
  specialist: "",
};

const RequestYourAppointment = ({ departmentsTaxonomies }: Props) => {
  const [formValues, setFormValues] = useState<FormType>(initialState);
  const [isSelectedDepartment, setIsSelectedDepartment] = useState(
    departmentsTaxonomies.departmentsTaxonomies?.edges[0]?.node.name
  );

  const departments = departmentsTaxonomies.departmentsTaxonomies.edges.map(
    (i) => i.node.name
  );
  const specialists = useMemo(
    () =>
      departmentsTaxonomies.departmentsTaxonomies.edges
        .find((item) => item.node.name === isSelectedDepartment)
        ?.node.doctors.nodes.map((i) => i.title),
    [departmentsTaxonomies.departmentsTaxonomies.edges, isSelectedDepartment]
  );

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    var elements = document.querySelectorAll<HTMLInputElement>(
      'input[name="department"], input[name="specialist"]'
    );

    let formDataToSend = new FormData();

    for (const key in formValues) {
      // @ts-ignore
      formDataToSend.append(`your-${key}`, formValues[key]);
    }
    console.log(formDataToSend.values());

    try {
      const response = await axios.post(
        "https://cfuat.in/kerf/wp-json/cf7/v1/forms/254/feedback",
        formDataToSend,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
          // auth: {
          //   username: "Contact Form 7 API Access",
          //   password: "XWIS 7wB2 7ZAx lAL0 Ahlo YG4E",
          // },
        }
      );
      console.log(response.data);

      elements.forEach((item) => (item.value = ""));
      setFormValues(initialState);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <form
      action=""
      name="contact-form"
      onSubmit={handleSubmit}
      className="w-full flex items-center justify-center flex-col bg-[#f4f4f6] px-4 pb-5 rounded-2xl gap-6">
      <h2
        data-aos="fade-up"
        className="text-base font-semibold text-center py-5 bg-black/10 rounded-b-xl px-5">
        Request Your Appointment
      </h2>
      <div className="flex flex-col gap-4 w-full">
        <Input
          title="name"
          required
          value={formValues.name!}
          onChange={(e) =>
            setFormValues({ ...formValues, name: e.target.value })
          }
        />
        <Input
          title="phone"
          type="tel"
          required
          value={formValues.phone!}
          onChange={(e) =>
            setFormValues({ ...formValues, phone: e.target.value })
          }
        />
        <Input
          title="email"
          value={formValues.email!}
          onChange={(e) =>
            setFormValues({ ...formValues, email: e.target.value })
          }
        />
        <SelectInput
          title="department"
          required
          placeholder="select department"
          onChange={(e) =>
            setFormValues({ ...formValues, department: e.target.value })
          }
          options={departments!}
        />
        <SelectInput
          title="specialist"
          placeholder="select specialist"
          options={specialists!}
          onChange={(e) =>
            setFormValues({ ...formValues, specialist: e.target.value })
          }
        />
        <Input
          title="City"
          value={formValues.city!}
          onChange={(e) =>
            setFormValues({ ...formValues, city: e.target.value })
          }
        />
      </div>

      <NormalBtn
        // @ts-ignore
        type="submit"
        className="bg-black text-sm px-8 py-3  font-bold rounded-lg capitalize bg-secondary border-secondary text-white  duration-300 hover:opacity-75">
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
  onChange,
  value,
}: {
  title: string;
  required?: boolean;
  placeholder?: string;
  type?: HTMLInputTypeAttribute;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) => {
  return (
    <label className="w-full flex flex-col gap-0.5  ">
      <p
        data-aos="fade-up"
        className={`${
          required && "after:content-['*'] after:text-red-500"
        }  capitalize text-sm font-medium`}>
        {title}
      </p>
      <input
        data-aos="fade-up"
        required={required}
        type={type}
        name={title}
        id=""
        onChange={onChange}
        value={value}
        placeholder={placeholder ? placeholder : title}
        className="px-4 py-4 bg-white outline-none capitalize  border border-gray-200 rounded-lg   text-sm font-medium"
      />
    </label>
  );
};
const SelectInput = ({
  title,
  required,
  placeholder,
  options,
  onChange,
}: {
  title: string;
  required?: boolean;
  placeholder?: string;
  options: string[];
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) => {
  const [value, setValue] = useState("");
  const [toggle, setToggle] = useState(false);

  const handleClick = (item: string) => {
    if (value !== item) {
      setToggle(false);
      setValue(item);
    } else {
      setToggle(false);
      setValue("");
    }
  };

  return (
    <label className="w-full flex flex-col gap-0.5 relative z-auto ">
      <p
        data-aos="fade-up"
        className={`${
          required && "after:content-['*'] after:text-red-500"
        }  capitalize text-sm font-medium`}>
        {title}
      </p>
      <input
        data-aos="fade-up"
        required={required}
        name={title}
        id=""
        // disabled

        defaultValue={value}
        onChange={onChange}
        onMouseDown={() => setToggle((prev) => !prev)}
        placeholder={placeholder ? placeholder : title}
        className="px-4 py-4 bg-white outline-none capitalize  border border-gray-200 rounded-lg   text-sm font-medium cursor-pointer caret-transparent"
      />
      <svg
        className={`w-2.5 h-2.5 ms-2.5 absolute right-4 top-10 pointer-events-none ${
          toggle && "rotate-180"
        } duration-300`}
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 10 6">
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="m1 1 4 4 4-4"
        />
      </svg>
      <div
        className={`absolute z-50 w-full top-20 left-0 bg-white   flex flex-col border-gray-200 rounded-lg  ${
          toggle
            ? "max-h-[200px] overflow-y-scroll py-2 border "
            : "max-h-0 overflow-hidden"
        }`}>
        {options
          ? options.map((item, idx) => (
              <p
                key={idx}
                onClick={() => handleClick(item)}
                className={`text-sm font-medium capitalize hover:bg-gray-200 cursor-pointer duration-300 px-4 py-2 ${
                  value === item && "bg-gray-200"
                }`}>
                {item}
              </p>
            ))
          : ""}
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
        }  capitalize text-base font-medium`}>
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
