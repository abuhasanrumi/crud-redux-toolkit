import { createSlice } from "@reduxjs/toolkit"
import { v4 as uuidv4 } from 'uuid';

const localUsers = localStorage.getItem('state.users') !== null ? JSON.parse(localStorage.getItem('state.users')) : [
    { id: uuidv4(), name: "Abu Hasan Rumi", email: "abasdsa@gasd.com" }, { id: uuidv4(), name: "Iyahiya Khan", email: "habib@gmail.com" }]

const initialUsers = {
    users: localUsers
}

export const userSlice = createSlice({
    name: "users",
    initialState: initialUsers,
    reducers: {
        showUsers: (state) => state,
        addUser: (state, action) => {
            state.users.push(action.payload)
            localStorage.setItem('state.users', JSON.stringify(state.users.map(user => user)))
        },
        editUser: (state, action) => {
            const { id, name, email } = action.payload
            const isUserExists = state.users.filter((user) => user.id === id)
            if (isUserExists) {
                isUserExists[0].name = name
                isUserExists[0].email = email
            }
        },
        deleteUser: (state, action) => {
            const id = action.payload
            state.users = state.users.filter(user => user.id !== id)
            localStorage.setItem('state.users', JSON.stringify(state.users.map(user => user)))
        },
    }
})

export const { showUsers, addUser, deleteUser, editUser } = userSlice.actions
export default userSlice.reducer;