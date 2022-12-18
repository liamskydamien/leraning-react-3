import styles from './UserItem.module.css';
const UserItem = ({ user }) => {
    return <div className={styles.user}>
                <h2 className={styles.user__name}>{user.name}</h2>
                <p className={styles.user__age}>{user.age} years old</p>
            </div>
}
export default UserItem;