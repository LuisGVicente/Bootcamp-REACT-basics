import React from 'react';

export default class HelloVar extends React.Component {
    render(){

        const name = 'Urano';

        return (
            <h1>{name}</h1>
        )
    }
}