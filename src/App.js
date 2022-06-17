import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductPage from "./pages/ProductPage";
import HomePage from "./pages/HomePage";
import TheHeader from "./components/layout/TheHeader";
import TheFooter from "./components/layout/TheFooter";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <TheHeader />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/product" element={<ProductPage />} />
        </Routes>
        <TheFooter />
      </BrowserRouter>
    </div>
  );
}

export default App;
