import React, {Component} from "react";
import './App.css';
import Header from "./Header";

class App extends Component {
  constructor(){
    super();

    this.state = {
      currentColor: "white",
    }
  };

  render(){
    return(
      <div className="homePageBackground">
        <Header 
                currentColor = {this.state.currentColor}/>
      </div>
    )
  }

}
export default App;
