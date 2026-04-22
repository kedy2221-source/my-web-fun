import { motion, type Transition } from 'framer-motion';
import { Home, DollarSign, TrendingUp, Shield, CreditCard, Star, CheckCircle, Mail, Lightbulb } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

const smoothEase: Transition['ease'] = [0.22, 0.61, 0.36, 1];

const fadeInUp = {
  hidden: { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: smoothEase } }
};

const HostResources = () => {
  const bestPractices = [
    'Provide accurate location details',
    'Ensure your space is legally rentable',
    'Be responsive and professional',
    'Keep your calendar updated',
    'Respond quickly to booking requests',
    'Maintain a clean and accessible parking space',
    'Provide clear instructions for access'
  ];

  return (
    <div className="min-h-screen bg-parkshare-bg-primary pt-16">
      {/* Hero */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-transparent" />
        <div className="max-w-4xl mx-auto px-4 sm:px-7 lg:px-10 relative z-10">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="text-center">
            <Badge className="bg-accent/10 text-accent mb-4">For Hosts</Badge>
            <h1 className="font-display font-bold text-4xl sm:text-5xl text-parkshare-text-primary mb-6">
              Host Resources
            </h1>
            <p className="text-lg text-parkshare-text-secondary leading-relaxed">
              Welcome to ParkShare Host Resources—everything you need to succeed as a parking space provider.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding bg-parkshare-bg-primary">
        <div className="max-w-3xl mx-auto px-4 sm:px-7 lg:px-10">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="space-y-8">
            
            <div className="bg-parkshare-surface rounded-card p-8 shadow-card">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center">
                  <Home className="w-5 h-5 text-accent" />
                </div>
                <h2 className="font-display font-bold text-2xl text-parkshare-text-primary">Getting Started as a Host</h2>
              </div>
              <p className="text-parkshare-text-secondary leading-relaxed">
                Create your listing by adding your parking space details, availability, and pricing. Make sure your listing is accurate and up to date.
              </p>
            </div>

            <div className="bg-parkshare-surface rounded-card p-8 shadow-card">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center">
                  <DollarSign className="w-5 h-5 text-accent" />
                </div>
                <h2 className="font-display font-bold text-2xl text-parkshare-text-primary">Pricing Your Space</h2>
              </div>
              <p className="text-parkshare-text-secondary leading-relaxed">
                We recommend pricing your parking space at least 20% below average city parking rates to attract more renters and increase bookings.
              </p>
            </div>

            <div className="bg-parkshare-surface rounded-card p-8 shadow-card">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center">
                  <TrendingUp className="w-5 h-5 text-accent" />
                </div>
                <h2 className="font-display font-bold text-2xl text-parkshare-text-primary">Maximizing Earnings</h2>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start gap-3 text-parkshare-text-secondary">
                  <CheckCircle className="w-5 h-5 text-parkshare-status-success flex-shrink-0 mt-0.5" />
                  <span>Keep your calendar updated</span>
                </li>
                <li className="flex items-start gap-3 text-parkshare-text-secondary">
                  <CheckCircle className="w-5 h-5 text-parkshare-status-success flex-shrink-0 mt-0.5" />
                  <span>Respond quickly to booking requests</span>
                </li>
                <li className="flex items-start gap-3 text-parkshare-text-secondary">
                  <CheckCircle className="w-5 h-5 text-parkshare-status-success flex-shrink-0 mt-0.5" />
                  <span>Maintain a clean and accessible parking space</span>
                </li>
                <li className="flex items-start gap-3 text-parkshare-text-secondary">
                  <CheckCircle className="w-5 h-5 text-parkshare-status-success flex-shrink-0 mt-0.5" />
                  <span>Provide clear instructions for access</span>
                </li>
              </ul>
            </div>

            <div className="bg-parkshare-surface rounded-card p-8 shadow-card">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center">
                  <Shield className="w-5 h-5 text-accent" />
                </div>
                <h2 className="font-display font-bold text-2xl text-parkshare-text-primary">Safety & Trust</h2>
              </div>
              <p className="text-parkshare-text-secondary leading-relaxed">
                All users are verified to maintain a safe environment. Hosts are encouraged to communicate clearly and report any suspicious activity.
              </p>
            </div>

            <div className="bg-parkshare-surface rounded-card p-8 shadow-card">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center">
                  <CreditCard className="w-5 h-5 text-accent" />
                </div>
                <h2 className="font-display font-bold text-2xl text-parkshare-text-primary">Payments & Fees</h2>
              </div>
              <p className="text-parkshare-text-secondary leading-relaxed mb-4">
                Payments are processed securely. Hosts receive payouts after bookings, minus a 30% platform service fee. There are no charges if your space is not booked.
              </p>
              <div className="grid grid-cols-2 gap-4 mt-4">
                <div className="bg-parkshare-bg-primary rounded-lg p-4 text-center">
                  <div className="font-display font-bold text-2xl text-accent">70%</div>
                  <div className="text-sm text-parkshare-text-secondary">You receive</div>
                </div>
                <div className="bg-parkshare-bg-primary rounded-lg p-4 text-center">
                  <div className="font-display font-bold text-2xl text-parkshare-text-primary">30%</div>
                  <div className="text-sm text-parkshare-text-secondary">Platform fee</div>
                </div>
              </div>
            </div>

            <div className="bg-parkshare-surface rounded-card p-8 shadow-card">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center">
                  <Lightbulb className="w-5 h-5 text-accent" />
                </div>
                <h2 className="font-display font-bold text-2xl text-parkshare-text-primary">Best Practices</h2>
              </div>
              <ul className="space-y-3">
                {bestPractices.map((practice, index) => (
                  <li key={index} className="flex items-start gap-3 text-parkshare-text-secondary">
                    <Star className="w-4 h-4 text-accent flex-shrink-0 mt-1" />
                    <span>{practice}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-accent rounded-card p-8 text-center">
              <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center mx-auto mb-4">
                <Mail className="w-6 h-6 text-white" />
              </div>
              <h2 className="font-display font-bold text-xl text-white mb-2">Need More Help?</h2>
              <p className="text-white/80 mb-4">For additional support, contact our host support team.</p>
              <a href="mailto:hosts@parkshare.com" className="inline-flex items-center gap-2 px-6 py-3 bg-white text-accent rounded-xl font-medium hover:bg-white/90 transition-colors">
                <Mail className="w-5 h-5" />
                hosts@parkshare.com
              </a>
            </div>

          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default HostResources;
