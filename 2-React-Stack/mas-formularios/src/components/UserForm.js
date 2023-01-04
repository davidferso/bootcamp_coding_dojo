import React from "react";
import styles from './Style.module.css';

const UserForm = props => {

    const { inputs, setInputs } = props;

    const onChange = (e) => {
        setInputs({
            ...inputs,
            [e.target.name]: e.target.value
        })
    }

    return (
        <form>
            <div className={styles.divform}>
                <label htmlFor="firstname">First Name: </label>
                <input type="text" onChange={onChange} name="firstName"/>
            </div>
            <div className={styles.divform}>
                <label htmlFor="lastName">Last Name: </label>
                <input type="text" onChange={onChange} name="lastName"/>
            </div>
            <div className={styles.divform}>
                <label htmlFor="email">Email: </label>
                <input type="text" onChange={onChange} name="email" />
            </div>
            <div className={styles.divform}>
                <label htmlFor="password">Password: </label>
                <input type="password" onChange={onChange} name="password" />
            </div>
            <div className={styles.divform}>
                <label htmlFor="confirmPassword">Confirm Password: </label>
                <input type="password" onChange={onChange} name="confirmPassword" />
            </div>
        </form>
    );
}

export default UserForm;