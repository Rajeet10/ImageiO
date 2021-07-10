import React,{useState,useEffect} from 'react';
import Axios from 'axios';

const url=process.env.REACT_APP_UNSPLASH_URL;
const secret=process.env.REACT_APP_UNSPLASH_KEY;

export default function useFetchImage(page) {
    const [images, setImages] = useState([]);
    const [errors, seterrors] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    useEffect(()=>{
        setIsLoading(true);
        Axios.get(
            `${url}?client_id=${secret}&page=${page}`).then((res)=>{
                setImages([...images,...res.data]);
                setIsLoading(false);
            }).catch((err)=>{
                seterrors(["Unable to fetch images ,Please reload the page again!"]);
                setIsLoading(false);
            })
            // eslint-disable-next-line
    },[page]);
   
        return [images,setImages,errors,isLoading];
}
