import Header from "./components/Header/Header";
import AuthPage from "./pages/AuthPage";
import HomePage from "./pages/HomePage";
import { Route, Routes } from "react-router-dom";
import CharitySummaryPage from "./pages/CharitySummaryPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Header />}>
        <Route index element={<HomePage />} />
        <Route path="auth" element={<AuthPage />} />
        <Route path="charity" element={<CharitySummaryPage />} />
      </Route>
    </Routes>
  );
}

export default App;
