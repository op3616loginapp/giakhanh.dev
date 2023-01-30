"use client";

import { Toaster } from "react-hot-toast";

const CustomToaster = () => {
  return (
    <Toaster
      position="bottom-right"
      toastOptions={{
        className: "!bg-accent-100 !text-secondary !border !border-accent-200",
      }}
    />
  );
};

export default CustomToaster;
