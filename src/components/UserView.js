import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { deleteUser } from './UserSlice'

function UserView() {
    const users = useSelector((state) => state.userReducer.users)
    const dispatch = useDispatch()

    const handleDelete = (id) => {
        dispatch(deleteUser(id))
    }
    return (
        <div className='flex flex-wrap justify-center'>
            {
                users && users.map((user) => {
                    const { id, name, email } = user;
                    return (
                        <div key={id} className="max-w-sm p-6 bg-[#0b2239] rounded-lg m-4 min-w-[90%] sm:min-w-[40%] md:min-w-[40%] lg:min-w-[30%] xl:min-w-[20%]">
                            <Link to="#">
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">{name}</h5>
                            </Link>
                            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{email}</p>
                            <div className="userLinks flex justify-between">
                                <Link to="/edit-user" state={{ id, name, email }} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                    <button type="button">Edit</button>
                                </Link>
                                <Link to="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                    <button type="button" onClick={() => { handleDelete(id) }}>Delete</button>
                                </Link>
                            </div>
                        </div>

                    )
                })
            }
        </div>
    )
}

export default UserView