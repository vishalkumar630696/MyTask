import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import CreatePost from "./pages/CreatePage";
import Posts from "./pages/Post";
import SinglePost from "./pages/SinglePost";
import Navbar from "./components/Navbar";
import ProtectedRoute from "./components/ProtectedRoute";



function App(){
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Login />} />

        <Route
          path="/create"
          element={
            <ProtectedRoute>
              <CreatePost />
            </ProtectedRoute>
          }
        />

        <Route
          path="/posts"
          element={
            <ProtectedRoute>
              <Posts />
            </ProtectedRoute>
          }
        />

        <Route
          path="/post/:id"
          element={
            <ProtectedRoute>
              <SinglePost />
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
