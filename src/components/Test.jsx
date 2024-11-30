import React from 'react'
import {useGetAllZonesQuery} from '../store/services/zoneService'
import {useGetAllactivitysQuery} from '../store/services/activityService'
import classes from './Test.module.css'


const Test = () => {
    const {data,isSuccess,status} = useGetAllZonesQuery('')
    const {data:activities} = useGetAllactivitysQuery('')
    const [zone,setZone] =  React.useState(false)
    const [activity,setActivity] =  React.useState(false)
    console.log(activities,'data')
  return (
    <div>
      <div className={classes.test}>
    <div>
      <button type='button' onClick={()=>setZone(prev=>!prev)}>Zones</button>
      {zone && data?.map(item=>(
        <div key={item.id}>
          <pre>
            {JSON.stringify(item,null,2)}
            </pre>
        </div>
      ))}
      </div>
      <div>
      <button type='button' onClick={()=>setActivity(prev=>!prev)}>Activities</button>
      {activity && activities?.map(item=>(
        <div key={item.id}>
          <pre>
            {JSON.stringify(item,null,2)}
            </pre>
        </div>
      ))}
      </div>
    </div>
    </div>
  )
}

export default Test
