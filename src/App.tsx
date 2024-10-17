import './App.css';
// Routing
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// Pages
import Layout from "./pages/layout/Layout";
import Homepage from "./pages/home/Homepage";
import Login from "./pages/auth/Login";
import Signup from "./pages/auth/Signup";
import AllUsers from "./pages/users/AllUsers";
import UserProfile from "./pages/users/UserProfile";
import AllPosts from "./pages/posts/AllPosts";
import EditPost from "./pages/posts/EditPost";
import NewPost from "./pages/posts/NewPost";
// APIs
import UserAPI from "./apis/UserAPI";
import PostAPI from "./apis/PostAPI";
// Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

// Loader for UserProfile page
const userProfileLoader = async ({ params }) => {
  const [res1, res2] = await Promise.all([
    UserAPI.getUser(params.userId),
    PostAPI.getForUser(params.userId)
  ]);

  return {
    profileUser: res1.data.user,
    profilePosts: res2.data.posts
  };
};

// Create data router singleton
const router = createBrowserRouter([
  { element: <Layout/>, children: [
    { path: "/", children: [
      { index: true, element: <Homepage/> },
      {
        path: "auth",
        children: [
          { path: "signup", element: <Signup/> },
          { path: "login", element: <Login/> }
        ]
      },
      {
        path: "users",
        children: [
          { 
            index: true,
            element: <AllUsers/>,
            loader: async () => {
              const res = await UserAPI.getAll();
              return res.data.users;
            }
          },
          { 
            path: ":userId",
            element: <UserProfile/>,
            loader: userProfileLoader
          }
        ]
      },
      {
        path: "posts",
        children: [
          { 
            index: true,
            element: <AllPosts/>,
            loader: async () => {
              const res = await PostAPI.getAll();
              return res.data.posts;
            }
          },
          { path: "new", element: <NewPost/> },
          { path: "edit",
            children: [
              { 
                path: ":postId",
                element: <EditPost/>,
                loader: async ({ params }) => {
                  const res = await PostAPI.getPost(params.postId);
                  return res.data.post;
                }
              }
            ]
          }
        ]
      }
    ]}
  ]}
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App