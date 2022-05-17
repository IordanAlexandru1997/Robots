import React from 'react';
import CardList from './CardList';
import {robots} from './robots';
import SearchBox from './SearchBox';
import { Component } from 'react';
import './App.css'

class App extends Component {
    constructor() {
        super();
        this.state = {
            robots: [],
            searchfield: ''
        }
    }
    onSearchChange = (event) =>{
        this.setState({searchfield: event.target.value})
    }
    render(){
        const filteredRobots = this.state.robots.filter(robots=>{
            return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
        })
        return(
            <div className='tc'>
                <style>
                    @import url('http://fonts.cdnfonts.com/css/sega-logo-font');
                </style>
                <h1 className='f1'>
                    RoboFriends
                </h1>
                <SearchBox searchChange = {this.onSearchChange}/>
                <CardList robots = {filteredRobots}/>
            </div>
        )
        
    }
    
}
 
export default App;