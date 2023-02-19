import Header from "./components/Header/Header";
import AuthPage from "./pages/AuthPage";
import HomePage from "./pages/HomePage";
import NGOPage from "./pages/NGOPage";
import CharitySummary from "./pages/CharitySummary";
import CharityCards from "./components/CharityCards/CharityCards";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Registration from "./pages/Registration";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Header />}>
        <Route index element={<HomePage />} />
        <Route path="auth" element={<AuthPage />} />
        <Route path="/ngo/:name" element={<NGOPage />} />
      </Route>
    </Routes>
  );
}

export default App;
