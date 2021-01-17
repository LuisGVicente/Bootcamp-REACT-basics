import React from 'react';
import UserItem from './UserItem';

export default class UserList extends React.Component {
    render(){
        return (
          <ul>
          {this.props.list.map((item, index) => <li key={index}><UserItem user={item}></UserItem><button onClick={() => this.props.fnRemoveUser(index)}>X</button></li>)}
         </ul>
        )
    }
}