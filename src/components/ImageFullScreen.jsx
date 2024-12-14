import React, { useState, useEffect } from 'react';

const ImageFullScreen = ({ src, isFullScreen, toggleFullScreen }) => {


  return (
    <>
      {isFullScreen &&
        <div className="fixed bg-[rgba(38,38,38,.9)] top-0 left-0 right-0 bottom-0 z-10">
          <button className="absolute top-4 right-4  text-secondary text-base" onClick={toggleFullScreen} >Close</button>
          <div className=" w-full h-full flex justify-center items-center overflow-hidden">
            <img
              src={src}
              className="w-full max-h-[90vh] object-contain animate-fade-in"
              onClick={toggleFullScreen}
            />
          </div>
        </div>
      }
    </>
  );
};

export default ImageFullScreen;