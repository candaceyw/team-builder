import React, { useState, useEffect} from 'react';
import './TeamForm.css';

const TeamMembers = (props) => {
    console.log(props)
    // useEffect(() => {
    //     console.log(`${name} ${email} ${role}`)
        
    //   }, [])

    return (
        <div className="memberWrapper">
            {props.members.map(member => (
                <div className="member" key={member.id}>
                    <h2>{member.name}</h2>
                    <p>{member.email}</p>
                    <p>{member.role}</p>
                        <div> 
                            <button>Edit</button> 
                            <button >Delete</button>
                        </div>
                </div>

            ))}
        
        </div>
    
    )
}

export default TeamMembers;