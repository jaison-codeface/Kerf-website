"use client";
import { useParams } from "next/navigation";

const HideBookAppointment = () => {
  const params = useParams();
  
  return params.slug.includes("speech-therapy") ? false : true;
};

export default HideBookAppointment;
