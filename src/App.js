import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import LoginPage from "./pages/LoginPage/LoginPage";
import HomePage from "./pages/HomePage/HomePage";
import Header from "./component/Header/Header";
import DetailPage from "./pages/DetailPage/DetailPage";
import Layout from "./layout/Layout";
// git stash
// git pull
function App() {
  return (
    <>
      <BrowserRouter>
        {/* <Header /> */}
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<HomePage />} />

            <Route path="/detail/:maPhim" element={<DetailPage />} />
          </Route>
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
