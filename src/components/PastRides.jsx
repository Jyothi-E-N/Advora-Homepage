import React, { useState, useEffect } from "react";
import { useUser } from "../contexts/UserContext";
import { RideDetail } from "../components";

const PastRides = () => {
    const { state, city, user, cityState } = useUser();
    const [past, setPast] = useState([]);

    useEffect(() => {
        let code = user.station_code;
        let curDate = new Date();
        setPast(cityState?cityState.filter((cs)=> (cs.state==state && cs.city==city && curDate.getTime()> new Date(cs.date).getTime())).slice().sort((a,b)=> {
            let nearValuea = a.station_path.filter((num)=> (num>=code)).reduce((prev, cur)=> (Math.abs(cur-code)<Math.abs(prev-code)?cur:prev));
            let nearValueb = b.station_path.filter((num)=> (num>=code)).reduce((prev, cur)=> (Math.abs(cur-code)<Math.abs(prev-code)?cur:prev));

            return nearValuea-nearValueb;
        }):[]);
    }, [cityState, state, city,user])

    return (
        <div className="container">
            {past.length == 0 ? (
                <div>
                    <h6 className="text-danger fw-normal">
                        No results found!!
                    </h6>
                </div>
            ) : (
                past.map((ride) => (
                    <RideDetail ride={ride} code={user.station_code} />
                ))
            )}
        </div>
    );
};

export default PastRides;
