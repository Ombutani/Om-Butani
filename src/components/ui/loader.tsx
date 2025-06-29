import React from "react";

const Loader = () => (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#14111d]">
    <div className="flex flex-col items-center gap-4">
      <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
      <span className="text-primary text-xl font-bold . animate-pulse">Loading Portfolio...</span>
    </div>
  </div>
);

export default Loader;