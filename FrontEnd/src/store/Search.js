import { createSlice } from '@reduxjs/toolkit';

export const searchSlice = createSlice({
    name: 'search',
    initialState: {
        searchResult: null
    },
    reducers: {
        setSearchResult: (state, action) => {
            state.searchResult = action.payload;
        },
        clearSearchResult: (state) => {
            state.searchResult = null
        }
    }
},
)

export const { setSearchResult, clearSearchResult } = searchSlice.actions;

export const selectSearch = (state) => state.search;

export default searchSlice.reducer;
