import React, { useState } from "react";
import useFetchImage from "../utils/hooks/useFetchImage";
import Image from "./Image";
import Loading  from "./Loading";

export default function Images() {
  const [page, setPage] = useState(1);
  const [images, setImages, errors, isLoading] = useFetchImage(page);

  const ShowImages = () => {
    return images.map((img, index) => (
      <Image
        image={img.urls.regular}
        handleRemove={handleRemove}
        index={index}
        key={index}
      />
    ));
  };

  const handleRemove = (index) => {
    setImages(images.filter((images, i) => i !== index));
  };
  if (isLoading) {
    return <Loading />
  }

  return (
    <section>
      {errors.length > 0 && (
        <div className="flex h-screen">
          <p className="m-auto"> {errors[0]}</p>
        </div>
      )}

      <div className="gap-0" style={{ columnCount: 5 }}>
        <ShowImages />
      </div>
      {errors.length === 0 && (
        <button onClick={() => setPage(page + 1)}>Load More</button>
      )}
    </section>
  );
}
