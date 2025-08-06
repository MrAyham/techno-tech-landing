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

const safeAddEventListener = (
  e: EventTarget | null,
  t: string,
  n: EventListenerOrEventListenerObject,
  r?: boolean | AddEventListenerOptions,
) => {
  if (e) {
    e.addEventListener(t, n, r);
    return () => e.removeEventListener(t, n);
  }
  return () => {};
};

if (document.readyState !== 'loading') {
  renderApp();
} else {
  safeAddEventListener(
    typeof window !== 'undefined' ? window : null,
    'DOMContentLoaded',
    renderApp,
  );
}
