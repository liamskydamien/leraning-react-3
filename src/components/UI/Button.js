import React from "react";
import styles from './Button.module.css';
const Button = props => {
    const onClickHandler = () => {
        props.onClick();
    }
    const buttonClass = styles.button + ' ' + styles[props.className];
    return <button className={buttonClass} type={props.type} onClick={props.onClick !== '' ? onClickHandler : null}>
{props.children}</button>
}
export default Button;