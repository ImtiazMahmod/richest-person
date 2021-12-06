import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHandshake} from '@fortawesome/free-solid-svg-icons'
import { faFacebook,faTwitter,faInstagram} from '@fortawesome/free-brands-svg-icons'
import './Person.css'

const Person = (props) => {
    ///destruturing props data
    const {name,founder,coFounder,age,country,netWorth,img}= props.person
    ///font for meet
    const meet = <FontAwesomeIcon icon={faHandshake} />
    const fb = <FontAwesomeIcon icon={faFacebook}/>
    const twitter = <FontAwesomeIcon icon={faTwitter}/>
    const instagram = <FontAwesomeIcon icon={faInstagram}/>
    return (
        <div className="person">
            <div className="person-thumb-container">
                <img className="person-thumb" src={img} alt="" />
            </div>
           <div>
                 <h3>Name: <span className="person-info">{name}</span></h3>
                {founder?
                <h3>Founder: <span className="person-info">{founder}</span></h3> 
                :<h3>Co-founder: <span className="person-info">{coFounder}</span></h3>}
                <h3>Age: <span className="person-info">{age}</span></h3>
                <h3>Country: <span className="person-info">{country}</span></h3>
                <h3>Net-worth: <span className="person-info">$ {netWorth}  Billion</span></h3>
           </div>
            <button 
            onClick={()=>props.handleMeet(props.person)} 
            className="btn-regular">{meet} Meet</button>
           <h4 className="follow">Follow On</h4>
           <div>{fb} {twitter} {instagram}</div>
            <div>
                
            </div>
        </div>
    );
};

export default Person;