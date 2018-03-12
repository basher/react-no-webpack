import React, { Component } from 'react';
import styles from './WidgetSass.scss';

export default class WidgetSass extends Component {
    render() {
        return (
            <div className={styles.widget}>
                <p>Widget + Sass nesting &amp; variables with PostCSS plugins.</p>
            </div>
        );
    }
}
