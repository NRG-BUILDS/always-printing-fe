import { Route, Routes } from "react-router";
import MainLayout from "./layouts/main-layout";
import Home from "./pages/home";
import CoinPage from "./pages/coin";

function App() {
  return (
    <>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/coin/:id" element={<CoinPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
