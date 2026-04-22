import { motion, type Transition } from 'framer-motion';
import { Shield, Database, Settings, Users, FileCheck, Mail } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

const smoothEase: Transition['ease'] = [0.22, 0.61, 0.36, 1];

const fadeInUp = {
  hidden: { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: smoothEase } }
};

const Privacy = () => {
  return (
    <div className="min-h-screen bg-parkshare-bg-primary pt-16">
      {/* Hero */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-transparent" />
        <div className="max-w-4xl mx-auto px-4 sm:px-7 lg:px-10 relative z-10">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="text-center">
            <Badge className="bg-accent/10 text-accent mb-4">Legal</Badge>
            <h1 className="font-display font-bold text-4xl sm:text-5xl text-parkshare-text-primary mb-6">
              Privacy Policy
            </h1>
            <p className="text-lg text-parkshare-text-secondary leading-relaxed">
              Your privacy and data security are important to us.
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
                  <Database className="w-5 h-5 text-accent" />
                </div>
                <h2 className="font-display font-bold text-2xl text-parkshare-text-primary">Information We Collect</h2>
              </div>
              <p className="text-parkshare-text-secondary mb-4">We collect the following information:</p>
              <ul className="space-y-2">
                <li className="flex items-start gap-3 text-parkshare-text-secondary">
                  <span className="text-accent mt-1">•</span>
                  <span>Name, email, phone number</span>
                </li>
                <li className="flex items-start gap-3 text-parkshare-text-secondary">
                  <span className="text-accent mt-1">•</span>
                  <span>Date of birth</span>
                </li>
                <li className="flex items-start gap-3 text-parkshare-text-secondary">
                  <span className="text-accent mt-1">•</span>
                  <span>Government-issued ID</span>
                </li>
                <li className="flex items-start gap-3 text-parkshare-text-secondary">
                  <span className="text-accent mt-1">•</span>
                  <span>Facial verification data</span>
                </li>
                <li className="flex items-start gap-3 text-parkshare-text-secondary">
                  <span className="text-accent mt-1">•</span>
                  <span>Payment information (processed securely via third parties)</span>
                </li>
              </ul>
            </div>

            <div className="bg-parkshare-surface rounded-card p-8 shadow-card">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center">
                  <Settings className="w-5 h-5 text-accent" />
                </div>
                <h2 className="font-display font-bold text-2xl text-parkshare-text-primary">How We Use Your Information</h2>
              </div>
              <p className="text-parkshare-text-secondary mb-4">Your data is used to:</p>
              <ul className="space-y-2">
                <li className="flex items-start gap-3 text-parkshare-text-secondary">
                  <span className="text-accent mt-1">•</span>
                  <span>Verify identity and ensure safety</span>
                </li>
                <li className="flex items-start gap-3 text-parkshare-text-secondary">
                  <span className="text-accent mt-1">•</span>
                  <span>Process bookings and payments</span>
                </li>
                <li className="flex items-start gap-3 text-parkshare-text-secondary">
                  <span className="text-accent mt-1">•</span>
                  <span>Improve platform functionality</span>
                </li>
                <li className="flex items-start gap-3 text-parkshare-text-secondary">
                  <span className="text-accent mt-1">•</span>
                  <span>Communicate important updates</span>
                </li>
              </ul>
            </div>

            <div className="bg-parkshare-surface rounded-card p-8 shadow-card">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center">
                  <Shield className="w-5 h-5 text-accent" />
                </div>
                <h2 className="font-display font-bold text-2xl text-parkshare-text-primary">Data Protection</h2>
              </div>
              <p className="text-parkshare-text-secondary leading-relaxed">
                We use secure systems to store and protect your data. Sensitive data is encrypted and handled in accordance with applicable privacy laws.
              </p>
            </div>

            <div className="bg-parkshare-surface rounded-card p-8 shadow-card">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center">
                  <Users className="w-5 h-5 text-accent" />
                </div>
                <h2 className="font-display font-bold text-2xl text-parkshare-text-primary">Third-Party Services</h2>
              </div>
              <p className="text-parkshare-text-secondary mb-4">We use trusted third-party services for:</p>
              <ul className="space-y-2">
                <li className="flex items-start gap-3 text-parkshare-text-secondary">
                  <span className="text-accent mt-1">•</span>
                  <span>Payments</span>
                </li>
                <li className="flex items-start gap-3 text-parkshare-text-secondary">
                  <span className="text-accent mt-1">•</span>
                  <span>Identity verification</span>
                </li>
                <li className="flex items-start gap-3 text-parkshare-text-secondary">
                  <span className="text-accent mt-1">•</span>
                  <span>Analytics</span>
                </li>
              </ul>
              <p className="text-parkshare-text-secondary mt-4">These providers have their own privacy policies.</p>
            </div>

            <div className="bg-parkshare-surface rounded-card p-8 shadow-card">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center">
                  <FileCheck className="w-5 h-5 text-accent" />
                </div>
                <h2 className="font-display font-bold text-2xl text-parkshare-text-primary">Your Rights</h2>
              </div>
              <p className="text-parkshare-text-secondary leading-relaxed">
                You may request access, correction, or deletion of your data at any time by contacting us.
              </p>
            </div>

            <div className="bg-parkshare-surface rounded-card p-8 shadow-card">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center">
                  <Shield className="w-5 h-5 text-accent" />
                </div>
                <h2 className="font-display font-bold text-2xl text-parkshare-text-primary">Compliance</h2>
              </div>
              <p className="text-parkshare-text-secondary leading-relaxed">
                ParkShare complies with applicable data protection regulations, including Canadian privacy laws (PIPEDA).
              </p>
            </div>

            <div className="bg-accent rounded-card p-8 text-center">
              <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center mx-auto mb-4">
                <Mail className="w-6 h-6 text-white" />
              </div>
              <h2 className="font-display font-bold text-xl text-white mb-2">Questions?</h2>
              <p className="text-white/80 mb-4">For questions about our privacy policy, contact us at:</p>
              <a href="mailto:privacy@parkshare.com" className="inline-flex items-center gap-2 px-6 py-3 bg-white text-accent rounded-xl font-medium hover:bg-white/90 transition-colors">
                <Mail className="w-5 h-5" />
                privacy@parkshare.com
              </a>
            </div>

          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Privacy;
