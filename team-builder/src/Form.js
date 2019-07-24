import React, { useState } from 'react';

const TeamForm = () => {
    return (
        <form>
            <fieldset>
                <legend>Team Signup</legend>
                <div>
                    <label for='username'>
                        Team Member Name
                        <div>
                            <input
                                type='text'
                                placeholder='Enter your name' 
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
                                placeholder='Enter email'
                            />
                        </div>
                    </label>
                </div>
                <div>
                    <label for='role'>
                        Team Member Role
                        <div>
                            <input
                                type='text'
                                placeholder='Enter role'
                            />
                        </div>
                    </label>
                </div>
            </fieldset>
        </form>
    )
}