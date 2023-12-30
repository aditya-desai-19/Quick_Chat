import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import ChatContainer from "./containers/ChatContainer";

const Router = createBrowserRouter([{
    path: "/",
    element: <App />,
    children: [
        {
            path: "/login",
            element: <Login />
        },
        {
            path: "/signup",
            element: <SignUp />
        },
        {
            path: "/chat",
            element: <ChatContainer />
        }
    ]
}]);

export default Router;