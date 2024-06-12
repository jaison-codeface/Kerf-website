import RelatedTreatments from "./RelatedTreatments";
import RequestYourAppointment from "./RequestYourAppointment";

const Right = () => {
  return (
    <div className=" w-full flex flex-col sticky top-[20px] z-50 gap-10">
      <RequestYourAppointment />
      <RelatedTreatments />
    </div>
  );
};

export default Right;
