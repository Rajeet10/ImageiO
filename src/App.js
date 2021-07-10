import React,{Component} from 'react';
import './App.css';
import Images from './components/Images';


class App extends Component{
  constructor(props){
    console.log('App constructor');
    super(props);
    this.state={title:"hello",isShowing:false};
  }
  componentDidMount(){
    console.log("APP MOUNTED");
    // this.setState({title:"HI"});
  }
  componentDidUpdate(){
    console.log("app updated")
}

  handleclick=()=>{
    this.setState({isShowing:!this.state.isShowing});
  }

  render(){
    console.log('App Render');
    return(
      <section className="flex justify-center">
        <div className="w-1/2">
          <div className="text-center">
        <div className="my-4">{this.state.title}</div>
        <button 
        className="p-1 bg-blue-700 text-white my-2"
        onClick={this.handleclick}
        >Toggle Image</button>
        </div>
        {
          this.state.isShowing?
         (<Images/>):
         null
        }
        
        </div>
      </section>
      
    )
  }
}

export default App;
