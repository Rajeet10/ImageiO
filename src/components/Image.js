import React,{useState} from "react";


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
Image.propTypes={
  show:(props,propName)=>{
    if(typeof(props[propName])===Error)
    return new Error(`${propName} must be a function but you have provided ${typeof props[propName]}`);
  },
  index:(props,propName)=>{
    if(typeof(props[propName])===Error)
    return new Error(`${propName} must be a number but you have provided ${typeof props[propName]}`);
  },
}

export default Image;
