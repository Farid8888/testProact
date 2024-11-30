import {combineReducers} from "@reduxjs/toolkit"
import zoneReducer from '../reducers/zoneSlice'
// import statusSlice from "../reducers/statusSlice"

export const rootReducer =combineReducers({
    zones:zoneReducer,
    // status:statusSlice,
})