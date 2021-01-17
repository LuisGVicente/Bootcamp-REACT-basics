import React from 'react';
import Button from './Button';


export default class Card extends React.Component {
    render(){
        return (
            <div>
                <h2>Title</h2>
                <p>Description</p>
                <img src="../../logo192.png" alt="logo"></img>
                <Button></Button>
            </div>
        )
    }
}