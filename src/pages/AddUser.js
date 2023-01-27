import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addUser } from '../components/UserSlice';

function AddUser() {
    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault();
        const user = {
            id: uuidv4(),
            name: name,
            email: email,
        }
        dispatch(addUser(user))
        navigate("/show-users", { replace: true })
    }
    return (
        <div>
            <h2 className='font-medium leading-tight text-5xl m-8 text-navy-600 text-center'>Add User</h2>
            <div className="form flex justify-center">
                <form className="w-1/2" onSubmit={handleSubmit}>
                    <div className="mb-6">
                        <label htmlFor="name">Name: </label>
                        <input type="text" id="name" name="name" value={name} onChange={(e) => setName(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="Enter your name" required />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="email">Email: </label>
                        <input type="email" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Enter your email" required />
                    </div>
                    <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center ">Submit</button>
                </form>
            </div>
        </div>
    )
}

export default AddUser