import toast from "react-hot-toast";

export const addItemToast = (item: string) => {
  toast.success(`Super, ${item} erfolgreich hinzugefügt!`, {
    style: {
      fontSize: "14px",
    },
  });
};
