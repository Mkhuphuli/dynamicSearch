import React, { Component } from 'react';

class SearchBar extends Component {
    state={
        locations:["Durban,SA","Cape Town,SA","PE,SA",
                    "Johannesburg,SA","Pretoria,SA","Delhi,India",
                    "Gujarat,India","Big Ben,UK","California,USA","London,UK" ] 
    }
    render() {
        return (
            <div className='search'>
                <p>{this.state.locations[0]}</p>
                <input type="text"/>
            </div>
        )
    }
}


export default SearchBar
