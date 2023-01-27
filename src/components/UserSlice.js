import { createSlice } from "@reduxjs/toolkit"
import { v4 as uuidv4 } from 'uuid';

const initialUsers = {
    users: [
        { id: uuidv4(), name: "Abu Hasan Rumi", email: "rumi@abc.com" },
        { id: uuidv4(), name: "Rabbil Hasan", email: "rabbil@gssd.com" },
    ]
}

export const userSlice = createSlice({
    name: "users",
    initialState: initialUsers,
    reducers: {
        showUsers: (state) => state,
        addUser: (state, action) => {
            state.users.push(action.payload)
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
        },
    }
})

export const { showUsers, addUser, deleteUser, editUser } = userSlice.actions
export default userSlice.reducer;