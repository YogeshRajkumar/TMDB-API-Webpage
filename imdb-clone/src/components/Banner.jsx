import React from "react";

function Banner() {
  return (
    <div
      className="h-[70vh] md:h-[50vh] bg-cover bg-fixed bg-center flex items-end"
      style={{
        backgroundImage: `url(https://www.thecordcutterlife.com/wp-content/uploads/2019/09/imdb-tv.jpg)`,
      }}
    >
      <div className="text-white text-xl w-full text-center bg-gray-900/60 p-2">
        The Movie Database
      </div>
    </div>
  );
}

export default Banner;
