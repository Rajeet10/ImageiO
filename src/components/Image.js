import React,{useState} from "react";

function Image({index,image,handleRemove}) {
 const [isHovering, setIsHovering] = useState(false);
  return (
    <div className="w-1/3 p-1 border flex justify-center" >
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
        <img src={image} width="100%" height="auto" alt="" />
      </div>
    </div>
  );
}

export default Image;
