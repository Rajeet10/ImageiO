import React, { Component } from 'react'

export default class Images extends Component {
    constructor(props){
        super(props);
        this.state={interval:null};

    }
    componentDidMount(){
        console.log("image comp mounted");
        this.setState({
            interval:setInterval(() => {
                console.log("hello");
            }, 1000)
        })
    }
    componentWillUnmount(){
        console.log("Images comp unmounted");
        clearInterval(this.state.interval) ;
      }

  
    render() {
        return (
            <img src="https://images.unsplash.com/photo-1622495966027-e0173192c728?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" alt=""/>
        )
    }
}
