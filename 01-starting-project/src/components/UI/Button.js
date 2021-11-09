import React from 'react'
import styles from './Button.module.css';

export const Button = (props) => {
    return (
        <button
            className={`${styles.button} ${props.className}`}
            onClick={props.onClick}
            type={props.type || 'button'}>
            {props.children}
        </button>
    )
}
