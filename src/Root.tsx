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
import UserProfile from "./pages/users/UserProfile";
// Components
import ScrollToTop from "./components/utils/ScrollToTop";
// Context
import AuthProvider from "./hooks/AuthProvider";

const Root = () => {
  return (
    <AuthProvider>
      <ScrollToTop/>
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
              <Route path="new" element={<NewPost/>}/>
              <Route path="edit">
                <Route path=":postId" element={<EditPost/>}/>
              </Route>
            </Route>
            <Route path="users">
              <Route index element={<AllUsers/>}/>
              <Route path=":userId" element={<UserProfile/>}/>
            </Route>
          </Route>
        </Route>
      </Routes>
    </AuthProvider>
  )
};

export default Root;