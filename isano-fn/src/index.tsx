import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import UserProvider from "./hooks/useAuth";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <UserProvider >
        <App />
        <ToastContainer />
      </UserProvider>
    </React.StrictMode>
  </Provider>
);

