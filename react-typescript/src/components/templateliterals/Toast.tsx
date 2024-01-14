type HorizontalPosition = "left" | "right" | "center";
type VerticalPosition = "top" | "left" | "center";

type ToastProps = {
  position: | Exclude<`${HorizontalPosition}-${VerticalPosition}`, 'center-center'> | 'center'
};
export const Toast = ({ position }: ToastProps) => {
  return <div>Toast Notification Position -{position}</div>;
};
