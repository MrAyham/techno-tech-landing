import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

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

if (document.readyState !== 'loading') {
  renderApp();
} else {
  window.addEventListener('DOMContentLoaded', renderApp);
}
