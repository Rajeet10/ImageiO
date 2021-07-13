import React,{useState} from "react";
import { AnimatePresence, motion } from "framer-motion";

function Image({index,image,handleRemove,show}) {
 const [isHovering, setIsHovering] = useState(false);

  return (
      <div
        className="relative"
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        <i
          className={`fas fa-times 
            absolute 
            right-0 
            cursor-pointer 
            opacity-25 
            hover:opacity-100 
            ${isHovering  ? "" : "hidden"}`}
          onClick={() => handleRemove(index)}
        ></i>
        <img 
        onClick={show}
        src={image} 
        width="100%" 
        height="auto" 
        alt="" />
      </div>
  );
}

export default Image;
