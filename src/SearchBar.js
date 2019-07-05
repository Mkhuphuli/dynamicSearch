import React, { Component } from 'react';
import DropDownList from './dropDown';
import {connect} from 'react-redux';
import {loadAction,searchAction} from './reducers/rootReducer';


class SearchBar extends Component {
    componentDidMount(){
        //fetch locations from firestore
        this.props.preloadData()
    };

    handleChange=(e)=>{
        this.props.searchLocation(e.target.value)
    }

    render() {
        return (
            <form onSubmit={this.handleChange} className='searchbar'>
                <input className="center" type="text" onChange={this.handleChange} placeholder="Search location"/>
                <div className="dropdown-content">
                    <DropDownList locSubset={this.props.locSubset}/>                                               
                </div>
            </form>
        )
    }
};

const mapStateToProps=(state)=>{
    return {
        ...state.locations
    }
};


const mapDispatchToProps =(dispacth) =>{
    return {
        preloadData: () => { dispacth(loadAction()) } ,
        searchLocation: (searchParam) => { dispacth(searchAction(searchParam)) } 
    }
};

export default connect(mapStateToProps,mapDispatchToProps)(SearchBar)

