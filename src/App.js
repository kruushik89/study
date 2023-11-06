import './App.css';
import { Route, Routes, Navigate, useLocation } from "react-router-dom";
import UsersPage from "./pages/UsersPage";
import HomePage from "./pages/HomePage";
import HeaderNav from "./components/HeaderNav/HeaderNav";
import NotFoundPage from "./pages/NotFoundPage";
import User from "./components/User/User";

function App() {
  const location = useLocation();
  console.log('location', location);

  return (
    <div className="App">
      <HeaderNav/>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/users" element={<UsersPage/>}>
          <Route path="/users/:id" element={<User/>}/>
        </Route>
        <Route path="/not-found" element={<NotFoundPage/>}/>
        <Route path="*" element={<Navigate to="/not-found"/>} />
      </Routes>
    </div>
  );
}

export default App;
