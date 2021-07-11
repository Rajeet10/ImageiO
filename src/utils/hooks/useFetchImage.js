import React, { useState, useEffect } from "react";
import Axios from "axios";

const api = process.env.REACT_APP_UNSPLASH_API;
const secret = process.env.REACT_APP_UNSPLASH_KEY;

export default function useFetchImage(page, searchTerm) {
  const [images, setImages] = useState([]);

  const [errors, seterrors] = useState([]);

  const [isLoading, setIsLoading] = useState(false);

  function fetch() {
    const url =
      searchTerm === null ? "photos?" : `search/photos?query=${searchTerm}&`;
    Axios.get(`${api}/${url}client_id=${secret}&page=${page}`)
      .then((res) => {
        searchTerm === null ? fetchRandom(res) : fetchSearch(res);
        setIsLoading(false);
      })
      .catch((err) => {
        seterrors(["Unable to fetch images ,Please reload the page again!"]);
        setIsLoading(false);
      });
  }

  const fetchSearch = (res) => {
    page > 1
      ? setImages([...images, ...res.data.results])
      : setImages([...res.data.results]);
  };

  const fetchRandom = (res) => {
    setImages([...images, ...res.data]);
  };

  useEffect(() => {
    setIsLoading(true);
    fetch();
  }, [page,searchTerm]);

  return [images, setImages, errors, isLoading];
}
