import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { editUser } from '../components/UserSlice';

function EditUser() {
    const location = useLocation()
    const [id, setId] = useState(location.state.id)
    const [name, setName] = useState(location.state.name)
    const [email, setEmail] = useState(location.state.email)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleUpdate = (e) => {
        e.preventDefault()
        dispatch(editUser({ id, name, email }))
        navigate("/show-users", { replace: true })
    }
    return (
        <div>
            <div>
                <h2 className='font-medium leading-tight text-5xl m-8 text-navy-600 text-center'>Edit User</h2>
                <div className="form flex justify-center">
                    <form className="w-1/2" onSubmit={handleUpdate}>
                        <div className="mb-6">
                            <label htmlFor="name">Name: </label>
                            <input type="text" id="name" name="name" value={name} onChange={(e) => setName(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="Enter your name" required />
                        </div>
                        <div className="mb-6">
                            <label htmlFor="email">Email: </label>
                            <input type="email" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Enter your email" required />
                        </div>
                        <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center ">Update</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default EditUser