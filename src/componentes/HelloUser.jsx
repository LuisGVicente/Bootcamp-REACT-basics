import React from 'react';

export default class HelloUser extends React.Component {
    render(){

        const user = {
            name: 'Laureano',
            surname: 'Urantia'
        }
        return (
          <h2>Mi nombre es {user.name} de {user.surname}</h2>
        )
    }
}