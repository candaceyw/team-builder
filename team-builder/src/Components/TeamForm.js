import React, { useState, useEffect } from 'react';

const TeamForm = (props) => {
    const [teamMember, setTeamMember] = useState({
        name: '',
        email: '',
        role: ''
    })

    const handleChanges = event => {
        setTeamMember({ ...teamMember, [event.target.name]: event.target.value })
        // console.log(teamMember)
    }

    const submitHandler = event => {
        event.preventDefault();
        const newMember = {
            ...teamMember,
            id: Date.now()
        }
      
        props.addNewMember(teamMember);
        
        setTeamMember({ name:'', email:'', role:''})
    }

    useEffect(() => {

           return props.memberToEdit

    }, [])

    return (
        <div>
            <form onSubmit={submitHandler}>
                <label htmlFor="name">Name: </label>
                <input 
                onChange={handleChanges} 
                id="name"
                type="text" 
                name="name"
                placeholder="name" 
                value={teamMember.name}
                />

                <label htmlFor="email">Email: </label>
                <input 
                onChange={handleChanges} 
                type="text" 
                id="email"
                name="email"
                placeholder="email"
                value={teamMember.email}
                />

                <label htmlFor="role">Role: </label>
                <input 
                onChange={handleChanges} 
                type="text" 
                id="role"
                name="role"
                placeholder="role"
                value={teamMember.role}
                />

                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default TeamForm;