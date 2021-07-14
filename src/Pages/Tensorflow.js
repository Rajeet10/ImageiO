import React,{useEffect,useRef} from 'react';
import '@tensorflow/tfjs';
import * as mobilenet from '@tensorflow-models/mobilenet'

const Tensorflow = () => {
    const imageRef = useRef();
    useEffect(()=>{
        const img=imageRef.current;
        // mobilenet.load().then(model => {
        //     // Classify the image.
        //     model.classify(img).then(predictions => {
        //       console.log('Predictions: ');
        //       console.log(predictions);
        //     });
        //   });
    },[])
    return (
        <div className="flex justify-center">
        <div className="w-1/3"> 
           <h1 className="text-center">TensorFlow Example</h1> 
           <img 
           src="https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNDU3NzJ8MHwxfHNlYXJjaHw3fHxkb2d8ZW58MHx8fHwxNjI2MjQ3OTQw&ixlib=rb-1.2.1&q=80&w=1080" 
           width="400" 
           alt="" 
           ref={imageRef}/>
           <div className="text-center my-5">
           <button className="p-2 rounded bg-blue-500 text-white">Predict Result</button>
           </div>
        </div>
        </div>
    )
}

export default Tensorflow;
