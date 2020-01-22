import React, { useState, useEffect } from 'react';
import TeamForm from './Components/TeamForm';
import TeamMembers from './Components/TeamMembers';
import './App.css';

function App() {
  const [members, setMember] = useState([
    {
        name: 'John',
        email: 'john@email.com',
        role: 'developer'
    }
]);

  const addNewMember = member => {
    const newMember = setMember([...members, member])
  }

  const [memberToEdit, setMemberToEdit ] = useState([])

  return (
    <div className="App">
     <h1>Team Members</h1>
     <TeamForm addNewMember={addNewMember}/>
     <TeamMembers members={members} key='index' />
    </div>
  );
}

export default App;
