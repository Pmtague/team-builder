import React, { useState } from 'react';
import './App.css';
import TeamForm from './Form.js';
import TeamMembers from './TeamMembers.js';

function App() {
  const [teamMember, setTeamMember] = useState({ username: '', email: '', role: '' });

  const [team, setTeam] = useState([{ username: 'Penny', email: 'pmtague9@gmail.com', role: 'Front End Developer' }]);

  // function editMember() {
  //   return (
  //     member.map(member => {
  //       if(member === memberToEdit) {

  //       }
  //     })
  //   )
  // }

  return (
    <div className="App">
      <h1>Welcome Team!</h1>
      <TeamForm team={ team } setTeam={ setTeam } teamMember={ teamMember } setTeamMember={ setTeamMember }/>
      <div> 
        <TeamMembers team={ team } />
      </div>
    </div>
  );
}

export default App;
