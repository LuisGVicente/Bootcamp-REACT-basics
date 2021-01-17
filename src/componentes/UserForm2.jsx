import React from 'react';

export default class UserForm2 extends React.Component {

    state = {}

    handleChange = ($event) => {
        this.setState({[$event.target.name]: $event.target.value});
    }

    createUser = (e) => {
        e.preventDefault();
     
        this.props.fnAddUser(this.state);
    }
    
    render() {
        return (
            <form onSubmit={this.createUser}>
        
                <label htmlFor="name">Name</label>
                <input id="name" type="text" name="name" onChange={this.handleChange}/>

                <label htmlFor="years">Years-old</label>
                <input id="years" type="number" name="years" onChange={this.handleChange}/>

                <label htmlFor="rol">Rol</label>
                <select name="rol" id="rol" onChange={this.handleChange}>
                <option value=""></option>
                    <option value="admin">Admin</option>
                    <option value="user">User</option>
                </select>

                <input type="submit" value="Guardar"/>

            </form>
        )
    }
}