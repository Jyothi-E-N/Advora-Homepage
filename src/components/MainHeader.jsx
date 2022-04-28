import React, { useState , useEffect} from "react";
import { Link } from "react-router-dom";
import { useUser } from "../contexts/UserContext";
import { useLocation } from "react-router-dom";

const MainHeader = () => {
    const { state, city, setCity, setState, cityState } = useUser();
    const [cityNames, setCityNames] = useState([]);
    const [stateNames, setstateNames] = useState([]);
    const [filter, setFilter] = useState(false);
    const location= useLocation();

    const handleStateCity = (e) => {
        setState(e.target.value);
        const cityArr = [];
        cityState
            ?.filter((cs) => cs.state == e.target.value)
            ?.map((cs) => {
                cityArr.push(cs.city);
            });
        setCityNames(cityArr);
        let filteredData = cityState?.filter((cs) => cs.state == e.target.value);
        setCity(filteredData[0].city);
    };

    useEffect(() => {
        const stateArr = [];
        cityState?.map((cs)=>{
            stateArr.push(cs.state);
        });
        
        setstateNames(stateArr);
        

    }, [cityState]);

    useEffect(()=>{
        const cityArr = [];
        cityState
            ?.filter((cs) => cs.state == state)
            .map((cs) => {
                cityArr.push(cs.city);
            });
            setCityNames(cityArr);
    },[cityState, stateNames])


    return (
        <div className="m=0 d-flex flex-row justify-content-between align-items-center navbar rounded">
            <div className="links d-flex flex-row justify-content-between">
                <Link
                    to="/"
                    className="text-light"
                    style={
                        location.pathname == "/"
                            ? { textDecoration: "underline" }
                            : { textDecoration: "none" }
                    }
                >
                    Nearest Rides
                </Link>
                <Link
                    to="/upcoming"
                    className="text-light"
                    style={
                        location.pathname == "/upcoming"
                            ? { textDecoration: "underline" }
                            : { textDecoration: "none" }
                    }
                >
                    Upcoming Rides
                </Link>
                <Link
                    to="/past"
                    className="text-light"
                    style={
                        location.pathname == "/past"
                            ? { textDecoration: "underline" }
                            : { textDecoration: "none" }
                    }
                >
                    Past Rides
                </Link>
            </div>
            <div className="filters mt-3 d-flex flex-column h-auto justify-content-center align-items-center w-auto">
                <button
                    className="btn filter-button"
                    onClick={() => {
                        setFilter(!filter);
                    }}
                >
                    filter
                </button>
                {filter && (
                    <div className="dropdown-list d-flex flex-column align-items-right justify-content-center bg-light">
                        <p className="text-center">Filters</p>
                        <hr className="text-white bg-white m-0" />
                        <select
                            className="form-select form-select-sm bg-secondary text-light"
                            aria-label=".form-select-sm example"
                            onChange={handleStateCity}
                            value={state}
                        >
                            {[...new Set(stateNames)].map((cs, id) => (
                                <option value={cs} key={id}>
                                    {cs}
                                </option>
                            ))}
                        </select>
                        <select
                            className="form-select form-select-sm bg-secondary text-light"
                            aria-label=".form-select-sm example"
                            onChange={(e) => setCity(e.target.value)}
                            value={city}
                        >
                            {[...new Set(cityNames)].map((cs, id) => (
                                <option key={id} value={cs}>
                                    {cs}
                                </option>
                            ))}
                        </select>
                    </div>
                )}
            </div>
        </div>
    );
};

export default MainHeader;