import React, { Component } from 'react';

class Namelist extends Component {
   
    render() {
        const laptop=['hp','dell','lenovo','acer']
        return (
            <div>
                {laptop.map((index,name)=>{
                    console.log(name,"=====")
                return<h1 key={index}> {name}{index}</h1>
                })}
            </div>
        );
    }
}

export default Namelist;
