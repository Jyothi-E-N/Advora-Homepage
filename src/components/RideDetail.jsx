import React from "react";

const RideDetail = ({ ride, code }) => {
    
    return (
        <div
            className="my-3 py-3 px-2 row gy-2 rides-detail"
            style={{ backgroundColor: "", borderRadius: "10px" }}
        >
            <div className="content-div col">
                <div className="row gy-2">
                    <img
                        // src={require("../images/image 1.png")}
                        src={ride.map_url}
                        style={{ height: "200px" }}
                        className="img-fluid col img-rounded img-thumbnail bg-dark border-0"
                    />
                    <div className="ride-desc d-flex flex-column justify-content-around col">
                        <h6
                            className="text-light fw-normal "
                            style={{ opacity: "0.7" }}
                        >
                            <strong
                                style={{ opacity: "1" }}
                                className=" fw-normal desc-title"
                            >
                                Ride Id
                            </strong>
                            {" : " + ride.id}
                        </h6>
                        <h6
                            className="text-light fw-normal "
                            style={{ opacity: "0.7" }}
                        >
                            <strong
                                style={{ opacity: "1" }}
                                className="fw-normal desc-title"
                            >
                                Origin Station
                            </strong>
                            {" : " + ride.origin_station_code}
                        </h6>
                        <h6
                            className="text-light fw-normal "
                            style={{ opacity: "0.7" }}
                        >
                            <strong
                                style={{ opacity: "1" }}
                                className="fw-normal desc-title"
                            >
                                station_path
                            </strong>
                            {" : " + ride.station_path}
                        </h6>
                        <h6
                            className="text-light fw-normal "
                            style={{ opacity: "0.7" }}
                        >
                            <strong
                                style={{ opacity: "1" }}
                                className=" fw-normal desc-title"
                            >
                                Date
                            </strong>
                            {" : " + ride.date}
                        </h6>
                        <h6
                            className="text-light fw-normal "
                            style={{ opacity: "0.7" }}
                        >
                            <strong
                                className=" fw-normal desc-title"
                                style={{ opacity: "1" }}
                            >
                                Distance
                            </strong>
                            {" : " +
                                (ride?.station_path
                                    ?.filter((num) => num >= code)
                                    .reduce((a, b) =>
                                        Math.abs(b - code) < Math.abs(a - code)
                                            ? b
                                            : a
                                    ) -
                                    code)}
                        </h6>
                    </div>
                </div>
            </div>
            <div className="cityState-div col">
                <div className="row justify-content-around gx-2 text-center align-items-start">
                    <p
                        className="m-1 p-1 rounded col"
                        style={{ backgroundColor: "black" }}
                    >
                        {ride.city}
                    </p>
                    <p
                        className="m-1 p-1 rounded col"
                        style={{ backgroundColor: "black" }}
                    >
                        {ride.state}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default RideDetail;
