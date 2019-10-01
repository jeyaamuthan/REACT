import React, { Component } from 'react';
import Newpro from './newpro';

class Footer extends Component {
    state = {}
    render() {
        return (
            <div className="sidenav">
                <div className="dropdown">
                <a href className="dropbtn">Dashboard</a>
                </div>

                <div className="dropdown">
                    <a href className="dropbtn">Projects</a>
                    <div className="dropdown-content">
                        <a href="/test">Create New</a>
                        <a href="#">Projest List</a>

                    </div>
                </div>
                <div className="dropdown">
                <a  className="dropbtn">Defects</a>
                </div>
                <br></br>

                <div className="dropdown">
                <a href className="dropbtn">Users</a>
                    <div className="dropdown-content">
                        <a href="#">Profile</a>
                        <a href="#">Privilages</a>
                        <a href="#">Experience</a>
                    </div>

                </div>


                <div className="dropdown">
                    <a href className="dropbtn">Settings</a>
                </div>



            </div>);
    }
}

export default Footer;