import React,{useState} from 'react';
import "./Search.css";
import SearchIcon from '@material-ui/icons/Search';
import MicIcon from '@material-ui/icons/Mic';
import {Button } from '@material-ui/core';
import {useHistory} from "react-router-dom";

function Search({hidebuttons=false}) {
    const [input,setInput]=useState([])
    const history=useHistory()
    const search=(event)=>{
        event.preventDefault();
        setInput('');
       history.push('/search')
    }



    return (
        <form className="search">
        <div className="search_input">
            <SearchIcon className="input_icon"/>
            <input value={input} onChange={event=>setInput(event.target.value)}/>
            <MicIcon className="input_icon" />
            </div>
            {!hidebuttons?
            <div className="search_inputbuttons">
                <Button className="input_button"variant="outlined"  onClick={search} type="submit" >Google Search</Button>
                <Button className="input_button" variant="outlined">I'm Feeling Lucky</Button>
            </div>:
            <div className="search_inputbuttons hide_Buttons">
            <Button className="input_button"variant="outlined"  onClick={search} type="submit" >Google Search</Button>
            <Button className="input_button" variant="outlined">I'm Feeling Lucky</Button>
        </div>

}

           
        
        </form>
        
    )
}

export default Search

