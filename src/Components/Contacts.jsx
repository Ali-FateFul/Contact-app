import React, { useState } from 'react';
import { v4 } from "uuid";

import styles from "./contacts.module.css";
import { inputs } from '../Constant/data';
import Contact from './Contact';

const Contacts = () => {

    const [data , setData] = useState([]);
    const [alert , setAlert] = useState("");
    const [contact , setContact] = useState({
      id: "",
      fname : "",
      lname : "",
      email : "",
      number : "",
    });
    
    const changeHandler = (event) => {
      const name = event.target.name;
      const value = event.target.value;
      setContact(contact => ({...contact , [name] : value }))
    }
    const clickHandler = () => {
      if (!contact.fname || !contact.lname || !contact.email || !contact.number) {
        setAlert("please enter the valid data!")
        return;
      }
      setAlert("")
      const newContact = {...contact , id : v4()}
      setData(data => [...data , newContact]);
      setContact({
        fname : "",
        lname : "",
        email : "",
        number : "",
      })
    }
    const deleteHandler = (id) => {
      const newContact = data.filter(contact => contact.id !== id)
      setData(newContact)
    }
    
    return (
        <div className={styles.container}>
          <div className={styles.form}>
            {inputs.map((input , index ) => <input key={index} type={input.type} placeholder={input.placeholder} value={contact[input.name]} onChange={changeHandler} name={input.name}/>)}
            <button type="button" onClick={clickHandler}>Add Contact</button>
          </div>
          <div className={styles.alert}>{alert && <p>{alert}</p>}</div>
          <Contact data={data} deleteHandler={deleteHandler}/>
        </div>
    );
};

export default Contacts;