import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    data: [],
    isLoading: false,
    edit: -1
}

const CategoriesSlice = createSlice({
    name: 'categories',
    initialState,
    reducers: {
        addItem: (state, actions) => {
            state.data = [...state.data, actions.payload]
        },
        editItem: (state, actions) => {
            state.data[state.edit] = actions.payload
            state.edit = -1
        },
        handleEdit: (state, actions) => {
            state.edit = actions.payload
        },
        deleteItem: (state, actions) => {
            state.data =state.data.filter((_, idx) => idx !== actions.payload)
        }
    }
})

export default CategoriesSlice.reducer
export const CategoriesActions = CategoriesSlice.actions

