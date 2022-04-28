import React, { useContext, useState, useEffect } from "react";
import { useGetUserQuery } from "../services/rides";
import { useGetRidesQuery } from "../services/rides";

const UserContext = React.createContext();
export const useUser = () => useContext(UserContext);

export const UserProvider = ({ children }) => {
    const { data: user, isFetching } = useGetUserQuery();
    const { data: cityState, isFetch } = useGetRidesQuery();
    const [city, setCity] = useState(cityState ? cityState[0].city : "");
    const [state, setState] = useState(cityState ? cityState[0].state : "");

    useEffect(() => {
        setState(cityState ? cityState[0].state : "");
    }, [cityState]);

    useEffect(()=>{
        const filteredData = cityState?.filter((cs)=> cs.state==state);
        setCity(filteredData?filteredData[0].city:"");
        
    }, [state]);
    
    if (isFetching) return "Loading...";
    const value = { user, city, setCity, state, setState, cityState };

    return (
        <UserContext.Provider value={value}>
            {!isFetching && children}
        </UserContext.Provider>
    );
};
