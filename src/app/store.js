import {
    createSlice,
    configureStore,
    getDefaultMiddleware
} from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import saga from "./saga";


const linkSlice = createSlice({
    name: "link",
    initialState: {
        links: []
    },
    reducers: {
        fetchData: (state, action) => {
            return {
                links: action.payload
            };
        }
    }
});

export const { fetchData } = linkSlice.actions;

let sagaMiddleware = createSagaMiddleware();
const middleware = [...getDefaultMiddleware({ thunk: false }), sagaMiddleware];

const store = configureStore({
    reducer: {
        links: linkSlice.reducer
    },
    middleware
});

sagaMiddleware.run(saga);

export default store;