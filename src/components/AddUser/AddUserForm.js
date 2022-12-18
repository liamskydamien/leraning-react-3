import React from "react";
import styles from './AddUserForm.module.css';
import Button from "../UI/Button";
const addUserForm = (props) => {
    return <form>
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
            <Button className="submit">Add User</Button>
            <Button className="cancel">Cancel</Button>
        </div>
    </form>
}
export default addUserForm;