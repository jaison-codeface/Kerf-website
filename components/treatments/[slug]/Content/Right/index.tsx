"use client";
import { useParams } from "next/navigation";
import RelatedTreatments from "./RelatedTreatments";
import RequestYourAppointment from "./RequestYourAppointment";

type Props = {
  relatedTreatmentsData: any[];
};
const Right = ({ relatedTreatmentsData }: Props) => {
  const params = useParams();

  console.log(params);

  const hideBookAppointment = () => {
    return params.slug.includes("speech-therapy") ? false : true;
  };
  return (
    <div className=" w-full flex flex-col sticky top-[20px] z-50 gap-10">
      {relatedTreatmentsData && (
        <RelatedTreatments relatedTreatmentsData={relatedTreatmentsData} />
      )}

      {hideBookAppointment() && <RequestYourAppointment />}
    </div>
  );
};

export default Right;
