import React,{useEffect,useState} from 'react'

export default function Images() {
    const [images, setImages] = useState([
        "https://images.unsplash.com/photo-1527192491265-7e15c55b1ed2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80",
        "https://images.unsplash.com/photo-1622495894307-93143fc57155?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=734&q=80",
        "https://images.unsplash.com/photo-1623944887316-a475472013c2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=751&q=80",
        'https://images.unsplash.com/photo-1622495966027-e0173192c728?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80'
    ]);
    const [newimageUrl, setNewImageUrl] = useState("");

        const ShowImages=()=>{
            return images.map((image)=>{
                return(
                    <div className="w-1/3 my-4 flex justify-center">
                        <img src={image} width="150"/>
                     </div>
                )
            })

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

    return (
        <section >
            <div className="flex flex-wrap justify-center">
            <ShowImages/>
            </div>
            <div className="flex justify-between my-5">
                <div className="w-full">
                <input 
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
