import React , { useState , useRef} from "react";
import styles from './AddUserForm.module.css';
import Button from "../UI/Button";
const AddUserForm = (props) => {
    const nameInput = useRef();
    const ageInput = useRef();


    const addUserHandler = (event) => {
        event.preventDefault();
        const enteredNameValue = nameInput.current.value;
        const enteredAgeValue = ageInput.current.value;

        if (enteredNameValue === '' || enteredAgeValue === '') {
            props.error({name: 'Error', message: 'Please enter a name and age'});
        }
        else if (enteredAgeValue < 1) {
            props.error({name: 'Error', message: 'Please enter a valid age'});
        }
        else {
            const user = {
                name: enteredNameValue,
                age: enteredAgeValue,
            }
            props.addUser(user);
            nameInput.current.value = '';
            ageInput.current.value = '';
        }
    }

    const resetHandler = () => {
        nameInput.current.value = '';
        ageInput.current.value = '';
    }


    return <form onSubmit={addUserHandler}>
        <div className={styles.newUser__controls}>
            <div>
                <label className={styles.newUser__control__label} htmlFor="username">Username</label>
                <input className={styles.newUser__control__input}
                       id="username" type="text"
                       ref={nameInput}/>
            </div>
            <div>
                <label className={styles.newUser__control__label} htmlFor="age">Age (Years)</label>
                <input className={styles.newUser__control__input}
                       id="age"
                       type="number"
                       ref={ageInput}/>
            </div>
        </div>
        <div className={styles.newUser__actions}>
            <Button className="submit" type="submit" onClick={''}>Add User</Button>
            <Button className="cancel" type="button" onClick={resetHandler}>Cancel</Button>
        </div>
    </form>
}
export default AddUserForm;