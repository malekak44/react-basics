import React from 'react';
import { useTheme, useThemeUpdate } from './Context';

export default function User({ user }) {
    const { avatar_url, login } = user;
    const darkTheme = useTheme();
    const toggleTheme = useThemeUpdate();
    const themeStyles = {
        backgroundColor: darkTheme ? "#222" : "#fff"
    }

    return (
        <div className="user" style={themeStyles} onClick={toggleTheme}>
            <div className="user-img-div">
                <img src={avatar_url} alt={login} />
            </div>
            <h3>{login}</h3>
        </div>
    )
}