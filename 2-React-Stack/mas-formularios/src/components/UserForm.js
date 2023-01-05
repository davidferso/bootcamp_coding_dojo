import React, { useRef } from "react";
import styles from './Style.module.css';

const UserForm = props => {

    const { inputs, setInputs } = props;
    const firstNameValidatorRef = useRef(null);
    const lastNameValidatorRef = useRef(null);
    const emailValidatorRef = useRef(null);
    const passwordValidatorRef = useRef(null);
    const confirmPasswordValidatorRef = useRef(null);

    const validateFirstName = (e) => e.target.value.length < 3 & e.target.value.length !== 0
        ? firstNameValidatorRef.current.innerHTML = "First Name must be at least 2 characters"
        : firstNameValidatorRef.current.innerHTML = "";

    const validateLasttName = (e) => e.target.value.length < 3 & e.target.value.length !== 0
        ? lastNameValidatorRef.current.innerHTML = "Last Name must be at least 2 characters"
        : lastNameValidatorRef.current.innerHTML = "";

    const validateEmail = (e) => e.target.value.length < 6 & e.target.value.length !== 0
        ? emailValidatorRef.current.innerHTML = "Email must be at least 5 characters"
        : emailValidatorRef.current.innerHTML = "";

    const validatePassword = (e) => e.target.value.length < 8 & e.target.value.length !== 0
        ? passwordValidatorRef.current.innerHTML = "Password must be at least 8 characters"
        : passwordValidatorRef.current.innerHTML = "";

    const validatePasswordMatch = (e) => inputs.password !== e.target.value & e.target.value.length !== 0
        ? confirmPasswordValidatorRef.current.innerHTML = "Passwords do not match"
        : confirmPasswordValidatorRef.current.innerHTML = "";


    const onChange = (e) => {
        setInputs({
            ...inputs,
            [e.target.name]: e.target.value
        })
    }

    return (
        <form>
            <div className={styles.divform}>
                <label htmlFor="firstName">First Name: </label>
                <input type="text" onChange={onChange} name="firstName" onBlur={validateFirstName} />
            </div>
            <label className={styles.validators} ref={firstNameValidatorRef}></label>
            <div className={styles.divform}>
                <label htmlFor="lastName">Last Name: </label>
                <input type="text" onChange={onChange} name="lastName" onBlur={validateLasttName} />
            </div>
            <label className={styles.validators} ref={lastNameValidatorRef}></label>
            <div className={styles.divform}>
                <label htmlFor="email">Email: </label>
                <input type="text" onChange={onChange} name="email" onBlur={validateEmail} />
            </div>
            <label className={styles.validators} ref={emailValidatorRef}></label>
            <div className={styles.divform}>
                <label htmlFor="password">Password: </label>
                <input type="password" onChange={onChange} name="password" onBlur={validatePassword} />
            </div>
            <label className={styles.validators} ref={passwordValidatorRef}></label>
            <div className={styles.divform}>
                <label htmlFor="confirmPassword">Confirm Password: </label>
                <input type="password" onChange={onChange} name="confirmPassword" onBlur={validatePasswordMatch} />
            </div>
            <label className={styles.validators} ref={confirmPasswordValidatorRef}></label>
        </form>
    );
}

export default UserForm;