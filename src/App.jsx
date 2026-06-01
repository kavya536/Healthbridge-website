import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import HomePage from './pages/HomePage/HomePage';
import ContactPage from './pages/ContactPage/ContactPage';
import AboutPage from './pages/AboutPage/AboutPage';
import BlogPage from './pages/BlogPage/BlogPage';
import PlatformPage from './pages/PlatformPage/PlatformPage';
import SolutionsPage from './pages/SolutionsPage/SolutionsPage';
import PatientsSolutionsPage from './pages/SolutionsPage/PatientsSolutionsPage';
import PharmaciesSolutionsPage from './pages/SolutionsPage/PharmaciesSolutionsPage';
import HospitalsSolutionsPage from './pages/SolutionsPage/HospitalsSolutionsPage';
import DoctorsSolutionsPage from './pages/SolutionsPage/DoctorsSolutionsPage';
import PGStudentsSolutionsPage from './pages/SolutionsPage/PGStudentsSolutionsPage';
import './App.css';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="app">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/platform" element={<PlatformPage />} />
          <Route path="/solutions" element={<SolutionsPage />} />
          <Route path="/solutions/patients" element={<PatientsSolutionsPage />} />
          <Route path="/solutions/pharmacies" element={<PharmaciesSolutionsPage />} />
          <Route path="/solutions/hospitals" element={<HospitalsSolutionsPage />} />
          <Route path="/solutions/doctors" element={<DoctorsSolutionsPage />} />
          <Route path="/solutions/pg-students" element={<PGStudentsSolutionsPage />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
