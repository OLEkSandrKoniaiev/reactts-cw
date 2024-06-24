import {createSlice} from "@reduxjs/toolkit";

type IState ={
    theme: boolean
}

const initialState: IState ={
    theme: false
}


const themeSlice = createSlice({
    name:"themeSlice",
    initialState,
    reducers:{
        changeTheme:(state)=>{
            state.theme = !state.theme
        }
    }
});

const {reducer: themeReducer, actions} = themeSlice;

const themeActions ={
    ...actions
}

export {
    themeReducer,
    themeActions
}