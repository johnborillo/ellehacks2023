import Header from "./components/Header/Header";
import AuthPage from "./pages/AuthPage";
import HomePage from "./pages/HomePage";
import CharityDetails from "./pages/CharityDetails";
import CharitySummary from "./pages/CharitySummary";
import CharityCards from "./components/CharityCards/CharityCards";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Header/>}>
        <Route index element={<HomePage/>}/>
        <Route path="auth" element={<AuthPage/>}/>
      </Route>
    </Routes>
  );
}

export default App;
