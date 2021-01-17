import React from 'react';

export default class UserItem extends React.Component {
    render(){
        return (
            <span>Mi nombre es {this.props.user.name} tengo {this.props.user.years} y soy {this.props.user.rol}</span>
        )
    }
}