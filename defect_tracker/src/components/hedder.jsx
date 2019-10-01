import React, { Component } from 'react';
class Hedder extends Component {
    state = {  }
    render() { 
        return (  <div class="header">
        <a href="#default" class="logo">DEFECT TRACKER</a>
        <div class="header-right">
        <a class="active btn-pad" href="#login">Log in</a>
          <a class="active btn-pad" href="#home">Home</a>
          
          <a href="#contact">Contact</a>
          <a href="#about">About</a>
        </div>
      </div>

       
        );
    }
}
 
export default Hedder;