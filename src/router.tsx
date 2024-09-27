// Routing
import { createBrowserRouter } from "react-router-dom";
// Pages
import Homepage from "./pages/home/Homepage";
import Login from "./pages/auth/Login";
import Signup from "./pages/auth/Signup";
import AllPosts from "./pages/posts/AllPosts";
import EditPost from "./pages/posts/EditPost";
import NewPost from "./pages/posts/NewPost";
import AllUsers from "./pages/users/AllUsers";
import EditUser from "./pages/users/EditUser";
import UserProfile from "./pages/users/UserProfile";

const router = createBrowserRouter([
  {
    path: "/",
    children: [
      {
        index: true,
        element: <Homepage/>
      },
      {
        path: "auth",
        children: [
          {
            path: "login",
            element: <Login/>
          },
          {
            path: "signup",
            element: <Signup/>
          }
        ]
      },
      {
        path: "posts",
        children: [
          {
            index: true,
            element: <AllPosts/>
          },
          {
            path: "edit",
            element: <EditPost/>
          },
          {
            path: "new",
            element: <NewPost/>
          },
        ]
      },
      {
        path: "users",
        children: [
          {
            index: true,
            element: <AllUsers/>
          },
          {
            path: "edit",
            element: <EditUser/>
          },
          {
            path: "profile",
            element: <UserProfile/>
          },
        ]
      }
    ]
  }
]);

export default router;