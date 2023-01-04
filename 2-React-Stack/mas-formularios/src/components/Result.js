import React from 'react';
import styles from './Style.module.css';

const Result = props => {

    const {firstName, lastName, email, password, confirmPassword} = props.data;

    return (
        <div>
            <div>
                Your Form Data
            </div>
            <div className={styles.formdata}>
                <div className={styles.formdata1}>
                    <p>First Name:</p>
                    <p>Last Name:</p>
                    <p>Email:</p>
                    <p>Password</p>
                    <p>Confirm Password</p>
                </div>
                <div className={styles.formdata2}>
                    <p>{firstName}</p>
                    <p>{lastName}</p>
                    <p>{email}</p>
                    <p>{password}</p>
                    <p>{confirmPassword}</p>
                </div>
            </div>
        </div>
    )
};

export default Result;