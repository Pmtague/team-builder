import React, { useState } from 'react';

const TeamForm = props => {
    const { teamMember, setTeamMember, team, setTeam } = props;

    const changeHandler = event => {
        const updatedMember = { ...teamMember, [event.target.name]: event.target.value };
        setTeamMember(updatedMember);
    };

    const handleSubmit = event => {
        event.preventDefault();
        console.log('Team Member', teamMember);
        return setTeam([...team, teamMember]);
    }

    return (
        <form onSubmit={ handleSubmit }>
            <fieldset>
                <legend>Team Signup</legend>
                <div>
                    <label for='username'>
                        Name
                        <div>
                            <input
                                type='text'
                                name='username'
                                placeholder='Enter your name'
                                value={ teamMember.username }
                                onChange={ changeHandler }
                            />
                        </div>
                    </label>
                </div>
                <div>
                    <label for='email'>
                        Email Address
                        <div>
                            <input
                                type='email'
                                name='email'
                                placeholder='Enter email'
                                value={ teamMember.email }
                                onChange={ changeHandler }

                            />
                        </div>
                    </label>
                </div>
                <div>
                    <label for='role'>
                        Role
                        <div>
                            <input
                                type='text'
                                name='role'
                                placeholder='Enter role'
                                value={ teamMember.role }
                                onChange={ changeHandler }
                            />
                        </div>
                    </label>
                </div>
                <button type="submit" className="btn btn-primary">
                    Submit
                </button>
            </fieldset>
        </form>
    )
}

export default TeamForm;