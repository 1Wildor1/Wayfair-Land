import { createBrowserRouter } from "react-router-dom";
import { SingIn } from "../components/SingIn/SingIn";
import React from "react";

const router = createBrowserRouter([
    {
       path: "/SingIn",
       element: <SingIn /> 
    }
])