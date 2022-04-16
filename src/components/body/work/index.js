import React, { useState, useEffect } from "react";
import "./work.css";
import Separator from "../../comman/separator";
import WorkCard from "./work-card";
import client from "../../../api";
import { GET_COMPANIES } from "../../../api/queries";

export default function Work() {

    const [companies, setCompanies] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        client.request(GET_COMPANIES)
            .then(({ companiesList }) => setCompanies(companiesList.items))
            .catch((err) => setError(err))
            .finally(() => setLoading(false));
    }, []);

    return (
        <div className="work">
            <Separator />
            <label className="section-title">Work</label>
            <div className="work-list">
                {loading && <div>Loading...</div>}
                {error && <div className="error-text">You’ve hit the FREE TIER API limit of 10 consecutive requests. This will reset in 120-seconds.</div>}
                {companies && companies.length < 1 && !error && <div>No companies available</div>}
                {companies && companies.map((item) => {
                    return <WorkCard key={item.id} item={item} />
                })}
            </div>
        </div>
    )
}