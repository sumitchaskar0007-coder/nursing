import React from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

// Utilities
import ScrollToTop from "./components/ScrollToTop";

// Layout
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import FloatingEnquiry from "./components/FloatingEnquiry";

// Public Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Login from "./pages/Login";
import Programs from "./pages/Programs";
import ProgramDetail from "./pages/ProgramDetail";
import Admissions from "./pages/Admissions";
import Departments from "./pages/Departments";
import Facilities from "./pages/Facilities";
import Events from "./pages/Events";
import Gallery from "./pages/Gallery";
import Announcement from "./pages/Announcement";
import Careers from "./pages/Careers";
import Placements from "./pages/Placements";
import Contact from "./pages/Contact";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import Udan from "./pages/Udan";
import Private from "./pages/Private";
import BlogList from './pages/BlogList';  // New component for listing blogs
import BlogDetail from './pages/BlogDetail';  // Renamed from Blog.jsx

import BlogAdmin from './pages/admin/BlogAdmin';

// Admin Pages
import ProtectedRoutes from "./components/ProtectedRoutes";
import AdminLogin from "./pages/admin/AdminLogin";
import AdminDashboard from "./pages/admin/AdminDashboard";
import GalleryAdmin from "./pages/admin/GalleryAdmin";
import AnnouncementAdmin from "./pages/admin/AnnouncementAdmin";
import CareerAdmin from "./pages/admin/CareerAdmin";

// Theme
const theme = createTheme({
  palette: {
    primary: { main: "#1976d2" },
    secondary: { main: "#dc004e" },
  },
});

function App() {
  const location = useLocation();
  const isAdminRoute = location.pathname.startsWith("/admin");

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <ScrollToTop />

      {/* Hide navbar on admin routes */}
      {!isAdminRoute && <Navbar />}

      <main className="flex-grow">
        <Routes>
          {/* ================= PUBLIC ROUTES ================= */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/programs" element={<Programs />} />
          <Route path="/programs/:slug" element={<ProgramDetail />} />
          <Route path="/admissions" element={<Admissions />} />
          <Route path="/departments" element={<Departments />} />
          <Route path="/facilities" element={<Facilities />} />
          <Route path="/events" element={<Events />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/announcement" element={<Announcement />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/placements" element={<Placements />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/udan" element={<Udan />} />
          <Route path="/udan/:id" element={<Udan />} />
          
          {/* Blog Routes */}
          <Route path="/blog" element={<BlogList />} />
          <Route path="/blog/:slug" element={<BlogDetail />} />
          
          {/* ================= ADMIN LOGIN ================= */}
          <Route path="/admin/login" element={<AdminLogin />} />

          {/* ================= PROTECTED ADMIN ROUTES ================= */}
          <Route element={<ProtectedRoutes />}>
            <Route path="/admin" element={<AdminDashboard />} />
            <Route path="/admin/gallery" element={<GalleryAdmin />} />
            <Route path="/admin/announcement" element={<AnnouncementAdmin />} />
            <Route path="/admin/career" element={<CareerAdmin />} />
            <Route path="/admin/private" element={<Private />} />
            <Route path="/admin/blog" element={<BlogAdmin />} />
          </Route>

          {/* ================= FALLBACK ================= */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>

      {/* Hide footer & enquiry on admin routes */}
      {!isAdminRoute && <Footer />}
      {!isAdminRoute && <FloatingEnquiry />}
    </ThemeProvider>
  );
}

export default App;