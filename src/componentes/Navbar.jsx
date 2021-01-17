import React from 'react';

export default class Navbar extends React.Component {
    render() {
        return (
            <nav>
                <h1>Bienvenidos</h1>
                <ul>
                    <li>Home</li>
                    <li>Productos</li>
                    <li>Gestion</li>
                </ul>
            </nav>
        )
    }
}