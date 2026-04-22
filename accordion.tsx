import { motion, type Transition } from 'framer-motion';
import { FileText, Users, CreditCard, XCircle, AlertTriangle, RefreshCw } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

const smoothEase: Transition['ease'] = [0.22, 0.61, 0.36, 1];

const fadeInUp = {
  hidden: { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: smoothEase } }
};

const Terms = () => {
  return (
    <div className="min-h-screen bg-parkshare-bg-primary pt-16">
      {/* Hero */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-transparent" />
        <div className="max-w-4xl mx-auto px-4 sm:px-7 lg:px-10 relative z-10">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="text-center">
            <Badge className="bg-accent/10 text-accent mb-4">Legal</Badge>
            <h1 className="font-display font-bold text-4xl sm:text-5xl text-parkshare-text-primary mb-6">
              Terms of Service
            </h1>
            <p className="text-lg text-parkshare-text-secondary leading-relaxed">
              By using ParkShare, you agree to the following terms and conditions.
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
                  <FileText className="w-5 h-5 text-accent" />
                </div>
                <h2 className="font-display font-bold text-2xl text-parkshare-text-primary">Platform Role</h2>
              </div>
              <p className="text-parkshare-text-secondary leading-relaxed">
                ParkShare operates as a digital marketplace connecting parking space owners (&quot;Hosts&quot;) with individuals seeking parking (&quot;Renters&quot;). ParkShare does not own, manage, or control parking spaces listed on the platform.
              </p>
            </div>

            <div className="bg-parkshare-surface rounded-card p-8 shadow-card">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center">
                  <Users className="w-5 h-5 text-accent" />
                </div>
                <h2 className="font-display font-bold text-2xl text-parkshare-text-primary">User Responsibilities</h2>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start gap-3 text-parkshare-text-secondary">
                  <span className="text-accent mt-1">•</span>
                  <span>Users must provide accurate and complete information when registering.</span>
                </li>
                <li className="flex items-start gap-3 text-parkshare-text-secondary">
                  <span className="text-accent mt-1">•</span>
                  <span>Renters agree to use parking spaces responsibly and legally.</span>
                </li>
                <li className="flex items-start gap-3 text-parkshare-text-secondary">
                  <span className="text-accent mt-1">•</span>
                  <span>Hosts must ensure they have the legal right to rent out their parking space.</span>
                </li>
              </ul>
            </div>

            <div className="bg-parkshare-surface rounded-card p-8 shadow-card">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center">
                  <CreditCard className="w-5 h-5 text-accent" />
                </div>
                <h2 className="font-display font-bold text-2xl text-parkshare-text-primary">Bookings & Payments</h2>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start gap-3 text-parkshare-text-secondary">
                  <span className="text-accent mt-1">•</span>
                  <span>All bookings are confirmed upon payment.</span>
                </li>
                <li className="flex items-start gap-3 text-parkshare-text-secondary">
                  <span className="text-accent mt-1">•</span>
                  <span>Payments are processed securely through third-party providers.</span>
                </li>
                <li className="flex items-start gap-3 text-parkshare-text-secondary">
                  <span className="text-accent mt-1">•</span>
                  <span>ParkShare charges a 30% service fee on completed bookings.</span>
                </li>
              </ul>
            </div>

            <div className="bg-parkshare-surface rounded-card p-8 shadow-card">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center">
                  <XCircle className="w-5 h-5 text-accent" />
                </div>
                <h2 className="font-display font-bold text-2xl text-parkshare-text-primary">Cancellations & Refunds</h2>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start gap-3 text-parkshare-text-secondary">
                  <span className="text-accent mt-1">•</span>
                  <span>Bookings cannot be refunded once the reservation period has started.</span>
                </li>
                <li className="flex items-start gap-3 text-parkshare-text-secondary">
                  <span className="text-accent mt-1">•</span>
                  <span>Cancellation policies may vary depending on the host.</span>
                </li>
              </ul>
            </div>

            <div className="bg-parkshare-surface rounded-card p-8 shadow-card">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center">
                  <AlertTriangle className="w-5 h-5 text-accent" />
                </div>
                <h2 className="font-display font-bold text-2xl text-parkshare-text-primary">Liability</h2>
              </div>
              <p className="text-parkshare-text-secondary mb-4">ParkShare is not responsible for:</p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3 text-parkshare-text-secondary">
                  <span className="text-accent mt-1">•</span>
                  <span>Vehicle damage or theft</span>
                </li>
                <li className="flex items-start gap-3 text-parkshare-text-secondary">
                  <span className="text-accent mt-1">•</span>
                  <span>Property disputes between users</span>
                </li>
                <li className="flex items-start gap-3 text-parkshare-text-secondary">
                  <span className="text-accent mt-1">•</span>
                  <span>Inaccurate listings</span>
                </li>
              </ul>
              <p className="text-parkshare-text-secondary mt-4">Use of the platform is at your own risk.</p>
            </div>

            <div className="bg-parkshare-surface rounded-card p-8 shadow-card">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center">
                  <Users className="w-5 h-5 text-accent" />
                </div>
                <h2 className="font-display font-bold text-2xl text-parkshare-text-primary">Account Suspension</h2>
              </div>
              <p className="text-parkshare-text-secondary leading-relaxed">
                We reserve the right to suspend or terminate accounts involved in fraud, misuse, or violation of these terms.
              </p>
            </div>

            <div className="bg-parkshare-surface rounded-card p-8 shadow-card">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center">
                  <RefreshCw className="w-5 h-5 text-accent" />
                </div>
                <h2 className="font-display font-bold text-2xl text-parkshare-text-primary">Changes to Terms</h2>
              </div>
              <p className="text-parkshare-text-secondary leading-relaxed">
                ParkShare may update these terms at any time. Continued use of the platform constitutes acceptance of any changes.
              </p>
            </div>

          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Terms;
