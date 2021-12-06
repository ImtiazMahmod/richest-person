import React, { useEffect, useState } from 'react';
import Person from '../Person/Person';
import WorthCart from '../WorthCart/WorthCart';
import './Persons.css'

const Persons = () => {
    ///declare state variable 
    const [persons,setPersons]= useState([])
    const [meetings,setMeetings] = useState([])
    const [displayPersons,setDisplayPersons]= useState([])

    ///meet button hanlder
    const newMeetings = [...meetings];
    const handleMeet =(clickedPerson)=>{ 
            if(newMeetings.indexOf(clickedPerson)===-1){
                newMeetings.push(clickedPerson)
                setMeetings(newMeetings);  
            }
            else{
                return;
            }            
    }
    
    ///data fetch
    useEffect(()=>{
        fetch('./personData.json')
        .then(res=>res.json())
        .then(data=>{ setPersons(data)
            setDisplayPersons(data)
        }
        )
    },[])

    ///search functionality
    const richMan =e =>{
        const searchText = e.target.value;
        const matchedPerson = persons.filter(person=> person.name.toLowerCase().includes(searchText.toLowerCase()))
        setDisplayPersons(matchedPerson);
    }
    return (
        <>
        <div className="search-richMan">
        <input onChange={richMan} type="text" placeholder="search richest person to meet"/>
        </div>
            <div className="richest-person">
             <div className="all-person">
                {
                    displayPersons.map(person=><Person
                         key={person.rank}
                         handleMeet={handleMeet}
                         person={person}
                        ></Person>)
                }
             </div>
             <div>
                <WorthCart meetings={meetings}></WorthCart>
            </div>
         </div>
        </>
    );
};

export default Persons;