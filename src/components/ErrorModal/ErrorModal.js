import styles from './ErrorModal.module.css';
import Card from "../UI/Card";
import Button from "../UI/Button";
import React from 'react';
import ReactDOM from 'react-dom';

const Backdrop = props => {
    return <div className={styles.backdrop} onClick={props.onClick} />
}

const ModalOverlay = props => {
    return  <Card className={styles.modal}>
                <header className={styles.header}>
                    <h2>{props.name}</h2>
                </header>
                <div className={styles.content}>
                    <p>{props.message}</p>
                </div>
                <footer className={styles.actions}>
                    <Button type="button" onClick={props.onClick}>Okay</Button>
                </footer>
            </Card>
}

const ErrorModal = (props) => {
    const onClickHandler = () => {
        props.onClose();
    }
    return<React.Fragment>
        {ReactDOM.createPortal(<Backdrop onClick={onClickHandler} />, document.getElementById('backdrop-root'))}
        {ReactDOM.createPortal(<ModalOverlay name={props.name} message={props.message} onClick={onClickHandler} />, document.getElementById('overlay-root'))}
    </React.Fragment>
}
export default ErrorModal;