import React from 'react'
import { Link } from 'react-router-dom'
import AddUser from './AddUser'
import Home from './Home'
import ShowUsers from './ShowUsers'

function NavBar() {
    return (
        <nav>
            <Link to="/" className="nav-link" element={<Home />}>Home</Link>
            <Link to="/show-users" className="nav-link" element={<ShowUsers />}>Show Users</Link>
            <Link to="/add-user" className="nav-link" element={<AddUser />}>Add User</Link>
        </nav>
    )
}

export default NavBar