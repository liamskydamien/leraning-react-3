import styles from './ErrorModal.module.css';
import Card from "../UI/Card";
import Button from "../UI/Button";
const ErrorModal = (props) => {
    return  <Card className={styles.modal}>
                <header className={styles.header}>
                    <h2>{props.name}</h2>
                </header>
                <div className={styles.content}>
                    <p>{props.message}</p>
                </div>
                <footer className={styles.actions}>
                    <Button type="button">Okay</Button>
                </footer>
            </Card>
}
export default ErrorModal;