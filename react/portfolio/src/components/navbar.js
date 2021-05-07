import { NavLink } from 'react-router-dom';

export default function navbar() {
    return (
        <header className="d-flex" style={{marginBottom: "auto"}}>
            <nav className="container d-flex">
                <NavLink to='/' exact className="nav-link">Gustav Lundgren</NavLink>
                <div className="d-none d-md-flex">
                    <NavLink to='/games' className="nav-link">Game Dev Samples </NavLink>
                    <NavLink to='/writing' className="nav-link">Writing Samples</NavLink>
                </div>
                <NavLink to='/contents' className="nav-link" style={{marginLeft: "auto"}}>&#9776;</NavLink>
            </nav>
        </header>
    );
}