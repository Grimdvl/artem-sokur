import React from 'react';
import ReactDOM from 'react-dom/client';
// import { Provider } from 'react-redux';

import App from './components/app/App';
// import store from './store';

import './sass/style.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        {/* <Provider store={store}> */}
            <App />
        {/* </Provider> */}
    </React.StrictMode>
);

