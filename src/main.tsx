try {
  if (typeof window !== 'undefined') {
    let activeFetch = window.fetch;
    const defineFetchOn = (target: any) => {
      try {
        Object.defineProperty(target, 'fetch', {
          get() {
            return activeFetch;
          },
          set(v) {
            activeFetch = v;
          },
          configurable: true,
          enumerable: true
        });
      } catch (err) {
        // ignore individual errors
      }
    };
    defineFetchOn(window);
    defineFetchOn(Window.prototype);
    if (typeof globalThis !== 'undefined') {
      defineFetchOn(globalThis);
    }
    if (typeof self !== 'undefined') {
      defineFetchOn(self);
    }
  }
} catch (e) {
  console.warn("Failed to apply robust fetch prototype shim:", e);
}

import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);

