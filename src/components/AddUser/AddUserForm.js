import React , { useState } from "react";
import styles from './AddUserForm.module.css';
import Button from "../UI/Button";
const AddUserForm = (props) => {

    const [enteredName, setEnteredName] = useState('');
    const [enteredAge, setEnteredAge] = useState('');


    const cancelHandler = () => {
        setEnteredName('');
        setEnteredAge('');
    }

    const addUserHandler = (event) => {
        event.preventDefault();
        if (event.target.name.value === '' || event.target.age.value === '') {
            return;
        }
        else {
            const user = {
                name: enteredName,
                age: enteredAge
            }
            props.addUser(user);
            setEnteredName('');
            setEnteredAge('');
        }
    }

    const nameChangeHandler = (name) => {
            setEnteredName(name.target.value);
    }

    const ageChangeHandler = (age) => {
        setEnteredAge(age.target.value);
    }

    return <form onSubmit={addUserHandler}>
        <div className={styles.newUser__controls}>
            <div>
                <label className={styles.newUser__control__label} htmlFor="username">Username</label>
                <input className={styles.newUser__control__input} id="username" type="text" value={enteredName} onChange={nameChangeHandler}/>
            </div>
            <div>
                <label className={styles.newUser__control__label} htmlFor="age">Age (Years)</label>
                <input className={styles.newUser__control__input} id="age" min={0} type="number" value={enteredAge} onChange={ageChangeHandler}/>
            </div>
        </div>
        <div className={styles.newUser__actions}>
            <Button className="submit" type="submit" onClick={''}>Add User</Button>
            <Button className="cancel" type="button" onClick={cancelHandler}>Cancel</Button>
        </div>
    </form>
}
export default AddUserForm;