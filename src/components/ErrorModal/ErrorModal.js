import styles from './ErrorModal.module.css';
import Card from "../UI/Card";
import Button from "../UI/Button";
const ErrorModal = (props) => {
    return  <Card className={styles.error}>
                <h2 className={styles.error}>{props.name}</h2>
                <p className={styles.error}>{props.message}</p>
                <Button>Proceed</Button>
            </Card>
}
export default ErrorModal;