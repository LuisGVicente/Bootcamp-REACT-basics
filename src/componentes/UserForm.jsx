import React from 'react';

export default class UserForm extends React.Component {

    createUser = (e) => {
        e.preventDefault();
        
        const name = document.getElementById('name').value;
        const years = document.getElementById('years').value;
        const rol = document.getElementById('rol').value;
     

        this.props.fnAddUser({name: name,years: years ,rol: rol});
    }
    
    render() {
        return (
            <form onSubmit={this.createUser}>
        
                <label htmlFor="name">Name</label>
                <input id="name" type="text"/>

                <label htmlFor="years">Years-old</label>
                <input id="years" type="number"/>

                <label htmlFor="rol">Rol</label>
                <select name="rol" id="rol">
                    <option value="admin">Admin</option>
                    <option value="user">User</option>
                </select>

                <input type="submit" value="Guardar"/>

            </form>
        )
    }
}