import React from 'react';
import { NavLink } from 'react-router-dom';

import { Container } from 'reactstrap'

export default function navbar() {
    return (
        <header className="d-flex" style={{marginBottom: "auto"}}>
            <Container className="d-flex">
                <NavLink to='/' exact className="nav-link">Gustav Lundgren</NavLink>
                <div className="d-none d-md-flex">
                    <NavLink to='/games' className="nav-link">Game Dev Samples </NavLink>
                    <NavLink to='/writing' className="nav-link">Writing Samples</NavLink>
                </div>
                <NavLink to='/contents' className="nav-link" style={{marginLeft: "auto"}}>&#9776;</NavLink>
            </Container>
        </header>
    );
}