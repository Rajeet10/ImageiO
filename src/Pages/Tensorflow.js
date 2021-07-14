import React,{useRef} from 'react';
import { useTfPrediction } from '../utils/hooks/useTfPrediction';

const Tensorflow = () => {
    const imageRef = useRef();
    const {predict,predictions,isLoading}=useTfPrediction();
   
    return (
        <div className="flex justify-center">
        <div className="w-1/3"> 
           <h1 className="text-center">TensorFlow Example</h1> 
           <img 
           src="https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNDU3NzJ8MHwxfHNlYXJjaHw3fHxkb2d8ZW58MHx8fHwxNjI2MjQ3OTQw&ixlib=rb-1.2.1&q=80&w=1080" 
           width="400" 
           alt="" 
           crossOrigin="anonymous"
           ref={imageRef}/>
           <div className="text-center my-5">
               {predictions.length>0 &&  
               predictions.map(prediction=>(
               <div className="flex justify-between">
                           <p>{prediction.className}</p>
                           <p>{Math.floor(prediction.probability * 100)}%</p>
               </div>
               ))}
           <button 
           className="p-2 rounded bg-gray-900 text-white w-64"
           onClick={()=>predict(imageRef.current )}
           >
               {isLoading &&  <i class="fas fa-spinner fa-spin"></i> }
               {!isLoading && 'Predict Results'}
           </button>
           </div>
        </div>
        </div>
    )
}

export default Tensorflow;
