import React, { useState } from "react";
import styles from './UserFormComponent.module.css';

const UserForm = (props) => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const createUser = (e) => {
        e.preventDefault();
        const newUser = { firstName, lastName, email, password, confirmPassword };
    };

    return (
        <form onSubmit={createUser}>
            <div className={styles.divform}>
                <label>First Name: </label>
                <input type="text" onChange={(e) => setFirstName(e.target.value)} value={firstName} />
            </div>
            <div className={styles.divform}>
                <label>Last Name: </label>
                <input type="text" onChange={(e) => setLastName(e.target.value)} value={lastName} />
            </div>
            <div className={styles.divform}>
                <label>Email: </label>
                <input type="text" onChange={(e) => setEmail(e.target.value)} value={email} />
            </div>
            <div className={styles.divform}>
                <label>Password: </label>
                <input type="password" onChange={(e) => setPassword(e.target.value)} value={password} />
            </div>
            <div className={styles.divform}>
                <label>Confirm Password: </label>
                <input type="password" onChange={(e) => setConfirmPassword(e.target.value)} value={confirmPassword} />
            </div>
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
        </form>
    );
}

export default UserForm;