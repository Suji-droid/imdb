import React from "react";

function Banner() {
  return (
    <div className="h-[50vh] md:h-[60vh] lg:h-[70vh] bg-cover bg-center flex items-end" 
    style={{backgroundImage : 'url(https://4kwallpapers.com/images/wallpapers/despicable-me-4-2560x1080-15031.jpg)'}}>
    <div className="text-white font-bold text-xl bg-gray-900/50 w-full p-3 text-center">Despicable Me 4</div>
    </div>
  );
}

export default Banner;
