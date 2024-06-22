"use client";

import useStore from "@/libs/store";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  data: UtilitiesType;
};

const UtilitiesProvider = ({ children, data }: Props) => {
  const setUtilities = useStore(store=> store.setUtilities);
  setUtilities(data);

  return children;
};

export default UtilitiesProvider;
