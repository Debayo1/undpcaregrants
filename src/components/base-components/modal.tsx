import { useEffect } from "react";

export const LoadModal = () => {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);
  return (
    <div className="fixed top-0 right-0 left-0 bottom-0 bg-dark-200/50 backdrop-blur-sm flex items-center justify-center z-[9999]">
      <span className="loader44"></span>;
    </div>
  );
};
