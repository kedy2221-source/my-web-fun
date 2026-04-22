import { motion, type Transition } from 'framer-motion';
import { Shield, CheckCircle, Phone, Camera, UserCheck, MessageSquare, Star, ChevronRight } from 'lucide-react';
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

const TrustSafety = () => {
  const features = [
    {
      icon: <UserCheck className="w-8 h-8" />,
      title: 'ID Verification',
      description: 'Every user verifies their identity with government-issued ID before they can book or list a spot.',
      details: ['Government ID check', 'Phone verification', 'Email confirmation']
    },
    {
      icon: <Camera className="w-8 h-8" />,
      title: 'Photo Check-in',
      description: 'Drivers take a photo of their vehicle at arrival and departure for complete transparency.',
      details: ['Timestamped photos', 'License plate verification', 'Automated records']
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: '$1M Liability Coverage',
      description: 'Every booking includes up to $1 million in liability protection for hosts.',
      details: ['Property damage coverage', 'Theft protection', 'Legal liability']
    },
    {
      icon: <Phone className="w-8 h-8" />,
      title: '24/7 Support',
      description: 'Our support team is available around the clock to help with any issues.',
      details: ['Live chat support', 'Emergency hotline', 'Quick response times']
    }
  ];

  const stats = [
    { value: '99.8%', label: 'Successful bookings' },
    { value: '4.9/5', label: 'Average rating' },
    { value: '<2hr', label: 'Support response' },
    { value: '$0', label: 'Claims processed' }
  ];

  const testimonials = [
    { name: 'Robert M.', role: 'Host', quote: 'The verification process gave me confidence to list my driveway. Never had an issue.', rating: 5, avatar: '/images/avatar-robert.jpg' },
    { name: 'Lisa T.', role: 'Driver', quote: 'I feel safe using ParkShare. The check-in photos give me peace of mind.', rating: 5, avatar: '/images/avatar-lisa.jpg' },
    { name: 'Carlos R.', role: 'Host', quote: 'Had a question at 11pm and support answered in 10 minutes. Amazing service.', rating: 5, avatar: '/images/avatar-carlos.jpg' }
  ];

  return (
    <div className="min-h-screen bg-parkshare-bg-primary pt-16">
      {/* Hero */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-parkshare-bg-primary to-parkshare-bg-primary" />
        <div className="absolute inset-0 opacity-10">
          <img src="/images/trust-lot.jpg" alt="" className="w-full h-full object-cover" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-7 lg:px-10 relative z-10">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="text-center max-w-3xl mx-auto">
            <Badge className="bg-accent/10 text-accent mb-4">Trust & Safety</Badge>
            <h1 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl text-parkshare-text-primary mb-6">
              Your safety is our <span className="text-accent">priority</span>
            </h1>
            <p className="text-lg text-parkshare-text-secondary mb-8">
              Every feature we build starts with safety in mind. From verified users to 
              24/7 support, we&apos;ve got you covered.
            </p>
          </motion.div>

          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-12">
            {stats.map((stat, index) => (
              <motion.div key={index} variants={fadeInUp} className="bg-parkshare-surface/90 backdrop-blur-sm rounded-card p-6 text-center shadow-card">
                <div className="font-display font-bold text-3xl text-accent mb-1">{stat.value}</div>
                <div className="text-sm text-parkshare-text-secondary">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Safety Features */}
      <section className="section-padding bg-parkshare-bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-7 lg:px-10">
          <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-12">
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-parkshare-text-primary mb-4">How we keep you safe</h2>
            <p className="text-parkshare-text-secondary max-w-xl mx-auto">Multiple layers of protection for every booking</p>
          </motion.div>

          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid md:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <motion.div key={index} variants={fadeInUp} className="bg-parkshare-surface rounded-card p-8 shadow-card">
                <div className="w-16 h-16 rounded-2xl bg-accent flex items-center justify-center text-white mb-6">
                  {feature.icon}
                </div>
                <h3 className="font-display font-bold text-xl text-parkshare-text-primary mb-3">{feature.title}</h3>
                <p className="text-parkshare-text-secondary mb-6">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.details.map((detail, dIndex) => (
                    <li key={dIndex} className="flex items-center gap-2 text-sm text-parkshare-text-primary">
                      <CheckCircle className="w-4 h-4 text-parkshare-status-success" />
                      {detail}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Insurance Section */}
      <section className="section-padding bg-parkshare-bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-7 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <Badge className="bg-accent/10 text-accent mb-4">Host Protection</Badge>
              <h2 className="font-display font-bold text-3xl sm:text-4xl text-parkshare-text-primary mb-6">
                $1 million in liability coverage
              </h2>
              <p className="text-parkshare-text-secondary mb-6">
                Every booking on ParkShare includes comprehensive protection for hosts. 
                If something goes wrong, we&apos;ve got your back.
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  'Property damage protection',
                  'Theft and vandalism coverage',
                  'Legal liability protection',
                  'No deductible for approved claims'
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-parkshare-status-success/10 flex items-center justify-center">
                      <CheckCircle className="w-4 h-4 text-parkshare-status-success" />
                    </div>
                    <span className="text-parkshare-text-primary">{item}</span>
                  </li>
                ))}
              </ul>
              <Link to="/for-hosts">
                <Button className="bg-accent hover:bg-accent-dark text-white rounded-pill px-8 h-12 font-semibold">
                  Learn more about hosting
                  <ChevronRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="bg-parkshare-surface rounded-card p-8 shadow-card">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center">
                  <Shield className="w-8 h-8 text-accent" />
                </div>
                <div>
                  <div className="font-display font-bold text-2xl text-parkshare-text-primary">ParkShare Guarantee</div>
                  <div className="text-parkshare-text-secondary">Included with every booking</div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex justify-between items-center p-4 bg-parkshare-bg-primary rounded-xl">
                  <span className="text-parkshare-text-secondary">Liability coverage</span>
                  <span className="font-display font-bold text-accent">$1,000,000</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-parkshare-bg-primary rounded-xl">
                  <span className="text-parkshare-text-secondary">Property damage</span>
                  <span className="font-display font-bold text-accent">$25,000</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-parkshare-bg-primary rounded-xl">
                  <span className="text-parkshare-text-secondary">Deductible</span>
                  <span className="font-display font-bold text-parkshare-status-success">$0</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Support Section */}
      <section className="section-padding bg-parkshare-bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-7 lg:px-10">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-accent rounded-card p-12 text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2" />
            <div className="relative z-10">
              <div className="w-16 h-16 rounded-2xl bg-white/20 flex items-center justify-center mx-auto mb-6">
                <Phone className="w-8 h-8 text-white" />
              </div>
              <h2 className="font-display font-bold text-3xl text-white mb-4">24/7 Support Team</h2>
              <p className="text-white/80 mb-8 max-w-lg mx-auto">
                Have a question or need help? Our support team is available around the clock 
                to assist you with any issues.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-white text-accent hover:bg-white/90 rounded-pill px-8 h-14 font-semibold">
                  <MessageSquare className="w-5 h-5 mr-2" />
                  Start live chat
                </Button>
                <Button variant="outline" className="border-white text-white hover:bg-white/10 rounded-pill px-8 h-14 font-semibold">
                  <Phone className="w-5 h-5 mr-2" />
                  Call support
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-parkshare-bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-7 lg:px-10">
          <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-12">
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-parkshare-text-primary mb-4">Trusted by our community</h2>
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
                    <div className="text-xs text-parkshare-text-secondary">{testimonial.role}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default TrustSafety;
