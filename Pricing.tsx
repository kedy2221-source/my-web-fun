import { motion, type Transition } from 'framer-motion';
import { Search, MapPin, CreditCard, Home, Shield, Mail, HelpCircle, ChevronDown } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { useState } from 'react';

const smoothEase: Transition['ease'] = [0.22, 0.61, 0.36, 1];

const fadeInUp = {
  hidden: { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: smoothEase } }
};

const HelpCenter = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqs = [
    {
      question: 'How do I create an account?',
      answer: 'To use ParkShare, you must create a verified account. This includes providing your name, contact information, and completing identity verification. Once registered, you can search for available parking or list your own parking space.'
    },
    {
      question: 'How do I find a parking spot?',
      answer: 'Use the search bar to enter a street name, postal code, or city. The map will display available parking within a 3 km radius. Green means available now, yellow means available within 2 hours, and red means not available. Click on a listing to view details, pricing, and the host profile before booking.'
    },
    {
      question: 'How do bookings and payments work?',
      answer: 'All bookings require confirmation before payment. Payments are processed securely via credit card. Once confirmed, your reservation is locked for the selected time period.'
    },
    {
      question: 'How do I list my parking space?',
      answer: 'Hosts can list their parking spaces by providing location details, availability, and pricing. ParkShare recommends pricing at least 20% below average city parking rates to stay competitive.'
    },
    {
      question: 'What safety measures are in place?',
      answer: 'All users must complete identity verification. We use secure systems, including facial verification, to ensure a trusted community.'
    }
  ];

  const guides = [
    {
      icon: <Search className="w-6 h-6" />,
      title: 'Finding a Parking Spot',
      description: 'Learn how to search and book parking'
    },
    {
      icon: <Home className="w-6 h-6" />,
      title: 'Listing Your Space',
      description: 'Become a host and earn income'
    },
    {
      icon: <CreditCard className="w-6 h-6" />,
      title: 'Payments & Fees',
      description: 'Understanding pricing and payouts'
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: 'Safety & Trust',
      description: 'Verification and security features'
    }
  ];

  return (
    <div className="min-h-screen bg-parkshare-bg-primary pt-16">
      {/* Hero */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-transparent" />
        <div className="max-w-4xl mx-auto px-4 sm:px-7 lg:px-10 relative z-10">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="text-center">
            <Badge className="bg-accent/10 text-accent mb-4">Support</Badge>
            <h1 className="font-display font-bold text-4xl sm:text-5xl text-parkshare-text-primary mb-6">
              Help Center
            </h1>
            <p className="text-lg text-parkshare-text-secondary leading-relaxed">
              Welcome to ParkShare&apos;s Help Center. We&apos;re here to make your parking experience simple, secure, and reliable.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Quick Guides */}
      <section className="section-padding bg-parkshare-bg-primary">
        <div className="max-w-5xl mx-auto px-4 sm:px-7 lg:px-10">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
            <h2 className="font-display font-bold text-2xl text-parkshare-text-primary mb-6 text-center">Quick Guides</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {guides.map((guide, index) => (
                <div key={index} className="bg-parkshare-surface rounded-xl p-6 shadow-card hover:shadow-lg transition-shadow cursor-pointer">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center text-accent mb-4">
                    {guide.icon}
                  </div>
                  <h3 className="font-display font-bold text-lg text-parkshare-text-primary mb-1">{guide.title}</h3>
                  <p className="text-sm text-parkshare-text-secondary">{guide.description}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Getting Started */}
      <section className="section-padding bg-parkshare-bg-secondary">
        <div className="max-w-3xl mx-auto px-4 sm:px-7 lg:px-10">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="space-y-8">
            
            <div className="bg-parkshare-surface rounded-card p-8 shadow-card">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center">
                  <HelpCircle className="w-5 h-5 text-accent" />
                </div>
                <h2 className="font-display font-bold text-2xl text-parkshare-text-primary">Getting Started</h2>
              </div>
              <p className="text-parkshare-text-secondary leading-relaxed">
                To use ParkShare, you must create a verified account. This includes providing your name, contact information, and completing identity verification. Once registered, you can search for available parking or list your own parking space.
              </p>
            </div>

            <div className="bg-parkshare-surface rounded-card p-8 shadow-card">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-accent" />
                </div>
                <h2 className="font-display font-bold text-2xl text-parkshare-text-primary">Finding a Parking Spot</h2>
              </div>
              <p className="text-parkshare-text-secondary mb-4">
                Use the search bar to enter a street name, postal code, or city. The map will display available parking within a 3 km radius:
              </p>
              <div className="flex flex-wrap gap-3">
                <div className="flex items-center gap-2 px-3 py-2 bg-parkshare-status-success/10 rounded-lg">
                  <div className="w-3 h-3 rounded-full bg-parkshare-status-success" />
                  <span className="text-sm text-parkshare-text-primary">Available now</span>
                </div>
                <div className="flex items-center gap-2 px-3 py-2 bg-parkshare-status-warning/10 rounded-lg">
                  <div className="w-3 h-3 rounded-full bg-parkshare-status-warning" />
                  <span className="text-sm text-parkshare-text-primary">Available within 2 hours</span>
                </div>
                <div className="flex items-center gap-2 px-3 py-2 bg-parkshare-status-danger/10 rounded-lg">
                  <div className="w-3 h-3 rounded-full bg-parkshare-status-danger" />
                  <span className="text-sm text-parkshare-text-primary">Not available</span>
                </div>
              </div>
              <p className="text-parkshare-text-secondary mt-4">
                Click on a listing to view details, pricing, and the host profile before booking.
              </p>
            </div>

            <div className="bg-parkshare-surface rounded-card p-8 shadow-card">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center">
                  <CreditCard className="w-5 h-5 text-accent" />
                </div>
                <h2 className="font-display font-bold text-2xl text-parkshare-text-primary">Booking & Payments</h2>
              </div>
              <p className="text-parkshare-text-secondary leading-relaxed">
                All bookings require confirmation before payment. Payments are processed securely via credit card. Once confirmed, your reservation is locked for the selected time period.
              </p>
            </div>

            <div className="bg-parkshare-surface rounded-card p-8 shadow-card">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center">
                  <Home className="w-5 h-5 text-accent" />
                </div>
                <h2 className="font-display font-bold text-2xl text-parkshare-text-primary">Listing Your Parking Space</h2>
              </div>
              <p className="text-parkshare-text-secondary leading-relaxed">
                Hosts can list their parking spaces by providing location details, availability, and pricing. ParkShare recommends pricing at least 20% below average city parking rates to stay competitive.
              </p>
            </div>

            <div className="bg-parkshare-surface rounded-card p-8 shadow-card">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center">
                  <Shield className="w-5 h-5 text-accent" />
                </div>
                <h2 className="font-display font-bold text-2xl text-parkshare-text-primary">Safety & Verification</h2>
              </div>
              <p className="text-parkshare-text-secondary leading-relaxed">
                All users must complete identity verification. We use secure systems, including facial verification, to ensure a trusted community.
              </p>
            </div>

          </motion.div>
        </div>
      </section>

      {/* FAQs */}
      <section className="section-padding bg-parkshare-bg-primary">
        <div className="max-w-3xl mx-auto px-4 sm:px-7 lg:px-10">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
            <h2 className="font-display font-bold text-2xl text-parkshare-text-primary mb-6 text-center">Frequently Asked Questions</h2>
            <div className="space-y-3">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-parkshare-surface rounded-xl shadow-card overflow-hidden">
                  <button 
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                    className="w-full flex items-center justify-between p-5 text-left"
                  >
                    <span className="font-medium text-parkshare-text-primary">{faq.question}</span>
                    <ChevronDown className={`w-5 h-5 text-parkshare-text-secondary transition-transform ${openFaq === index ? 'rotate-180' : ''}`} />
                  </button>
                  {openFaq === index && (
                    <div className="px-5 pb-5">
                      <p className="text-parkshare-text-secondary">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact */}
      <section className="section-padding bg-parkshare-bg-secondary">
        <div className="max-w-3xl mx-auto px-4 sm:px-7 lg:px-10">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="bg-accent rounded-card p-8 text-center">
            <div className="w-16 h-16 rounded-2xl bg-white/20 flex items-center justify-center mx-auto mb-4">
              <Mail className="w-8 h-8 text-white" />
            </div>
            <h2 className="font-display font-bold text-2xl text-white mb-2">Need Help?</h2>
            <p className="text-white/80 mb-4">If you experience issues with bookings, payments, or accounts, please contact our support team.</p>
            <a href="mailto:support@parkshare.com" className="inline-flex items-center gap-2 px-6 py-3 bg-white text-accent rounded-xl font-medium hover:bg-white/90 transition-colors">
              <Mail className="w-5 h-5" />
              support@parkshare.com
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default HelpCenter;
