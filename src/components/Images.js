import React,{useEffect,useState,useRef} from 'react';
import useFetchImage from '../utils/hooks/useFetchImage';
import Image from './Image';

export default function Images() {
    const [newimageUrl, setNewImageUrl] = useState("");

    const [images,setImages]=useFetchImage();

    const inputRef=useRef(null);
    useEffect(()=>{
        inputRef.current.focus(); 
      
    },[]);


        const ShowImages=()=>{
            return images.map((img,index)=><Image
            image={img.urls.regular}
            handleRemove={handleRemove}
            index={index}
            key={index}
            />
            )
        };

       const handleAdd=()=>{
           if(newimageUrl!==""){
            setImages([...images,
                newimageUrl]);
                setNewImageUrl("");
           }
          
        
        }

        const handleChange=(event)=>{
            setNewImageUrl(event.target.value);
        }
        const handleRemove=(index)=>{
            setImages(images.filter((images,i)=>
            i!==index
        ));
        }

      


    return (
        <section >
            <div className="flex flex-wrap justify-center">
            <ShowImages/>
            </div>
            <div className="flex justify-between my-5">
                <div className="w-full">
                <input 
                id="inputBox"
                ref={inputRef}
                type="text" 
                value={newimageUrl}
                className="p-2 border border-black-800 shadow rounded w-full"
                onChange={handleChange}
                />
                </div>
                <div>
                <button 
                disabled={newimageUrl===""}
                className={`p-2 text-white ml-2 ${newimageUrl!=="" ? "bg-green-600" : "bg-green-300" }`}
                onClick={handleAdd}
                >Add</button>
                </div>
                
            </div>
            
        </section>
    )
}
