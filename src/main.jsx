import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from './screens/Home.jsx';
import MathScreen from './screens/MathScreen.jsx';
import AssessmentScreen from './screens/AssessmentScreen.jsx';
import EnglishScreen from './screens/EnglishScreen.jsx';
import ContactScreen from './screens/ContactScreen.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/mathpage",
    element: <MathScreen />,
  },
  {
    path: "/assessment",
    element: <AssessmentScreen />,
  },
  {
    path: "/english",
    element: <EnglishScreen />,
  },
  // {
  //   path: "/virtual",
  //   element: <VirtualScreen />,
  // },
  {
    path: "/contact",
    element: <ContactScreen />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
