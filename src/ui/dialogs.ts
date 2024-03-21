import Swal from "sweetalert2";
export const showSuccessDialog = (title: string, text: string) => {
  return Swal.fire({
    title,
    text,
    icon: "success",
  });
};
export const showErrorDialog = (title: string, text: string) => {
  return Swal.fire({
    title,
    text,
    icon: "error",
  });
};
const dialogs = { success: showSuccessDialog, error: showErrorDialog };
export default dialogs;
