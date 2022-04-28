import React, {useState, useEffect} from 'react';
import { useUser } from '../contexts/UserContext';
import {RideDetail} from "../components";

const NearestRides = () => {
    const {state, city, user, cityState} = useUser();
    const [nearest, setNearest] = useState([]);

    useEffect(() => {
        let code = user.station_code;
        setNearest(cityState?cityState.filter((cs)=> (cs.state==state && cs.city==city)).slice().sort((a,b)=> {
            let nearValuea = a.station_path.filter((num)=> (num>=code)).reduce((prev, cur)=> (Math.abs(cur-code)<Math.abs(prev-code)?cur:prev));
            let nearValueb = b.station_path.filter((num)=> (num>=code)).reduce((prev, cur)=> (Math.abs(cur-code)<Math.abs(prev-code)?cur:prev));

            return nearValuea-nearValueb;
        }):[]);
    }, [cityState, state, city,user])
    
    return (
        <div className='container'>
            {nearest.map((ride)=> <RideDetail ride={ride} code={user.station_code}/>)}
        </div>
    )
}

export default NearestRides