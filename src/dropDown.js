import React from 'react'

export default function DropDownList({locSubset}) {
    console.log(locSubset)
    return locSubset.map((item,index)=>{
        return (<div className="dropDownItem" key={index}>
                <span>{item}</span>
            </div>)
    })
}

