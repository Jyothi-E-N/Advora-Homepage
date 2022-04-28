// connect api to the store
import { configureStore } from "@reduxjs/toolkit";
import { ridesApi } from "../services/rides";

export default configureStore({
    reducer: {
        [ridesApi.reducerPath]: ridesApi.reducer,
    },
});
