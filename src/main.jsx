import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemRoot from './routes/item';
import Root from './routes/root';
import Cart from './routes/cart';
import Layaout from './components/Layaout';
 import { CustomProvider } from './context';
 import Error from "./routes/error";



import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCjgIjZO82TNWTpBG9HTx23k2n5TmElxdk",
  authDomain: "cava-29c22.firebaseapp.com",
  projectId: "cava-29c22",
  storageBucket: "cava-29c22.appspot.com",
  messagingSenderId: "744083015258",
  appId: "1:744083015258:web:0c07afb70d33ae6393fa63"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layaout />, 
    errorElement: <Error />,
    children: [
    {
    path: '/',
    element: <Root />,
  },
  {
    path: '/category/:id',
    element: <Root />,
  },
  {
    path: '/item/:id',
    element: <ItemRoot />,
  },
  {
    path: '/cart',
    element: <Cart />,
  },


],
  },
]);
 


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
   <CustomProvider>
     <RouterProvider router={router} />
     </CustomProvider>
  </React.StrictMode>
);