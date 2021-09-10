import React, { useState, useRef, useEffect } from 'react';
import '../styles/Form.css';
import List from './List';

export default function Form() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [id, setId] = useState(1);
    const [list, setList] = useState([]);
    const [showList, setShowList] = useState('none');
    const nameRef = useRef("");

    const handleSubmit = (e) => {
        e.preventDefault();

        if (name && email) {
            setId(id + 1);
            const item = { id, name, email };
            setList([...list, item]);
            setShowList('block');
            setName('');
            setEmail('');
        } else {
            alert("Please enter the values!");
        }
    }

    useEffect(() => {
        // nameRef.current.focus();
        nameRef.current = name;
    }, [name]);

    useEffect(() => {
        if (list.length === 0) {
            setShowList('none');
        }
    }, [list]);

    const removeItem = (id) => {
        setList(
            list.filter(item => item.id !== id)
        )
    }

    return (
        <>
            <h1 className="section-header" style={{ marginTop: "0" }}>Form</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" ref={nameRef} value={name} onChange={(e) => setName(e.target.value)} autoComplete="off" placeholder="Enter your name..." />
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} autoComplete="off" placeholder="Enter your email..." />
                <button style={{ padding: "0.75rem 1.25rem" }} type="submit">Submit</button>
            </form>

            <div id="list-container" style={{ display: showList }}>
                {list.map((item, index) => <List key={index} item={item} removeItem={removeItem} />)
                }
            </div>

            <p>{name && `Your previous name was: ${nameRef.current}`}</p>
        </>
    )
}