import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfUse from "./pages/TermsOfUse";
import Blog from "./pages/Blog";
import ScrollToTop from "./components/ScrollToTop"; // 👈 IMPORTANTE

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop /> {/* 👈 ISSO RESOLVE */}
      
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/politica-de-privacidade" element={<PrivacyPolicy />} />
        <Route path="/termos-de-uso" element={<TermsOfUse />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
    </BrowserRouter>
  );
}