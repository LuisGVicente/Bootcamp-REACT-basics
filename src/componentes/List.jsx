import React from 'react';

export default class List extends React.Component {
    render(){

        
        return (
            <ul>
           
                {this.props.list.map((item, index) => <li key={index}>{item}</li>)}
            </ul>
        )
    }
}