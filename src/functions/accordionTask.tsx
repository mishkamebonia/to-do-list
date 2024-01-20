interface accordionProps {
  activeAccordion: string | null;
  setActiveAccordion: React.Dispatch<React.SetStateAction<string | null>>;
}

export const toggleAccordion = (
  id: string,
  { activeAccordion, setActiveAccordion }: accordionProps
) => {
  if (id === activeAccordion) {
    setActiveAccordion(null);
  } else {
    setActiveAccordion(id);
  }
};
