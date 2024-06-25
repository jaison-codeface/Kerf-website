import RelatedTreatments from "./RelatedTreatments";
import RequestYourAppointment from "./RequestYourAppointment";

type Props = {
  relatedTreatmentsData: any[];
  departmentsTaxonomies: DepartmentsTaxonomiesType;
};
const Right = ({ relatedTreatmentsData, departmentsTaxonomies }: Props) => {
  return (
    <div className=" w-full flex flex-col sticky top-[20px] z-50 gap-10">
      <RequestYourAppointment departmentsTaxonomies={departmentsTaxonomies} />

      {relatedTreatmentsData && (
        <RelatedTreatments relatedTreatmentsData={relatedTreatmentsData} />
      )}
    </div>
  );
};

export default Right;
