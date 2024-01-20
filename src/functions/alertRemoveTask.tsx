export const alertRemoveTask = (
  id: string,
  activeAlert: string | null,
  setActiveAlert: React.Dispatch<React.SetStateAction<string | null>>
) => {
  if (id !== activeAlert) {
    setActiveAlert(id);
  }
};
