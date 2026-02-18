import React, { useState } from "react";

const LazyImage = ({ src, alt, className }) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="overflow-hidden">
      <img
        src={src}
        alt={alt}
        loading="lazy"
        onLoad={() => setLoaded(true)}
        className={`
          ${className}
          transform transition-all duration-700 ease-out
          ${loaded 
            ? "blur-0 scale-100 opacity-100" 
            : "blur-lg scale-105 opacity-60"
          }
        `}
      />
    </div>
  );
};

export default LazyImage;
