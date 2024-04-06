import React from 'react';

import styles from "./Item.module.css";
import mailbox from "../Images/mailbox.svg";
import phone from "../Images/phone.svg";
import trash from "../Images/trash.svg";

const Item = ({data : {fname , lname , email , number , id} , deleteHandler}) => {
    return (
        <li className={styles.item}>
            <div><p>{fname} {lname}</p></div>
            <div><img src={mailbox} alt="mailbox"/><p> {email}</p></div>
            <div><img src={phone} alt="phone"/><p> {number}</p></div>
            <button onClick={() => deleteHandler(id)}><img src={trash}/></button>
        </li>
    );
};

export default Item;