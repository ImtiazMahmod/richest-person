import React from 'react';
import './Meeting.css'

const Meeting = (props) => {
    const {meeting} = props;
    return (
        <div>
            <div className="meeting-detail">      
                        <img className="meeting-thumb" src={meeting.img} alt="" />
                        <h3> {meeting.name}</h3>
            </div>
        </div>
    );
};

export default Meeting;