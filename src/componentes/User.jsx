import React from 'react';
import UserList from './UserList';
import UserForm from './UserForm';
import UserForm2 from './/UserForm2';

export default class User extends React.Component {
    state = {
        users: [
            {
                name: 'Abel Cabeza',
                years: 25,
                rol: 'Profesor'
            }, 
            {
                name: 'Rolo',
                years: 25,
                rol: 'Estudiante'
            },
            {
                name: 'Manuel Cabeza',
                years: 30,
                rol: 'Siempre saluda'
            }, 
            {
                name: 'Hector Cabeza',
                years: 28,
                rol: 'Amigo de sus amigos'
            }, 
        ]
    }
    
    removeUser = (index) => {
        const users = [...this.state.users]//Ésto crea una copia de this.state.users
        users.splice(index,1);//Quito el elemento 
        this.setState({
            users: users //igualo el estado a su copia
        }
        )
    }

    addUser = (user) =>{
        
        this.setState({users: [...this.state.users,user]});
        
    }

    render(){
        return (
                <>
                <UserForm fnAddUser={this.addUser}></UserForm>
                <UserForm2 fnAddUser={this.addUser}></UserForm2>
                <UserList list={this.state.users} fnRemoveUser={this.removeUser}></UserList>
                </>
        )
    }
}