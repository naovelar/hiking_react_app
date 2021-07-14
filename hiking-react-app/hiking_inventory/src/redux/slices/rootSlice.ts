import { createSlice } from '@reduxjs/toolkit';

const rootSlice = createSlice({
    name: "root",
    initialState: {
        difficulty: '8/10',
        rating: '7/10',
        season: 'spring',
        trail:'Angels Landing'
    },
    reducers: {
        chooseDifficulty: (state, action) => { state.difficulty = action.payload},
        chooseTrail: (state, action) => { state.trail = action.payload},
        chooseSeason: (state, action) => { state.season = action.payload},
        chooseRating: (state, action) => { state.rating = action.payload}

    }
})

// Export Reducer
export const reducer = rootSlice.reducer;
export const { chooseDifficulty, chooseTrail, chooseRating, chooseSeason} = rootSlice.actions;