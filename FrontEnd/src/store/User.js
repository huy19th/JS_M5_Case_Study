import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        currentUser: {},
        isLoggedIn: false
    },
    reducers: {
        login: (state, action) => {
            state.currentUser = action.payload;
            state.isLoggedIn = true;
        }
    }
},
)

export const { login } = userSlice.actions;

export const selectUser = (state) => state.user;

export default userSlice.reducer;
