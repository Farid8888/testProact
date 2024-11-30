import {configureStore} from '@reduxjs/toolkit'
import {rootReducer} from './rootStore/rootStore'
import zonesApi from './services/zoneService'
import activityApi from './services/activityService'
import {setupListeners} from '@reduxjs/toolkit/query'

export const store = configureStore({
reducer:{
    rootStore:rootReducer,
    [zonesApi.reducerPath]:zonesApi.reducer,
    [activityApi.reducerPath]:activityApi.reducer
},
middleware:(getDefaultMiddleware)=>{
   return  getDefaultMiddleware().concat(zonesApi.middleware).concat(activityApi.middleware)
}
})


setupListeners(store.dispatch)