import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { safeAddEventListener } from './utils/safeEventListener';

// Safely render the app only after the DOM is ready
const renderApp = () => {
  const rootElement = document.getElementById('root');
  if (rootElement) {
    ReactDOM.createRoot(rootElement).render(
      <React.StrictMode>
        <App />
      </React.StrictMode>,
    );
  }
};

if (typeof document !== 'undefined') {
  if (document.readyState !== 'loading') {
    renderApp();
  } else {
    safeAddEventListener(document, 'DOMContentLoaded', renderApp);
  }
}
