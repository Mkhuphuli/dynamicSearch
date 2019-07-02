import React from 'react'

export default function DropDownList(props) {
    const locations = props.locSubset;
    return locations.map((item,index)=>{
        return (<div className="dropDownItem" key={index}>
                <span>{item}</span>
            </div>)
    })
}

