import React, { useEffect, useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import { UserProvider } from "./contexts/UserContext";

import {
    NavBar,
    MainHeader,
    NearestRides,
    PastRides,
    UpcomingRides,
} from "./components";

const App = () => {
    return (
        <div className="text-white d-flex flex-column align-content-center">
            <UserProvider>
                <div className="" style={{ backgroundColor: "black" }}>
                    <NavBar />
                </div>
                <div className="main-header mx-5 my-3">
                    <MainHeader />
                </div>
                <div className="main mx-5">
                    <Routes>
                        <Route path="/" element={<NearestRides />}></Route>
                        <Route
                            exact
                            path="/upcoming"
                            element={<UpcomingRides />}
                        ></Route>
                        <Route
                            exact
                            path="/past"
                            element={<PastRides />}
                        ></Route>
                    </Routes>
                </div>
            </UserProvider>
        </div>
    );
};

export default App;