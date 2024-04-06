import React from 'react';
import styles from './Header.module.css';
const Header = () => {
    return (
        <div className={styles.container}>
            <h1>Contact App</h1>
            <p><a href="http://botostart.ir">FateFul</a> | React.Js Full Course</p>
        </div>
    );
};

export default Header;