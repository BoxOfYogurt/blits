import { ThemeProvider } from '@emotion/react';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Application } from './Application';
import { TaskStoreProvider } from './AppStore';
// import reportWebVitals from './reportWebVitals';
import './index.css';
import { ApplicationTheme } from './Theme';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={ApplicationTheme}>
        <TaskStoreProvider>
          <Application />
        </TaskStoreProvider>
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
// reportWebVitals();
