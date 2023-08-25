import React from 'react';
import { createRoot } from "react-dom/client";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


const root = createRoot(document.getElementById("root"));

setInterval(() => {
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
});

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <CookiesProvider>
//       <Provider store={store}>
//           <App />
//       </Provider>
//   </CookiesProvider>,
// );

reportWebVitals();