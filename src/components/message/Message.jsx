import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import './message.css';


function Message() {
    const [comment, setComment] = useState('');
    const handleSubmit = async (e) => {
        e.preventDefault()  // prevent page refresh
        alert(`Your comment has been submitted`)
        setComment('') // clear the input field

        try {
            const response = await fetch('http://localhost:3001/saveData', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({ "comment":comment }),
            });
      
            if (response.ok) {
              console.log('Data saved successfully!');
            } else {
              console.error('Failed to save data.');
            }
          } catch (error) {
            console.error('Error:', error);
          }
    }


    return (
        <form onSubmit={handleSubmit}>
            <fieldset>
            <div className='Field'>
                <label for="message">Leave a Comment</label>
                <textarea id="message" className="main-text" rows={20} cols={40} value={comment} onChange={e => setComment(e.target.value)} />
            </div>
            <button id="btn1" type="submit" className="btn btn-primary">Submit</button>
            </fieldset>
        </form>
    )
}

export default Message;