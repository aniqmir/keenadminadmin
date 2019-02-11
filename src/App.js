import React, { Component } from 'react';
import './App.css';

import CustomRoutes from './views/routes/routes.jsx'

class App extends Component {
  render() {
    return (
      <div>
          <CustomRoutes/>
      </div>
    );
  }
}

export default App;
