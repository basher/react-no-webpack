import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import WidgetCSS from './lib/components/WidgetCSS/WidgetCSS.js';
import WidgetSass from './lib/components/WidgetSass/WidgetSass.js';

export default class App extends Component {
    render() {
        return (
            <div>
                <WidgetCSS />
                <WidgetSass />
            </div>
        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);
