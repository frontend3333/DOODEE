import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
    const [form, setForm] = useState({
        name: '',
        phone: '',
        email: '',
        message: ''
    });

    const {name, phone, email, message} = form;

    const inputNameRef = React.useRef(null);
    const inputEmailRef = React.useRef(null);
    
    const handleChange = (e) => {
        const nextForm = {
            ...form,
            [e.target.name]: e.target.value
        };
        setForm(nextForm);
    };

    const handleReset =() => {
        setForm({
            name: '',
            phone: '',
            email: '',
            message: ''
        })
    };

    const userAlert = () => {
        alert(
            'Name : ' + name + '\n' +
            'Phone : ' + phone + '\n' +
            'E-mail : ' + email + '\n' +
            'Message : ' + message
        );
    };

    const errorAlert = () => {
        alert('이메일을 다시 한번 확인해주세요.');
    };

    const handleSubmit = () => {
        if (email.includes ('@')) {
            userAlert();
            handleReset();
            inputNameRef.current.focus();
        } else {
            errorAlert();
            setForm({
                ...form,
                email: ''
            });
            inputEmailRef.current.focus();
        }
    };



    return (
        <>
        <div className='contact'>
            <div className='contact_header'>
                <h1 className='contact_title'>C O N T A C T</h1>
                <p className='contact_request'>Request a Free Quote Call or Message</p>
            </div>
            <div className='contact_form'>
                <input 
                    type='text'
                    placeholder='Name'
                    name="name"
                    value={name}  
                    onChange={handleChange}
                    ref = {inputNameRef}  
                />
                 <input 
                    type='text'
                    placeholder='Phone'
                    name="phone"
                    value={phone}  
                    onChange={handleChange}    

                />
                 <input 
                    type='text'
                    placeholder='E-mail'
                    name="email"
                    value={email}  
                    onChange={handleChange}  
                    ref = {inputEmailRef}  
                />
                 <input 
                    type='text'
                    placeholder='Message'
                    name="message"
                    value={message}  
                    onChange={handleChange}   
                 />
                <button className='submit' onClick={handleSubmit}>
                    <p>Submit</p>
                </button>
            </div>
            <div className='contact_intro'>
                intro
            </div>
            <div className='contact_map'>
                map
            </div>
            <div className='copyright'>
                <p>Copyright(c)2020 doodee All Right Reserved</p>
            </div>
        </div>
        </>
    );  
};

export default Contact;