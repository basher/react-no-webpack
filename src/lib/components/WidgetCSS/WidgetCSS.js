import React, { Component } from 'react';
import styles from './WidgetCSS.css';

export default class WidgetCSS extends Component {
    render() {
        return (
            <div className={styles.widget}>
                <p>Widget + CSS</p>
            </div>
        );
    }
}
