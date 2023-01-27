import React from 'react'
import { Link } from 'react-router-dom'
import AddUser from './AddUser'
import ShowUsers from './ShowUsers'

function Home() {
    return (
        <div style={{ textAlign: "center", margin: "50px", color: "#202124" }}>
            <h1 className='text-3xl font-bold'>User Application Practice Project</h1>
            <p style={{ margin: "20px 0" }}>In this project, we are using React, Redux Toolkit and some other techs</p>
            <p>Please use below buttons to navigate</p>
            <div className="buttons space-y-5 space-x-5">
                <Link to="/show-users" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    <button type="button">Show Users</button>
                </Link>
                <Link to="/add-user" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    <button type="button">Add Users</button>
                </Link>
            </div>
        </div>
    )
}

export default Home