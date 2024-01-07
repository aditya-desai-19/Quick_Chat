import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import ChatContainer from "./containers/ChatContainer";
import Home from "./containers/Home";

const Router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/",
                element: <Home />
            },
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
    },
    {
        path: "*",
        element: <h1>You are in wrong route. Check the url</h1>
    }
]);

export default Router;