import React from 'react';

import styles from "./Contact.module.css";
import Item from './item';

const Contact = ({data , deleteHandler}) => {
    return (
       <div className={styles.container}>
            <h3>Contacts List</h3>
            {data.length ? (
                <ul className={styles.contacts}>
                {
                data.map(contact => <Item data={contact} key={contact.id} deleteHandler={deleteHandler}/>)
                }
                </ul>
            ) : (
            <p className={styles.message}>No Contact</p>
            )}
       </div>
    );
};

export default Contact; 