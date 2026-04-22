import { motion, type Transition } from 'framer-motion';
import { DollarSign, Calendar, Shield, TrendingUp, CheckCircle, Star, ChevronRight, Home } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const smoothEase: Transition['ease'] = [0.22, 0.61, 0.36, 1];

const fadeInUp = {
  hidden: { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: smoothEase } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12 } }
};

const ForHosts = () => {
  const [monthlyEstimate, setMonthlyEstimate] = useState(220);
  const [daysPerWeek, setDaysPerWeek] = useState(5);

  const calculateEarnings = (days: number) => {
    return days * 12 * 4; // $12/day average * 4 weeks
  };

  const handleDaysChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const days = parseInt(e.target.value) || 0;
    setDaysPerWeek(Math.min(Math.max(days, 1), 7));
    setMonthlyEstimate(calculateEarnings(Math.min(Math.max(days, 1), 7)));
  };

  const benefits = [
    { icon: <DollarSign className="w-6 h-6" />, title: 'Set your price', desc: 'You control how much to charge. Our calculator suggests competitive rates.' },
    { icon: <Calendar className="w-6 h-6" />, title: 'Flexible schedule', desc: 'Make your spot available when it works for you. Block off days anytime.' },
    { icon: <Shield className="w-6 h-6" />, title: '$1M protection', desc: 'Every booking includes liability coverage and damage protection.' },
    { icon: <TrendingUp className="w-6 h-6" />, title: 'Fast payouts', desc: 'Get paid directly to your bank account within 48 hours of each booking.' }
  ];

  const steps = [
    { icon: <Home className="w-6 h-6" />, title: 'List your spot', desc: 'Add photos, set your price, and describe your space in minutes.' },
    { icon: <Calendar className="w-6 h-6" />, title: 'Set availability', desc: 'Choose which days and hours your spot is available for booking.' },
    { icon: <CheckCircle className="w-6 h-6" />, title: 'Start earning', desc: 'Get notified of bookings and receive payments automatically.' }
  ];

  const testimonials = [
    { name: 'David K.', location: 'Brooklyn', quote: 'I make $350/month from my driveway that was just sitting empty. Incredible!', rating: 5, earnings: '$350/mo', avatar: '/images/avatar-david.jpg' },
    { name: 'Amanda R.', location: 'San Francisco', quote: 'The app is so easy to use. I listed my garage in 10 minutes.', rating: 5, earnings: '$480/mo', avatar: '/images/avatar-amanda.jpg' },
    { name: 'James L.', location: 'Chicago', quote: 'Great support team and the payout process is seamless.', rating: 5, earnings: '$290/mo', avatar: '/images/avatar-james.jpg' }
  ];

  return (
    <div className="min-h-screen bg-parkshare-bg-primary pt-16">
      {/* Hero */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-transparent" />
        <div className="max-w-7xl mx-auto px-4 sm:px-7 lg:px-10 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <Badge className="bg-accent/10 text-accent mb-4">For Hosts</Badge>
              <h1 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl text-parkshare-text-primary mb-6">
                Turn your empty spot into <span className="text-accent">income</span>
              </h1>
              <p className="text-lg text-parkshare-text-secondary mb-8">
                Have a driveway, garage, or parking space? List it on ParkShare and start 
                earning passive income from drivers in your neighborhood.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/list-spot">
                  <Button className="bg-accent hover:bg-accent-dark text-white rounded-pill px-8 h-14 text-base font-semibold">
                    <Home className="w-5 h-5 mr-2" />
                    List your spot
                  </Button>
                </Link>
                <Link to="/register">
                  <Button variant="outline" className="rounded-pill px-8 h-14 text-base font-semibold border-parkshare-text-primary/20">
                    Learn more
                  </Button>
                </Link>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="relative">
              <img src="/images/host-driveway.jpg" alt="Host driveway" className="rounded-card shadow-card w-full" />
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }} className="absolute -bottom-6 -left-6 bg-parkshare-surface rounded-card p-5 shadow-float">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-xl bg-parkshare-status-success/10 flex items-center justify-center">
                    <TrendingUp className="w-5 h-5 text-parkshare-status-success" />
                  </div>
                  <div>
                    <div className="text-xs text-parkshare-text-secondary">Average monthly earnings</div>
                    <div className="font-display font-bold text-2xl text-parkshare-text-primary">$220</div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Earnings Calculator */}
      <section className="section-padding bg-parkshare-bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-7 lg:px-10">
          <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-12">
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-parkshare-text-primary mb-4">Estimate your earnings</h2>
            <p className="text-parkshare-text-secondary max-w-xl mx-auto">See how much you could make based on your availability</p>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-2xl mx-auto bg-parkshare-surface rounded-card p-8 shadow-card">
            <div className="grid sm:grid-cols-2 gap-8 items-center">
              <div>
                <label className="block text-sm font-medium text-parkshare-text-secondary mb-3">
                  Days available per week
                </label>
                <Input 
                  type="number" 
                  min="1" 
                  max="7" 
                  value={daysPerWeek}
                  onChange={handleDaysChange}
                  className="h-14 text-lg text-center"
                />
                <input 
                  type="range" 
                  min="1" 
                  max="7" 
                  value={daysPerWeek}
                  onChange={handleDaysChange}
                  className="w-full mt-4 accent-accent"
                />
              </div>
              <div className="text-center sm:text-left">
                <div className="text-sm text-parkshare-text-secondary mb-2">Estimated monthly earnings</div>
                <div className="font-display font-bold text-5xl text-accent">${monthlyEstimate}</div>
                <div className="text-sm text-parkshare-text-secondary mt-2">Based on $12/day average</div>
              </div>
            </div>
            <div className="mt-8 pt-6 border-t border-parkshare-text-primary/5">
              <Link to="/list-spot">
                <Button className="w-full bg-accent hover:bg-accent-dark text-white rounded-xl h-14 font-semibold">
                  Start listing your spot
                  <ChevronRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section-padding bg-parkshare-bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-7 lg:px-10">
          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div key={index} variants={fadeInUp} className="bg-parkshare-surface rounded-card p-6 shadow-card">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center text-accent mb-4">
                  {benefit.icon}
                </div>
                <h3 className="font-display font-bold text-lg text-parkshare-text-primary mb-2">{benefit.title}</h3>
                <p className="text-sm text-parkshare-text-secondary">{benefit.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* How to List */}
      <section className="section-padding bg-parkshare-bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-7 lg:px-10">
          <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-12">
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-parkshare-text-primary mb-4">List your spot in 3 easy steps</h2>
          </motion.div>

          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <motion.div key={index} variants={fadeInUp} className="text-center">
                <div className="w-16 h-16 rounded-2xl bg-accent flex items-center justify-center text-white mx-auto mb-6">
                  {step.icon}
                </div>
                <h3 className="font-display font-bold text-xl text-parkshare-text-primary mb-3">{step.title}</h3>
                <p className="text-parkshare-text-secondary">{step.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-parkshare-bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-7 lg:px-10">
          <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-12">
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-parkshare-text-primary mb-4">What hosts are saying</h2>
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
                <div className="flex items-center justify-between pt-4 border-t border-parkshare-text-primary/5">
                  <div className="flex items-center gap-3">
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
                  <Badge className="bg-parkshare-status-success/10 text-parkshare-status-success text-xs">{testimonial.earnings}</Badge>
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
            <h2 className="font-display font-bold text-3xl text-white mb-4">Ready to start earning?</h2>
            <p className="text-white/80 mb-8 max-w-lg mx-auto">Join thousands of hosts turning their empty spots into extra income.</p>
            <Link to="/list-spot">
              <Button className="bg-white text-accent hover:bg-white/90 rounded-pill px-8 h-14 font-semibold text-base">
                <Home className="w-5 h-5 mr-2" />
                List your spot for free
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ForHosts;
