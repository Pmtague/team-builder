import React, { useState } from 'react';
import './App.css';
import TeamForm from './Form.js';
import TeamMembers from './TeamMembers.js';
import { getMaxListeners } from 'cluster';

function App() {
  const [teamMember, setTeamMember] = useState({ username: '', email: '', role: '' });

  const [team, setTeam] = useState([{ username: 'Penny', email: 'pmtague9@gmail.com', role: 'Front End Developer' }]);

  return (
    <div className="App">
      <h1>Welcome Team!</h1>
      <TeamForm />
      <div>
        <TeamMembers />
      </div>
    </div>
  );
}

export default App;
