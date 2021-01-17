import React from 'react';

export default class ButtonProps extends React.Component {
    render(){
        return (
            <button>{this.props.text}</button>
        )
    }
}