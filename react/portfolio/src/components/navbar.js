import React from 'react';
import { NavLink } from 'react-router-dom'

export default function navbar() {
    return (
        <header>
            <nav>
                <NavLink to='/' exact>Gustav Lundgren</NavLink>
                <div>
                    <NavLink to='/games'>Game Dev Samples </NavLink>
                    <NavLink to='/writing'>Writing Samples</NavLink>
                </div>
                <NavLink to='/contents'>&#9776;</NavLink>
            </nav>
        </header>
    );
}