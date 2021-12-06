import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHandshake} from '@fortawesome/free-solid-svg-icons'
import './WorthCart.css'
import Meeting from '../Meeting/Meeting';

const WorthCart = (props) => {
    const {meetings} = props

      ///font for meet
    const meet = <FontAwesomeIcon icon={faHandshake} />

    ///get total using reduce
    const reducerFn=(previous ,current)=> previous + current.netWorth;
    const total = meetings.reduce(reducerFn,0);
   
    return (
        <div>
            <div className="worthCart-header">
            <h2 >{meet} Meeting Added: {props.meetings.length}</h2>
            <h3>Total Net-Worth: $ {total.toFixed(2)}</h3>
            </div>
           {
             meetings.map(meeting=>
                    <Meeting key={meeting.rank} meeting={meeting}></Meeting>
                     
                )

            }
        </div>
    );
};

export default WorthCart;