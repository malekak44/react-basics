import React, { useState } from 'react';

export default function Form() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        document.querySelector(".form-results").innerHTML = ` <h4>Name: ${name}</h4>
       <h4>Email: ${email}</h4>`;
        setName('');
        setEmail('');
    }

    const handleName = (e) => {
        setName(e.target.value);
    }

    const handleEmail = (e) => {
        setEmail(e.target.value);
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" value={name} onChange={handleName} autoComplete="off" placeholder="Enter your name..." />
                <input type="email" name="email" value={email} onChange={handleEmail} autoComplete="off" placeholder="Enter your email..." />
                <button style={{ padding: "12px 16px" }} type="submit">Submit</button>
            </form>

            <div className="form-results">

            </div>
        </>
    )
}
