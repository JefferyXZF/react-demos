import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import Counter from './demo1/components/Counter';
import XiaoJieJie from './demo1/components/XiaoJieJie/index.js';
ReactDOM.render(<XiaoJieJie />, document.getElementById('root'));

serviceWorker.unregister();
