import { configureStore } from '@reduxjs/toolkit';
import playerReducer from './Player';
import userReducer from './User';
import searchReducer from './Search';

export default configureStore({
    reducer: {
        player: playerReducer,
        user: userReducer,
        search: searchReducer
    }
})