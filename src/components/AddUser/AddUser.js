import React, {useState} from "react";
import Card from "../UI/Card";
import AddUserForm from "./AddUserForm";
import ErrorModal from "../ErrorModal/ErrorModal";

const AddUser = (props) => {
    const addUserHandler = (user) => {
        props.addUser(user);
    }
    const [error, setError] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [errorName, setErrorName] = useState('');
    const errorHandler = (event) => {
        setErrorName(event.name);
        setErrorMessage(event.message);
        setError(true);
    }
    const closeErrorHandler = () => {
        setError(false);
    }

    return <div>
        {error ? <ErrorModal name={errorName} message={errorMessage} onClose={closeErrorHandler}></ErrorModal> : null}
        <Card>
            <AddUserForm addUser={addUserHandler} error={errorHandler}></AddUserForm>
        </Card>
        </div>
}
export default AddUser;