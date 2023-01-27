import React from 'react'
import UserView from "../components/UserView"

function ShowUsers() {
    return (
        <div>
            <h2 className='font-medium leading-tight text-5xl m-8 text-navy-600 text-center'>All Users</h2>
            <UserView />
        </div>
    )
}

export default ShowUsers