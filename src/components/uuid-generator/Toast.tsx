import { useEffect } from "react";

interface Props {
  show: boolean;
  setShow: (show: boolean) => void;
  message: string;
  duration?: number;
}

const Toast = ({ show, setShow, message, duration = 1500 }: Props) => {
  useEffect(() => {
    const id = setTimeout(() => {
      setShow(false);
    }, duration);

    return () => clearTimeout(id);
  });

  if (!show) return;

  return (
    <div>
      <div className="fixed left-1/2 -translate-x-1/2 bottom-15 bg-green-500 border border-white px-5 py-5 w-[350px] text-center">
        {message}
      </div>
    </div>
  );
};

export default Toast;
