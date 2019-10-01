import React, { Component } from 'react';
import Hedder from './hedder';
import Footer from './footer';
class Newpro extends Component {
    state = {  }
    render() { 
        return (
         
          <div>
            <Hedder/>
            <Footer/>
          <div class="container">
  <form action="/action_page.php">
  <div class="row">
    <div class="col-25">
      <label for="pname">Project Name</label>
    </div>
    <div class="col-75">
      <input type="text" id="pname" name="projectname" placeholder="Project name.."/>
    </div>
  </div>
  <div class="row">
    <div class="col-25">
      <label for="pdatils">Project Details</label>
    </div>
    <div class="col-75">
      <input type="text" id="pdetails" name="projectdetails" placeholder="Project details.."/>
    </div>
  </div>
  
  
  <div class="row">
    <div class="col-25">
      <label for="pdiscription">Project Description</label>
    </div>
    <div class="col-75">
      <textarea id="description" name="description" placeholder="Write something.."></textarea>
    </div>
  </div>
 
  <div class="row">
  <input className="bt" type="reset" value="Reset"/>
    <input className="bt" type="submit" value="Create"/>
  </div>
  </form>
</div>
</div>
       );
    }
}
 
export default Newpro;