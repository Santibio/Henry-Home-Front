import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getHotels, adminStatus } from "../FilesStore/Actions/index.js";
import Cards from "../components/Cards";
import Loading from "../components/Loading";
import Pages from "../components/Pages";

import "../assets/css/DashboardAdmin/DashboardAdmin.scss";


export default function DashboardAdmin() {

    const [page, setPage] = useState(1)
    const [size] = useState(6)

    const dispatch = useDispatch();
    const allHotels = useSelector((state) => state.hotels);
    const count = useSelector((state) => state.count);

    const changePage = (e) => {
        setPage(e)
    }

    const modifyStatus = (id, status) => {
        dispatch(adminStatus({ id, status }));
    }

    useEffect(() => {
        dispatch(getHotels(page, size));
    }, [dispatch, page, size]);

    if (allHotels?.length === 0) {
        return (
            <div>
                <Loading />
            </div>
        );
    } else {
        return (
            <div className="cardsHome">
                <Pages pages={Math.floor(count / size)} actualPage={page} changePage={changePage} />
                {allHotels.map((e) => {
                    return (
                        e.status === "Pending" && (
                            <div className="adminCards">
                                <Cards
                                    name={e.name}
                                    id={e.id}
                                    location={e.Location.name}
                                    img={e.images}
                                    price={e.pricePerNight}
                                />
                                <section>
                                    <button className="accepted" onClick={() => modifyStatus(e.id, "Accepted")}> Aceptar </button>
                                    <button className="rejected" onClick={() => modifyStatus(e.id, "Rejected")}> Rechazar </button>
                                </section>
                            </div>
                        )
                    )
                })}
            </div>
        );
    }
}