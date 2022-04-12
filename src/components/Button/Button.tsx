import * as React from "react";
import classNames from "classnames";

import styles from "./button.module.css";

export function Button(props: React.ButtonHTMLAttributes<HTMLButtonElement>) {
    return (
        <button {...props} className={classNames(styles.button, props.className)}>
            {props.children}
        </button>
    );
}
