const HideBookAppointment = (slug: string | string[]) => {
  return slug.includes("speech-therapy") ? false : true;
};

export default HideBookAppointment;
