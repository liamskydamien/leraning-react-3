import React from "react";
import Card from "../UI/Card";
import AddUserForm from "./AddUserForm";

const AddUser = (props) => {
    const addUserHandler = (user) => {
        props.addUser(user);
    }
    return <Card>
        <AddUserForm addUser={addUserHandler}></AddUserForm>
    </Card>
}
export default AddUser;