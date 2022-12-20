import React from "react";
import Card from "../UI/Card";
import AddUserForm from "./AddUserForm";
import ErrorModal from "../ErrorModal/ErrorModal";

const AddUser = (props) => {
    const addUserHandler = (user) => {
        props.addUser(user);
    }
    return <div>
        <ErrorModal></ErrorModal>
        <Card>
            <AddUserForm addUser={addUserHandler}></AddUserForm>
        </Card>
        </div>
}
export default AddUser;