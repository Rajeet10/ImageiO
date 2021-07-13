import React, { useState} from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import useFetchImage from "../utils/hooks/useFetchImage";
import Image from "./Image";
import Loading  from "./Loading";
import  useDebounce  from "../utils/hooks/useDebounce";
import { AnimateSharedLayout,AnimatePresence,motion} from "framer-motion";

export default function Images() {
  const [page, setPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState(null);
  const [images, setImages, errors, isLoading] = useFetchImage(page,searchTerm);
  

  const ShowImages = () => {
    const [showPreview, setShowPreview] = useState(false);
    return (
      <AnimateSharedLayout >
    <InfiniteScroll
    dataLength={images.length}
    next={()=>setPage(page+1)}
    hasMore={true}
    className="flex flex-wrap"
    >
    { images.map((img, index) => (
      <motion.div 
      className="w-1/6 p-1 border flex justify-center"
      key={index}
      layoutId={img.urls.regular}
      initial={{opacity:0}}
      animate={{opacity:1}}
      >
      <Image
      show={()=>setShowPreview(img.urls.regular)}
        image={img.urls.regular}
        handleRemove={handleRemove}
        index={index}
      />
      </motion.div >
    ))}
    </InfiniteScroll>
    <AnimatePresence>
      {showPreview &&
      (<motion.section 
        layoutId={showPreview}
        exit={{opacity:0}}
      className="fixed flex w-full h-full justify-center items-center top-0 left-0 z-40"
       onClick={()=>setShowPreview(false)}>
         <div className="bg-white">
         <img 
        src={showPreview} 
        className="rounded-lg"
        width="300" 
        height="auto" 
        alt="" />
         </div>
    </motion.section>)
      }
      </AnimatePresence>
    </AnimateSharedLayout>
    )
  };

  const handleRemove = (index) => {
    setImages(images.filter((images, i) => i !== index));
  };

  const debounce=useDebounce();
  const handleInput=(e)=>{
    const text=e.target.value;
    debounce(()=>setSearchTerm(text))

  }


  return (
    <section>
        <div className="my-5">
            <input
            type="text"
            onChange={handleInput}
            className="w-full border rounded shadow p-2"
            placeholder="Search Photos here"
            />
        </div>
      {errors.length > 0 && (
        <div className="flex h-screen">
          <p className="m-auto"> {errors[0]}</p>
        </div>
      )}
        <ShowImages />
     {
         isLoading && <Loading/>
     }
    </section>
  );
}
