import RelatedTreatments from "./RelatedTreatments";
import RequestYourAppointment from "./RequestYourAppointment";

type Props = {
  relatedTreatmentsData: any[];
};
const Right = ({ relatedTreatmentsData }: Props) => {
  return (
    <div className=" w-full flex flex-col sticky top-[20px] z-50 gap-10">
      <RequestYourAppointment />
      <RelatedTreatments relatedTreatmentsData={relatedTreatmentsData} />
    </div>
  );
};

export default Right;
