import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import HomePage from './pages/HomePage/HomePage';
import ContactPage from './pages/ContactPage/ContactPage';
import AboutPage from './pages/AboutPage/AboutPage';
import BlogPage from './pages/BlogPage/BlogPage';
import PlatformPage from './pages/PlatformPage/PlatformPage';
import PatientsSolutionsPage from './pages/SolutionsPage/PatientsSolutionsPage';
import PharmaciesSolutionsPage from './pages/SolutionsPage/PharmaciesSolutionsPage';
import HospitalsSolutionsPage from './pages/SolutionsPage/HospitalsSolutionsPage';
import './App.css';

export default function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/platform" element={<PlatformPage />} />
          <Route path="/solutions/patients" element={<PatientsSolutionsPage />} />
          <Route path="/solutions/pharmacies" element={<PharmaciesSolutionsPage />} />
          <Route path="/solutions/hospitals" element={<HospitalsSolutionsPage />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
