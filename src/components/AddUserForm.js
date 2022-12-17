import React from "react";
import styles from './AddUserForm.module.css';
import Button from "./UI/Button";
const addUserForm = (props) => {
    return <form>
        <div className={styles.newUser__controls}>
            <div className={styles.newUser__control}>
                <label htmlFor="username">Username</label>
                <input id="username" type="text"/>
            </div>
        </div>
        <div className={styles.newUser__controls}>
            <div className={styles.newUser__control}>
                <label htmlFor="age">Age (Years)</label>
                <input id="age" type="number"/>
            </div>
        </div>
        <div className={styles.newUser__actions}>
            <Button color="green">Add User</Button>
            <Button color="red">Cancel</Button>
        </div>
    </form>
}
export default addUserForm;