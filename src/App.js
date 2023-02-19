import Header from "./components/Header/Header";
import AuthPage from "./pages/AuthPage";
import HomePage from "./pages/HomePage";
import { Route, Routes } from "react-router-dom";
import CharitySummaryPage from "./pages/CharitySummaryPage";
import Account from "./pages/Account";
import Search from "./pages/Search";
function App() {
  return (
    <Routes>
      <Route path="/">
        <Route index element={<HomePage />} />
        <Route path="search" element={<Search />} />
        <Route path="auth" element={<AuthPage />} />
        <Route path="charity" element={<CharitySummaryPage />} />
        <Route path="account" element={<Account />} />
      </Route>
    </Routes>
  );
}

export default App;
