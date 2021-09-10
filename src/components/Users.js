import React from 'react';
import '../styles/Users.css';
import User from './User';

export default function Users({ users }) {
    return (
        <>
            <h1 className="section-header">Users</h1>
            <section className="users">
                {users.map((user, index) => <User key={index} user={user} />)}
            </section>
        </>
    )
};