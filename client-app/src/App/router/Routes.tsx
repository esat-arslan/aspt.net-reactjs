import { createBrowserRouter, RouteObject } from "react-router-dom";
import App from "../Layout/App";
import HomePage from "../../Features/home/HomePage";
import ActivityDashboard from "../../Features/activities/dashboard/ActivityDashboard";
import ActivityForm from "../../Features/activities/form/ActivityForm";
import ActivityDetails from "../../Features/activities/details/ActivityDetails";

export const routes: RouteObject[] = [
    {
        path: '/',
        element: <App/>,
        children: [
            {path: 'activities',element:<ActivityDashboard/>},
            {path: 'createActivity',element:<ActivityForm key='create'/>},
            {path: 'activities/:id',element:<ActivityDetails/>},
            {path: 'manage/:id',element:<ActivityForm key='manage'/>}
        ]
    },
]

export const router = createBrowserRouter(routes)