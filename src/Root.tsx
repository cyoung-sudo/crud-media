// Routing
import { Routes, Route } from "react-router-dom";
// Pages
import Layout from "./pages/layout/Layout";
import Homepage from "./pages/home/Homepage";
import Login from "./pages/auth/Login";
import Signup from "./pages/auth/Signup";
import AllPosts from "./pages/posts/AllPosts";
import EditPost from "./pages/posts/EditPost";
import NewPost from "./pages/posts/NewPost";
import AllUsers from "./pages/users/AllUsers";
import EditUser from "./pages/users/EditUser";
import UserProfile from "./pages/users/UserProfile";

const Root = () => {
  return (
    <Routes>
      <Route element={<Layout/>}>
        <Route path="/">
          <Route index element={<Homepage/>}/>
          <Route path="auth">
            <Route path="login" element={<Login/>}/>
            <Route path="signup" element={<Signup/>}/>
          </Route>
          <Route path="posts">
            <Route index element={<AllPosts/>}/>
            <Route path="edit" element={<EditPost/>}/>
            <Route path="new" element={<NewPost/>}/>
          </Route>
          <Route path="users">
            <Route index element={<AllUsers/>}/>
            <Route path="edit" element={<EditUser/>}/>
            <Route path="profile" element={<UserProfile/>}/>
          </Route>
        </Route>
      </Route>
    </Routes>
  )
};

export default Root;