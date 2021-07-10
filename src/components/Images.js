import React, { useState} from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import useFetchImage from "../utils/hooks/useFetchImage";
import Image from "./Image";
import Loading  from "./Loading";

export default function Images() {
  const [page, setPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState(null);
  const [images, setImages, errors, isLoading] = useFetchImage(page,searchTerm);

  const ShowImages = () => {
    return (
    <InfiniteScroll
    dataLength={images.length}
    next={()=>setPage(page+1)}
    hasMore={true}
    className="flex flex-wrap"
    >
    { images.map((img, index) => (
      <Image
        image={img.urls.regular}
        handleRemove={handleRemove}
        index={index}
        key={index}
      />
    ))}
    </InfiniteScroll>
    )
  };

  const handleRemove = (index) => {
    setImages(images.filter((images, i) => i !== index));
  };

  const handleInput=(e)=>{
    setSearchTerm(e.target.value);
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
