"use client";
import HideBookAppointment from "@/libs/hooks/hideBookAppointment";
import RelatedTreatments from "./RelatedTreatments";
import RequestYourAppointment from "./RequestYourAppointment";
import { useParams } from "next/navigation";

type Props = {
  relatedTreatmentsData: any[];
};
const Right = ({ relatedTreatmentsData }: Props) => {
  const params = useParams();
  return (
    <div className=" w-full flex flex-col sticky top-[20px] z-50 gap-10">
      {relatedTreatmentsData && (
        <RelatedTreatments relatedTreatmentsData={relatedTreatmentsData} />
      )}

      {HideBookAppointment(params.slug) && <RequestYourAppointment />}
    </div>
  );
};

export default Right;
