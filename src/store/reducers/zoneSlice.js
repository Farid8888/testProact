import { createSlice} from "@reduxjs/toolkit"



const initialState ={
    zones:[],
    zone:null
}

const zoneSlice = createSlice({
    name:'zone',
    initialState,
    reducers:{
        addZone:(state,action)=>{
            state.zones.unshift(action.payload)
        },
        getZones:(state,action)=>{
         state.zones = [...action.payload]
        },
        getOne:(state,action)=>{
          state.zone = {...action.payload}
        },
        edit:(state,action)=>{
         const ind = state.zones?.findIndex(zone=>zone.id == action.payload.id)
        //  console.log(action.payload,ind,'act')
        //  const newArr =[...state.zones!]
        //  const obj = state.zones![ind!]
        //  const newObj = {...obj,body:action.payload.body,title:action.payload.title}
        //  newArr[ind!] = newObj
        //  state.zones = newArr
         state.zones[ind] = {...state.zones[ind],body:action.payload.body,title:action.payload.title}
        },
        deletezone:(state,action)=>{
            state.zones = state.zones.filter(item=>item.id != action.payload)
        }
    }
})

export const {addzone,getzones,getOne,edit,deletezone} = zoneSlice.actions
export default zoneSlice.reducer