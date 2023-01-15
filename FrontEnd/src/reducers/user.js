import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: {}
  },
  reducers: {
    login: (state, action) => {
        return {...state, user: action.payload}
    }
  },
})

export const { login } = userSlice.actions;

export const selectCount = (state) => state.counter.value

export default counterSlice.reducer
