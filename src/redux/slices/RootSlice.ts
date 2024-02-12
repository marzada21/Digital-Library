import { createSlice } from "@reduxjs/toolkit";

const rootSlice = createSlice({
    name: "root",
    initialState: {
        title: "Title",
        author: "Author",
        genre: "Genre",
        series: "Series",
        isbn: "ISBN Number",
    },
    reducers: {
        chooseTitle: (state, action) => {state.title = action.payload},
        chooseAuthor: (state, action) => {state.author = action.payload},
        chooseGenre: (state, action) => {state.genre = action.payload},
        chooseSeries: (state, action) => {state.series = action.payload},
        chooseISBN: (state, action) => {state.isbn = action.payload},
    }
})

export const reducer = rootSlice.reducer;
export const { chooseTitle, chooseAuthor, chooseGenre, chooseSeries, chooseISBN } = rootSlice.actions