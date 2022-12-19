import React from "react";
import styles from './AddUserForm.module.css';
import Button from "../UI/Button";
const addUserForm = (props) => {

    const cancelHandler = (event) => {
        console.log("Cancel button clicked");
    }

    const addUserHandler = (event) => {
        event.preventDefault();
        console.log("Add User button clicked");
    }

    return <form onSubmit={addUserHandler}>
        <div className={styles.newUser__controls}>
            <div>
                <label className={styles.newUser__control__label} htmlFor="username">Username</label>
                <input className={styles.newUser__control__input} id="username" type="text"/>
            </div>
            <div>
                <label className={styles.newUser__control__label} htmlFor="age">Age (Years)</label>
                <input className={styles.newUser__control__input} id="age" type="number"/>
            </div>
        </div>
        <div className={styles.newUser__actions}>
            <Button className="submit" type="submit" onClick={''}>Add User</Button>
            <Button className="cancel" type="button" onClick={cancelHandler}>Cancel</Button>
        </div>
    </form>
}
export default addUserForm;