import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Students from "./pages/Students";
import Providers from "./pages/Providers";
import Blog from "./pages/Blog";
import BlogCvGuide from "./pages/BlogCvGuide";
import BlogInterviewTips from "./pages/BlogInterviewTips";
import Contact from "./pages/Contact";
import Accommodation from "./pages/students/Accommodation";
import BlogIndex from "./pages/Blog/Index";
import InternshipReady from "./pages/Blog/InternshipReady";
import GreatCV from "./pages/Blog/GreatCV";
import ScrollToTop from "./components/ScrollToTopn";
import Visa from "./pages/students/Visa";
import Transport from "./pages/students/Transport";
import Careers from "./pages/students/Career";
import CareerPage from "./pages/students/CareerPage";
import Discounts from "./pages/students/Discounts";
import EventsPage from "./pages/students/Events"; 
import Emergency from "./pages/students/Emergency";
import Attractions from "./pages/students/UAEAttractions";
import Academics from "./pages/students/Academics";
import ProviderInterestForm from "./pages/ProvidersInterestForm";
import { Toaster } from "react-hot-toast";
import FunZone from "./pages/FunZone";
export default function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Router>
        <Navbar />
        <ScrollToTop/>
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/students" element={<Students />} />
            <Route path="/students/accommodation" element={<Accommodation />} />
            <Route path="/students/academics" element={<Academics />} />
            <Route path="/students/Visa" element={<Visa />} />
            <Route path="/students/transport" element={<Transport />} />
            <Route path="/students/discounts" element={<Discounts />} />
            <Route path="/students/careers" element={<Careers />} />
            <Route path="/students/CareerPage" element={<CareerPage />} />
            <Route path="/students/events" element={<EventsPage />} />
            <Route path="/students/emergency" element={<Emergency />} />
            <Route path="/providers" element={<Providers />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/cv-guide" element={<BlogCvGuide />} />
            <Route path="/blog/interview-tips" element={<BlogInterviewTips />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/blog/index" element={<BlogIndex />} />
            <Route path="/blog/internship-ready" element={<InternshipReady />} />
            <Route path="/blog/great-cv" element={<GreatCV />} />
            <Route path ="/providers#subscription-plans" element={<Providers />} />
            <Route path="/students/attractions" element={<Attractions />} />
            <Route path="/pages/ProviderInterestForm" element={<ProviderInterestForm />} />
            <Route path="/pages/FunZone" element={<FunZone />} />
            Rou
          </Routes>
          {/* your routes/components */}
      <Toaster position="top-center" toastOptions={{
        style: { fontSize: "14px", borderRadius: "8px" },
        success: { background: "#004AAD", color: "#fff" },
        error: { background: "#F9943B", color: "#fff" },
      }} />
        </main>
        <Footer />
      </Router>
    </div>
  );
}
