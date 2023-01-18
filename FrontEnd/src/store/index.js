import { configureStore } from '@reduxjs/toolkit';
import playerReducer from './Player';
import userReducer from './User';

export default configureStore({
    reducer: {
        player: playerReducer,
        user: userReducer
    },
})