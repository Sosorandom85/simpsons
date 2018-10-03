import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {  
    state = {
      working: true
    };
  HandleClick = () =>{
    this.setState({
     working: !this.state.working});
  };

 render(){
    const light = this.state.working ? 'Working' : 'Onbreak';
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className={light} alt="logo" />
        </header>
       <button onClick={this.HandleClick}>
    
        {light.toUpperCase()}
    </button>
      </div>
    );
  }
}

export default App;
