import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'
import AppsIcon from '@material-ui/icons/Apps';
import { Avatar } from '@material-ui/core';
import Search from './Search';

function Home() {
    return (
        <div className="home">
           
           <div className="home_header">
               <div className="header_Left" >
                   <Link to="/about">About</Link>
                   <Link to="/store">Store</Link>


               </div>
               <div className="header_Right" >
                  <Link to="/gmail">Gmail</Link>
                   <Link to="/images">Images</Link>
                   <AppsIcon />
                   <Avatar />
                  
                   
                </div>
                </div>
                <div className="home_Body">
                    <img src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png" alt=" " />
                   
                <div className="input_container">
                    <Search />


                </div>




                </div>
        </div>
    )
}

export default Home
