import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import MainPage from "./pages/MainPage";
import GoogleTrendPage from "./pages/GoogleTrendPage";
import DetailPage from "./pages/DetailPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<MainPage />} />
        <Route path="/google" element={<GoogleTrendPage />} />
        <Route path="/detail" element={<DetailPage />} />
      </Route>
    </Routes>
  );
}

export default App;
