import React from 'react';

const TeamMembers = props => {
    const { team } = props;

    return (
        <div>
            <h1>Team Member List</h1>
            {team.map((member) => {
                console.log('Member', member)
                return (
                    <div>
                        <h3>{member.username}</h3>
                        <p>Email: {member.email}</p>
                        <p>Role: {member.role}</p>
                    </div>
                )
            })}
        </div>
    )
}

export default TeamMembers;