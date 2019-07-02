import React, { Component } from 'react';
import DropDownList from './dropDown';

class SearchBar extends Component {
    state={
        locations:["Durban,SA","Cape Town,SA","PE,SA",
                    "Johannesburg,SA","Pretoria,SA","Delhi,India",
                    "Gujarat,India","Big Ben,UK","California,USA","London,UK" ],

         locSubset:[""]
    }

    handleChange=(e)=>{
        if(e.target.value!==""){
            this.setState({
                ...this.state,
                locSubset: this.state.locations.filter(item=>{
                    return item.toLowerCase().includes(e.target.value.toLowerCase())
                })
            })
        } else {
            this.setState({
                ...this.state,
                locSubset:[""]
            })
        }
    }

    render() {
        return (
            <div className='searchbar'>
                <label htmlFor="searching">Please type location: <br/></label>
                <input className="center" type="text" onChange={this.handleChange}/>
                <div className="dropdown-content">
                    <DropDownList locSubset={this.state.locSubset}/>
                </div>
            </div>
        )
    }
}


export default SearchBar
