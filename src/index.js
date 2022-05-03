import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ThemeProvider } from 'styled-components';
import GlobaleStyles from './themes/GlobalStyles'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
     <ThemeProvider theme={GlobaleStyles}>
          <GlobaleStyles />
          <App />
     </ThemeProvider>
);
