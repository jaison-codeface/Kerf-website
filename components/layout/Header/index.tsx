import Image from "next/image";
import React, { useState } from "react";
import Link from "next/link";
import { NormalBtn } from "@/ui/buttons";
import NavMobile from "./NavMobile";
import Top from "./Top";
import Bottom from "./Bottom";
import SectionWrapper from "@/components/SectionWrapper";
import useStore from "@/libs/store";

const Header = () => {
  const { utilities } = useStore();

  const treatments = utilities.treatments.treatmentCategorys.nodes.map(
    (item) => {
      const dropDown = {
        title: item.name,
        links: item.treatments.nodes.map((i) => {
          const l = {
            title: i.title,
            link: `/treatments/${i.slug}`,
          };
          return l;
        }),
      };
      return dropDown;
    }
  );
  const departments = utilities.departments.departmentsTaxonomies.edges.map(
    (item) => {
      const singleDropDown = {
        title: item.node.name,
        link: `/departments/${item.node.slug}`,
      };
      return singleDropDown;
    }
  );

  const links = [
    {
      title: "Home",
      link: "/",
    },
    {
      title: "About",
      link: "/about_us",
    },
    {
      title: "Treatments",
      link: "",
      dropDown: treatments,
    },
    {
      title: "Departments",
      link: "",
      singleDropDown: departments,
    },
    {
      title: "Carers",
      link: "",
    },

    {
      title: "Contact Us",
      link: "/contact_us",
    },
  ];
  return (
    <nav className="w-full absolute top-0 flex flex-col z-50 overflow-x-clip">
      <Top />
      <SectionWrapper classBottom="items-center justify-between gap-20 py-4">
        <Bottom links={links} />
        {/* mobile  */}

        <NavMobile links={links} />
      </SectionWrapper>
    </nav>
  );
};

export default Header;
