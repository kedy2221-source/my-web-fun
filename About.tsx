import { BrowserRouter as Router, Routes, Route, Link, useLocation, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { motion, AnimatePresence, type Transition } from 'framer-motion';
import { 
  MapPin, 
  Search, 
  Calendar, 
  CheckCircle, 
  Menu,
  X,
  Car,
  Home,
  Mail,
  Smartphone,
  User,
  LogOut
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Switch } from '@/components/ui/switch';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';

// Import Pages
import ForDrivers from './pages/ForDrivers';
import ForHosts from './pages/ForHosts';
import TrustSafety from './pages/TrustSafety';
import Pricing from './pages/Pricing';
import Login from './pages/Login';
import Register from './pages/Register';
import SearchPage from './pages/Search';
import Dashboard from './pages/Dashboard';
import ListSpot from './pages/ListSpot';
import Booking from './pages/Booking';
import About from './pages/About';
import HelpCenter from './pages/HelpCenter';
import Terms from './pages/Terms';
import Privacy from './pages/Privacy';
import HostResources from './pages/HostResources';
import CityGuides from './pages/CityGuides';

// Animation easing
const smoothEase: Transition['ease'] = [0.22, 0.61, 0.36, 1];
const bouncyEase: Transition['ease'] = [0.34, 1.56, 0.64, 1];

const fadeInUp = {
  hidden: { opacity: 0, y: 22 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.55, ease: smoothEase }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12 }
  }
};

// Navigation Component
const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const isActive = (path: string) => location.pathname === path;

  const navLinks = [
    { path: '/for-drivers', label: 'For drivers' },
    { path: '/for-hosts', label: 'For Hosts' },
    { path: '/trust-safety', label: 'Trust & Safety' },
    { path: '/pricing', label: 'Pricing' },
  ];

  // Hide navigation on auth pages
  const isAuthPage = location.pathname === '/login' || location.pathname === '/register';
  if (isAuthPage) return null;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-parkshare-surface/90 backdrop-blur-md border-b border-parkshare-text-primary/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-7 lg:px-10">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-xl bg-accent flex items-center justify-center">
              <Car className="w-5 h-5 text-white" />
            </div>
            <span className="font-display font-bold text-xl text-parkshare-text-primary">ParkShare</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link 
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-colors ${
                  isActive(link.path) 
                    ? 'text-accent' 
                    : 'text-parkshare-text-secondary hover:text-parkshare-text-primary'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-3">
            {isLoggedIn ? (
              <div className="relative">
                <button 
                  onClick={() => setShowUserMenu(!showUserMenu)}
                  className="flex items-center gap-2 p-2 rounded-xl hover:bg-parkshare-bg-primary transition-colors"
                >
                  <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center">
                    <User className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-sm font-medium">My Account</span>
                </button>
                {showUserMenu && (
                  <div className="absolute right-0 top-full mt-2 w-48 bg-parkshare-surface rounded-card shadow-card border border-parkshare-text-primary/5 py-2">
                    <Link to="/dashboard" onClick={() => setShowUserMenu(false)} className="block px-4 py-2 text-sm hover:bg-parkshare-bg-primary">Dashboard</Link>
                    <Link to="/dashboard/bookings" onClick={() => setShowUserMenu(false)} className="block px-4 py-2 text-sm hover:bg-parkshare-bg-primary">My Bookings</Link>
                    <Link to="/dashboard/messages" onClick={() => setShowUserMenu(false)} className="block px-4 py-2 text-sm hover:bg-parkshare-bg-primary">Messages</Link>
                    <Link to="/dashboard/settings" onClick={() => setShowUserMenu(false)} className="block px-4 py-2 text-sm hover:bg-parkshare-bg-primary">Settings</Link>
                    <Separator className="my-2" />
                    <button 
                      onClick={() => { setIsLoggedIn(false); setShowUserMenu(false); navigate('/'); }}
                      className="w-full text-left px-4 py-2 text-sm text-parkshare-status-danger hover:bg-parkshare-bg-primary flex items-center gap-2"
                    >
                      <LogOut className="w-4 h-4" /> Sign Out
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <>
                <Link to="/login">
                  <Button variant="ghost" className="text-sm font-medium">Sign In</Button>
                </Link>
                <Link to="/register">
                  <Button className="bg-accent hover:bg-accent-dark text-white rounded-pill px-5">
                    Get the App
                  </Button>
                </Link>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-parkshare-surface border-b border-parkshare-text-primary/5"
          >
            <div className="px-4 py-4 space-y-3">
              {navLinks.map((link) => (
                <Link 
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`block py-2 font-medium ${isActive(link.path) ? 'text-accent' : 'text-parkshare-text-primary'}`}
                >
                  {link.label}
                </Link>
              ))}
              <Separator />
              {isLoggedIn ? (
                <>
                  <Link to="/dashboard" onClick={() => setIsOpen(false)} className="block py-2 text-parkshare-text-primary font-medium">Dashboard</Link>
                  <button 
                    onClick={() => { setIsLoggedIn(false); setIsOpen(false); navigate('/'); }}
                    className="w-full text-left py-2 text-parkshare-status-danger font-medium"
                  >
                    Sign Out
                  </button>
                </>
              ) : (
                <>
                  <Link to="/login" onClick={() => setIsOpen(false)}>
                    <Button variant="ghost" className="w-full justify-start">Sign In</Button>
                  </Link>
                  <Link to="/register" onClick={() => setIsOpen(false)}>
                    <Button className="w-full bg-accent hover:bg-accent-dark text-white rounded-pill">Get the App</Button>
                  </Link>
                </>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

// Bubble Pin Component
const BubblePin = ({ status, delay = 0 }: { status: 'green' | 'yellow' | 'red'; delay?: number }) => {
  const colors = {
    green: 'bg-parkshare-status-success',
    yellow: 'bg-parkshare-status-warning',
    red: 'bg-parkshare-status-danger'
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.6 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay, duration: 0.4, ease: bouncyEase }}
      className="absolute"
    >
      <div className={`w-10 h-10 rounded-full ${colors[status]} border-4 border-white shadow-float animate-breathe flex items-center justify-center`}>
        <div className="w-3 h-3 rounded-full bg-white" />
      </div>
    </motion.div>
  );
};

// Footer Component
const Footer = () => {
  const location = useLocation();
  const isAuthPage = location.pathname === '/login' || location.pathname === '/register';
  if (isAuthPage) return null;

  const links = [
    { title: 'About', href: '/about' },
    { title: 'Help Center', href: '/help-center' },
    { title: 'Terms', href: '/terms' },
    { title: 'Privacy', href: '/privacy' },
    { title: 'Host resources', href: '/host-resources' },
    { title: 'City guides', href: '/city-guides' }
  ];

  return (
    <footer className="bg-parkshare-bg-secondary py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-7 lg:px-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-accent flex items-center justify-center">
              <Car className="w-4 h-4 text-white" />
            </div>
            <span className="font-display font-bold text-lg text-parkshare-text-primary">ParkShare</span>
          </Link>

          <div className="flex flex-wrap items-center justify-center gap-6">
            {links.map((link, index) => (
              <Link 
                key={index}
                to={link.href}
                className="text-sm text-parkshare-text-secondary hover:text-parkshare-text-primary transition-colors"
              >
                {link.title}
              </Link>
            ))}
          </div>

          <div className="text-sm text-parkshare-text-secondary">
            © {new Date().getFullYear()} ParkShare
          </div>
        </div>
      </div>
    </footer>
  );
};

// ============================================
// HOME PAGE
// ============================================
const HomePage = () => {
  const [mode, setMode] = useState<'renter' | 'host'>('renter');
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = () => {
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery)}`);
    } else {
      navigate('/search');
    }
  };

  return (
    <div className="min-h-screen bg-parkshare-bg-primary">
      {/* Hero Section */}
      <section className="relative min-h-screen pt-16 overflow-hidden">
        <motion.div 
          initial={{ scale: 1.04 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.9, ease: smoothEase }}
          className="absolute inset-0 z-0"
        >
          <img 
            src="/images/hero-map.jpg" 
            alt="City Map" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-parkshare-bg-primary/30 via-transparent to-parkshare-bg-primary" />
        </motion.div>

        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute top-[25%] left-[15%]"><BubblePin status="green" delay={0.3} /></div>
          <div className="absolute top-[35%] left-[35%]"><BubblePin status="yellow" delay={0.5} /></div>
          <div className="absolute top-[20%] right-[25%]"><BubblePin status="green" delay={0.7} /></div>
          <div className="absolute top-[45%] right-[15%]"><BubblePin status="red" delay={0.9} /></div>
          <div className="absolute bottom-[35%] left-[25%]"><BubblePin status="green" delay={1.1} /></div>
          <div className="absolute bottom-[30%] right-[30%]"><BubblePin status="yellow" delay={1.3} /></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-7 lg:px-10 min-h-[calc(100vh-64px)] flex items-center">
          <div className="grid lg:grid-cols-2 gap-10 items-center w-full py-12">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
              <motion.h1 
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl text-parkshare-text-primary leading-tight mb-4"
              >
                Park nearby.
                <br />
                <span className="text-accent">Rent your spot.</span>
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.16 }}
                className="text-lg text-parkshare-text-secondary max-w-md"
              >
                Find affordable parking in minutes—or earn by sharing your space.
              </motion.p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 28, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.65, delay: 0.2, ease: smoothEase }}
              className="lg:justify-self-end w-full max-w-md"
            >
              <div className="bg-parkshare-surface rounded-card shadow-card p-6 sm:p-8">
                <div className="flex items-center justify-center gap-4 mb-6">
                  <span className={`text-sm font-medium transition-colors ${mode === 'renter' ? 'text-parkshare-text-primary' : 'text-parkshare-text-secondary'}`}>
                    I need parking
                  </span>
                  <Switch 
                    checked={mode === 'host'}
                    onCheckedChange={(checked) => setMode(checked ? 'host' : 'renter')}
                  />
                  <span className={`text-sm font-medium transition-colors ${mode === 'host' ? 'text-parkshare-text-primary' : 'text-parkshare-text-secondary'}`}>
                    I have a spot
                  </span>
                </div>

                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-parkshare-text-secondary mb-2">
                      {mode === 'renter' ? 'Where do you need parking?' : 'Where is your parking spot?'}
                    </label>
                    <div className="relative">
                      <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-parkshare-text-secondary" />
                      <Input 
                        placeholder="Enter address or neighborhood"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
                        className="pl-12 h-14 rounded-xl border-parkshare-text-primary/10 focus:border-accent focus:ring-accent/20"
                      />
                    </div>
                  </div>

                  <Button 
                    onClick={handleSearch}
                    className="w-full h-14 bg-accent hover:bg-accent-dark text-white rounded-xl font-semibold text-base transition-all hover:shadow-input-focus"
                  >
                    <Search className="w-5 h-5 mr-2" />
                    {mode === 'renter' ? 'Search spots' : 'List your spot'}
                  </Button>
                </div>

                <div className="mt-6 pt-6 border-t border-parkshare-text-primary/5 grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="font-display font-bold text-xl text-parkshare-text-primary">12K+</div>
                    <div className="text-xs text-parkshare-text-secondary">Spots listed</div>
                  </div>
                  <div>
                    <div className="font-display font-bold text-xl text-parkshare-text-primary">35K+</div>
                    <div className="text-xs text-parkshare-text-secondary">Happy drivers</div>
                  </div>
                  <div>
                    <div className="font-display font-bold text-xl text-parkshare-text-primary">$2.4M</div>
                    <div className="text-xs text-parkshare-text-secondary">Paid to hosts</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        <Link to="/list-spot">
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="fixed bottom-6 right-6 z-40 bg-parkshare-text-primary text-white px-6 py-4 rounded-pill shadow-float font-medium text-sm flex items-center gap-2 hover:shadow-lg transition-shadow"
          >
            <Home className="w-4 h-4" />
            List your spot
          </motion.button>
        </Link>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="section-padding bg-parkshare-bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-7 lg:px-10">
          <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-12">
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-parkshare-text-primary mb-4">
              Three steps to park (or earn)
            </h2>
            <p className="text-parkshare-text-secondary max-w-xl mx-auto">
              Whether you&apos;re looking for a spot or listing one, we&apos;ve made it simple.
            </p>
          </motion.div>

          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid md:grid-cols-3 gap-6">
            {[
              { icon: <Search className="w-7 h-7" />, title: 'Search & filter', desc: 'Set your time, choose a neighborhood, and see real-time availability on the map.' },
              { icon: <Calendar className="w-7 h-7" />, title: 'Book instantly', desc: 'Reserve in seconds. Get directions and access details sent right to your phone.' },
              { icon: <CheckCircle className="w-7 h-7" />, title: 'Park & go', desc: 'Snap a quick photo at arrival and departure—done. No hassle, no waiting.' }
            ].map((step, index) => (
              <motion.div key={index} variants={fadeInUp} whileHover={{ y: -4 }} className="bg-parkshare-surface rounded-card p-8 shadow-card hover:shadow-lg transition-all duration-220">
                <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center text-accent mb-6">{step.icon}</div>
                <Badge variant="secondary" className="bg-accent/10 text-accent font-semibold mb-3">Step {index + 1}</Badge>
                <h3 className="font-display font-bold text-xl text-parkshare-text-primary mb-2">{step.title}</h3>
                <p className="text-parkshare-text-secondary leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-parkshare-bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-7 lg:px-10">
          <motion.div 
            variants={{ hidden: { opacity: 0, scale: 0.98 }, visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: smoothEase } } }} 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true }} 
            className="bg-accent rounded-card p-8 sm:p-12 lg:p-16 text-center relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2" />
            <div className="relative z-10 max-w-xl mx-auto">
              <h2 className="font-display font-bold text-3xl sm:text-4xl text-white mb-4">Get the app & hit the road</h2>
              <p className="text-white/80 mb-8">Download ParkShare and start finding or listing parking spots in minutes.</p>
              <div className="flex flex-col sm:flex-row gap-3 mb-8">
                <div className="relative flex-1">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-parkshare-text-secondary" />
                  <Input placeholder="Enter your email" className="pl-12 h-14 rounded-xl border-0 bg-white" />
                </div>
                <Button className="h-14 px-8 bg-parkshare-text-primary hover:bg-parkshare-text-primary/90 text-white rounded-xl font-semibold">
                  <Smartphone className="w-5 h-5 mr-2" /> Send me the link
                </Button>
              </div>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <button className="flex items-center gap-3 bg-black text-white px-6 py-3 rounded-xl hover:bg-black/90">
                  <svg className="w-7 h-7" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.21-1.96 1.07-3.11-1.05.05-2.31.72-3.06 1.61-.67.78-1.26 2.03-1.1 3.12 1.19.09 2.4-.61 3.09-1.62z"/>
                  </svg>
                  <div className="text-left"><div className="text-xs opacity-80">Download on the</div><div className="text-sm font-semibold">App Store</div></div>
                </button>
                <button className="flex items-center gap-3 bg-black text-white px-6 py-3 rounded-xl hover:bg-black/90">
                  <svg className="w-7 h-7" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
                  </svg>
                  <div className="text-left"><div className="text-xs opacity-80">Get it on</div><div className="text-sm font-semibold">Google Play</div></div>
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

// ============================================
// MAIN APP COMPONENT
// ============================================
function App() {
  return (
    <Router>
      <div className="min-h-screen bg-parkshare-bg-primary">
        <Navigation />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/for-drivers" element={<ForDrivers />} />
            <Route path="/for-hosts" element={<ForHosts />} />
            <Route path="/trust-safety" element={<TrustSafety />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/search" element={<SearchPage />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/list-spot" element={<ListSpot />} />
            <Route path="/book/:id" element={<Booking />} />
            <Route path="/about" element={<About />} />
            <Route path="/help-center" element={<HelpCenter />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/host-resources" element={<HostResources />} />
            <Route path="/city-guides" element={<CityGuides />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
