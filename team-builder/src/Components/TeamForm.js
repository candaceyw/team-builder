import React, { useState, useEffect } from 'react';
import './TeamForm.css';

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


    const [deleteUser, setDeleteUser] = useState([])

    const handleRemoveItem = () => {
        // console.log(handleRemoveItem)
       };

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
        <div className="formWrapper">
            <form onSubmit={submitHandler} className="teamForm">
                <label htmlFor="name">Name: </label>
                <input 
                className="nameInput"
                onChange={handleChanges} 
                id="name"
                type="text" 
                name="name"
                placeholder="name" 
                value={teamMember.name}
                />

                <label htmlFor="email">Email: </label>
                <input 
                className="emailInput"
                onChange={handleChanges} 
                type="text" 
                id="email"
                name="email"
                placeholder="email"
                value={teamMember.email}
                />

                <label htmlFor="role">Role: </label>
                <input 
                className="roleInput"
                onChange={handleChanges} 
                type="text" 
                id="role"
                name="role"
                placeholder="role"
                value={teamMember.role}
                />

                <button className="submitButton" type="submit">Submit</button>
            </form>
        </div>
    )
}

export default TeamForm;