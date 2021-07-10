import React,{useState,useEffect} from 'react'

function useScroll() {
    const [scrollPosition, setscrollPosition] = useState(null);

    function handleScroll(){
        setscrollPosition(window.scrollY);
    }
 
    useEffect(()=>{
        document.addEventListener("scroll",handleScroll);

        return ()=>{
            document.removeEventListener("scroll",handleScroll)
        }
    },[]);
    
    return scrollPosition;
}

export default useScroll;
