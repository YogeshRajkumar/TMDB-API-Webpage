import React from "react";

function Banner() {
  return (
    <div
      className="h-[70vh] md:h-[75vh] bg-cover bg-center flex items-end"
      style={{
        backgroundImage: `url(https://static1.cbrimages.com/wordpress/wp-content/uploads/2024/04/the-amazing-spider-man-movie.jpg)`,
      }}
    >
      <div className="text-white text-xl w-full text-center bg-gray-900/60 p-2">
        The Amazing Spider-man
      </div>
    </div>
  );
}

export default Banner;
