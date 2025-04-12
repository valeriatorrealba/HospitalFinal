import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './assets/css/main.css';  // Ajusta la ruta si es necesario
import App from './App.jsx';

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("/sw.js").then(
      (registration) => {
        console.log("ServiceWorker registrado con éxito:", registration);
      },
      (err) => {
        console.error("ServiceWorker fallo:", err);
      }
    );
  });
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
