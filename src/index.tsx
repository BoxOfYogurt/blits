import { ThemeProvider } from '@emotion/react';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Application } from './Application';
import { TaskStoreProvider } from './AppStore';
import { SettingStoreProvider } from './AppStore/SettingStore/SettingStore';
// import reportWebVitals from './reportWebVitals';
import './index.css';
import { ApplicationTheme } from './Theme';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={ApplicationTheme}>
        <SettingStoreProvider>
          <TaskStoreProvider>
            <Application />
          </TaskStoreProvider>
        </SettingStoreProvider>
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
// reportWebVitals();
