import React from "react";
import styles from './Button.module.css';
const Button = props => {
    const buttonClass = styles.button + ' ' + styles[props.className];
    return <button className={buttonClass}>{props.children}</button>
}
export default Button;