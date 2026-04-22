import { motion, type Transition } from 'framer-motion';
import { Search, Calendar, CheckCircle, MapPin, Clock, Shield, Star, ChevronRight, Car, Navigation } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';

const smoothEase: Transition['ease'] = [0.22, 0.61, 0.36, 1];

const fadeInUp = {
  hidden: { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: smoothEase } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12 } }
};

const ForDrivers = () => {
  const steps = [
    {
      icon: <Search className="w-8 h-8" />,
      title: 'Search & filter',
      description: 'Enter your destination and see all available parking spots on the map. Filter by price, distance, and amenities.',
      features: ['Real-time availability', '3km radius search', 'Price comparison']
    },
    {
      icon: <Calendar className="w-8 h-8" />,
      title: 'Book instantly',
      description: 'Reserve your spot in seconds. No phone calls, no waiting. Get instant confirmation and access details.',
      features: ['Instant confirmation', 'Secure payment', 'Digital access codes']
    },
    {
      icon: <Navigation className="w-8 h-8" />,
      title: 'Navigate & park',
      description: 'Get turn-by-turn directions to your spot. Check in with a quick photo and park with confidence.',
      features: ['GPS directions', 'Photo check-in', '24/7 support']
    }
  ];

  const benefits = [
    { icon: <DollarSign className="w-6 h-6" />, title: 'Save up to 33%', desc: 'ParkShare spots average 20-30% less than city parking rates' },
    { icon: <Clock className="w-6 h-6" />, title: 'Flexible booking', desc: 'Book by the hour, day, week, or month—whatever you need' },
    { icon: <Shield className="w-6 h-6" />, title: 'Verified spots', desc: 'Every listing is verified with photos and host information' },
    { icon: <MapPin className="w-6 h-6" />, title: 'Prime locations', desc: 'Find parking in busy neighborhoods where garages are full' }
  ];

  const testimonials = [
    { name: 'Sarah M.', location: 'Downtown', quote: 'Found a spot half a block from my office for $8/day instead of $25. Game changer!', rating: 5, avatar: '/images/avatar-sarah.jpg' },
    { name: 'Michael T.', location: 'Midtown', quote: 'The booking process is so smooth. I book my weekly spot every Sunday in 30 seconds.', rating: 5, avatar: '/images/avatar-michael.jpg' },
    { name: 'Jessica L.', location: 'Westside', quote: 'Used it for a concert downtown. Saved $20 and was closer than the venue lot!', rating: 5, avatar: '/images/avatar-jessica.jpg' }
  ];

  return (
    <div className="min-h-screen bg-parkshare-bg-primary pt-16">
      {/* Hero */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-accent/5" />
        <div className="max-w-7xl mx-auto px-4 sm:px-7 lg:px-10 relative z-10">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="text-center max-w-3xl mx-auto">
            <Badge className="bg-accent/10 text-accent mb-4">For Drivers</Badge>
            <h1 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl text-parkshare-text-primary mb-6">
              Find parking in <span className="text-accent">minutes</span>, not hours
            </h1>
            <p className="text-lg text-parkshare-text-secondary mb-8">
              Discover affordable, convenient parking spots in your neighborhood. 
              Book instantly and save up to 33% compared to city parking rates.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/search">
                <Button className="bg-accent hover:bg-accent-dark text-white rounded-pill px-8 h-14 text-base font-semibold">
                  <Search className="w-5 h-5 mr-2" />
                  Find parking now
                </Button>
              </Link>
              <Link to="/register">
                <Button variant="outline" className="rounded-pill px-8 h-14 text-base font-semibold border-parkshare-text-primary/20">
                  Create free account
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* How It Works Steps */}
      <section className="section-padding bg-parkshare-bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-7 lg:px-10">
          <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-16">
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-parkshare-text-primary mb-4">How it works</h2>
            <p className="text-parkshare-text-secondary max-w-xl mx-auto">Three simple steps to stress-free parking</p>
          </motion.div>

          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <motion.div key={index} variants={fadeInUp} className="relative">
                <div className="bg-parkshare-surface rounded-card p-8 shadow-card h-full">
                  <div className="w-16 h-16 rounded-2xl bg-accent flex items-center justify-center text-white mb-6">
                    {step.icon}
                  </div>
                  <div className="absolute -top-3 -right-3 w-10 h-10 rounded-full bg-parkshare-bg-secondary flex items-center justify-center font-display font-bold text-accent">
                    {index + 1}
                  </div>
                  <h3 className="font-display font-bold text-xl text-parkshare-text-primary mb-3">{step.title}</h3>
                  <p className="text-parkshare-text-secondary mb-6">{step.description}</p>
                  <ul className="space-y-2">
                    {step.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-center gap-2 text-sm text-parkshare-text-primary">
                        <CheckCircle className="w-4 h-4 text-parkshare-status-success" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section-padding bg-parkshare-bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-7 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <Badge className="bg-accent/10 text-accent mb-4">Why ParkShare</Badge>
              <h2 className="font-display font-bold text-3xl sm:text-4xl text-parkshare-text-primary mb-6">
                Parking made simple
              </h2>
              <p className="text-parkshare-text-secondary mb-8">
                No more circling the block or overpaying for garage parking. 
                ParkShare connects you with locals who have extra space.
              </p>
              <Link to="/search">
                <Button className="bg-accent hover:bg-accent-dark text-white rounded-pill px-8 h-12 font-semibold">
                  Start searching
                  <ChevronRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </motion.div>

            <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid sm:grid-cols-2 gap-4">
              {benefits.map((benefit, index) => (
                <motion.div key={index} variants={fadeInUp} className="bg-parkshare-surface rounded-xl p-6 shadow-card">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center text-accent mb-4">
                    {benefit.icon}
                  </div>
                  <h3 className="font-display font-bold text-lg text-parkshare-text-primary mb-2">{benefit.title}</h3>
                  <p className="text-sm text-parkshare-text-secondary">{benefit.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-parkshare-bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-7 lg:px-10">
          <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-12">
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-parkshare-text-primary mb-4">What drivers are saying</h2>
          </motion.div>

          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <motion.div key={index} variants={fadeInUp} className="bg-parkshare-surface rounded-xl p-6 shadow-card border border-parkshare-text-primary/5">
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className={`w-4 h-4 ${i < testimonial.rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-200'}`} />
                  ))}
                </div>
                <p className="text-parkshare-text-primary text-sm leading-relaxed mb-4">&ldquo;{testimonial.quote}&rdquo;</p>
                <div className="flex items-center gap-3 pt-4 border-t border-parkshare-text-primary/5">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.name}
                    className="w-10 h-10 rounded-full object-cover flex-shrink-0"
                  />
                  <div className="min-w-0">
                    <div className="font-medium text-parkshare-text-primary text-sm">{testimonial.name}</div>
                    <div className="text-xs text-parkshare-text-secondary">{testimonial.location}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-parkshare-bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-7 lg:px-10">
          <motion.div initial={{ opacity: 0, scale: 0.98 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="bg-accent rounded-card p-12 text-center">
            <h2 className="font-display font-bold text-3xl text-white mb-4">Ready to find your spot?</h2>
            <p className="text-white/80 mb-8 max-w-lg mx-auto">Join thousands of drivers who have discovered a better way to park.</p>
            <Link to="/register">
              <Button className="bg-white text-accent hover:bg-white/90 rounded-pill px-8 h-14 font-semibold text-base">
                <Car className="w-5 h-5 mr-2" />
                Create free account
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

// DollarSign icon component
const DollarSign = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="12" y1="1" x2="12" y2="23"></line>
    <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
  </svg>
);

export default ForDrivers;
