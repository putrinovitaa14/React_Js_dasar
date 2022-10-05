import React from 'react';
import ReactDOM from 'react-dom';
// import App from './reactjs_dasar/App';
// import Variable from './reactjs_dasar/Variable';
// import StateProps from './reactjs_dasar/StateProps';
// import Map from './reactjs_dasar/Map';
// import LifeCycle from './reactjs_dasar/LifeCycle';

import 'bootstrap/dist/css/bootstrap.min.css';
import Crud from './crud';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Crud />
  </React.StrictMode>
); 