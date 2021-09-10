import React from 'react';
import { FaTrash } from 'react-icons/fa';

export default function List({ item, removeItem }) {
    const { id, name, email } = item;

    return (
        <div className="list-item">
            <p>{id}</p>
            <p>{name}</p>
            <p>{email}</p>
            <button className="trashBtn" onClick={() => removeItem(id)}>
                <FaTrash />
            </button>
        </div>
    )
};