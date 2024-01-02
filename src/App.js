import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import LoginPage from "./pages/LoginPage/LoginPage";
import HomePage from "./pages/HomePage/HomePage";
import Header from "./component/Header/Header";
import DetailPage from "./pages/DetailPage/DetailPage";
import Layout from "./layout/Layout";
import Spinner from "./component/Spinner/Spinner";
import AdminUserPage from "./pages/AdminUserPage/AdminUserPage";
import AdminLayout from "./layout/AdminLayout";
import SecureGate from "./layout/SecureGate";
// git stash
// git pull
function App() {
  return (
    <>
      <Spinner />
      <BrowserRouter>
        {/* <Header /> */}
        <Routes>
          {/* users */}
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<HomePage />} />

            <Route path="/detail/:maPhim" element={<DetailPage />} />
          </Route>

          {/* admins */}
          <Route
            path="/admin"
            element={
              <SecureGate>
                <AdminLayout />
              </SecureGate>
            }
          >
            <Route path="users" element={<AdminUserPage />} />
          </Route>
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
