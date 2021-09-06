import React from 'react'

export default function User({user}) {
    const {avatar_url,login}=user;
    return (
        <div className="user">
            <div className="user-img-div">
           <img src={avatar_url} alt={login} />
            </div>
            <h3>{login}</h3>
        </div>
    )
}
