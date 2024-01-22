export const toggleAccordion = (
  id: string,
  activeAccordion: string | null,
  setActiveAccordion: React.Dispatch<React.SetStateAction<string | null>>
) => {
  if (id === activeAccordion) {
    setActiveAccordion(null);
  } else {
    setActiveAccordion(id);
  }
};
