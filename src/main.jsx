import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Message from './Message.jsx'
import Tes from './Tes.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  }, {
    path: "/message",
    element: <Message />,
  }
  , {
    path: "/tes",
    element: <Tes />,
  }
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
