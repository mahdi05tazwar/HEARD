import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { Login } from './pages/Login';
import { About } from './pages/About';
import { HowItWorks } from './pages/HowItWorks';
import { Pricing } from './pages/Pricing';
import { AISupport } from './pages/AISupport';
import { BecomeListener } from './pages/BecomeListener';
import { Resources } from './pages/Resources';
import { Privacy } from './pages/Privacy';
import { Contact } from './pages/Contact';
import { Corporate } from './pages/Corporate';
import { Technology } from './pages/Technology';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/about" element={<About />} />
            <Route path="/how-it-works" element={<HowItWorks />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/ai-support" element={<AISupport />} />
            <Route path="/become-listener" element={<BecomeListener />} />
            <Route path="/start-conversation" element={<Login />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/corporate" element={<Corporate />} />
            <Route path="/technology" element={<Technology />} />
            <Route path="/community" element={<Home />} />
            <Route path="/blog" element={<Home />} />
            <Route path="/help" element={<Contact />} />
            <Route path="/faq" element={<Contact />} />
            <Route path="/terms" element={<Home />} />
            <Route path="/forgot-password" element={<Login />} />
            <Route path="/apply" element={<Login />} />
            <Route path="/learn-more" element={<BecomeListener />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
