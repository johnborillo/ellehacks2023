import Header from "./components/Header/Header";
import AuthPage from "./pages/AuthPage";
import HomePage from "./pages/HomePage";
import { Route, Routes } from "react-router-dom";
import CharitySummaryPage from "./pages/CharitySummaryPage";
import Account from "./pages/Account";
import Test from "./pages/Test";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Header />}>
        <Route index element={<HomePage />} />
        <Route path="chat" element={<Test />} />
        <Route path="auth" element={<AuthPage />} />
        <Route path="charity" element={<CharitySummaryPage />} />
        <Route path="account" element={<Account />} />
      </Route>
    </Routes>
  );
}

export default App;
