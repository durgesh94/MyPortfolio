import React from "react";
import moment from "moment";
import "./work-card.css";

export default function WorkCard({ item }) {

    var endDate = moment(item.dateOfLeaving ? item.dateOfLeaving : Date.now());
    var startDate = moment(item.dateOfJoining);
    const years = (endDate.diff(startDate, 'years'));
    const months = (endDate.diff(startDate, 'months') % 12);

    return (
        <div className="work-card">
            <img src={item.logo.downloadUrl} className="work-logo" alt={item.name} />
            <div className="work-info">
                <label className="work-designation">{item.designation}</label>
                <label className="company-name">{item.name} : {item.type}</label>
                <div className="work-dates">
                    <label>
                        {moment(item.dateOfJoining).format('MMM YYYY')}
                    </label> - <label>
                        {item.dateOfLeaving ? moment(item.dateOfLeaving).format('MMM YYYY') : 'Present'}
                    </label> : <label>
                        {years} {years > 1 ? 'yrs' : 'yr'} {months} {months > 1 ? 'mos' : 'mo'}
                    </label>
                </div>
                <div className="work-desc">
                    <p>{item.description}</p>
                </div>
            </div>
        </div>
    )
}