import React,{useState} from 'react';
import './App.css';
import Images from './components/Images';



function App(){
  const [title, setTitle] = useState("Welcome");

      return(
      <section className="flex justify-center">
        <div className="w-10/12">
          <div className="text-center">
        <div className="my-4">{title}</div>
        <Images/>
        </div>
        </div>
      </section>
      
    )

}
export default App;
