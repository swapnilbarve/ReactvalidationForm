import{
    createBrowserRouter,
} from "react-router-dom";
import Homepage from "./Pages/Homepage";
import EmployeeForm from "./Pages/EmployeeForm";
export const router = createBrowserRouter([
    {
        path: "*",
        element:<div>No Page Found</div>,
    },
    {
        path: "/",
        element: <Homepage />
    },
    {
        path: "/add",
        element: <EmployeeForm />
    }
]);