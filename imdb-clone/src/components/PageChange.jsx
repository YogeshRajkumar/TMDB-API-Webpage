import React from "react";

function PageChange({ handlePrevious, handleNext, pageNo }) {
  return (
    <div className="bg-gray-500 p-2 flex justify-center mt-10">
      <div
        onClick={handlePrevious}
        className="text-xl font-bold px-1 cursor-pointer hover:text-gray-700"
      >
        &lt;
      </div>
      <div className="p-1 font-bold">{pageNo}</div>
      <div
        onClick={handleNext}
        className="text-xl font-bold px-1 cursor-pointer hover:text-gray-700"
      >
        &gt;
      </div>
    </div>
  );
}

export default PageChange;
