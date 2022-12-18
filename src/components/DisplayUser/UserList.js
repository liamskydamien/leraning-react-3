import Card from "../UI/Card";
import UserItem from "./UserItem";

const UserList = props => {
    return (
        <Card>
            <ul>
                {props.users.map(user => (
                <UserItem key={user.id} user={user}></UserItem>
                ))}
            </ul>
        </Card>
    );
}
export default UserList;