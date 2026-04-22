import { motion, type Transition } from 'framer-motion';
import { CheckCircle, ChevronRight, Info } from 'lucide-react';
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

const Pricing = () => {
  const cityComparison = [
    { city: 'New York', cityRate: '$45/day', parkshareRate: '$28/day', savings: '38%' },
    { city: 'San Francisco', cityRate: '$38/day', parkshareRate: '$24/day', savings: '37%' },
    { city: 'Chicago', cityRate: '$32/day', parkshareRate: '$20/day', savings: '38%' },
    { city: 'Los Angeles', cityRate: '$28/day', parkshareRate: '$18/day', savings: '36%' },
    { city: 'Boston', cityRate: '$35/day', parkshareRate: '$22/day', savings: '37%' },
    { city: 'Seattle', cityRate: '$30/day', parkshareRate: '$19/day', savings: '37%' }
  ];

  const subscriptionPlans = [
    {
      name: 'Occasional',
      description: 'For occasional parkers',
      price: '$0',
      period: 'Free',
      features: [
        'Pay per booking',
        'Standard support',
        'Basic search filters',
        'Email notifications'
      ],
      cta: 'Get started',
      popular: false
    },
    {
      name: 'Regular',
      description: 'For frequent parkers',
      price: '$9.99',
      period: '/month',
      features: [
        '5% off all bookings',
        'Priority support',
        'Advanced filters',
        'Saved favorite spots',
        'Price drop alerts'
      ],
      cta: 'Start free trial',
      popular: true
    },
    {
      name: 'Unlimited',
      description: 'For daily commuters',
      price: '$19.99',
      period: '/month',
      features: [
        '10% off all bookings',
        '24/7 premium support',
        'Exclusive spots access',
        'Unlimited favorites',
        'Instant booking',
        'Monthly reports'
      ],
      cta: 'Start free trial',
      popular: false
    }
  ];

  const hostFees = [
    { label: 'Platform fee', value: '30%', desc: 'Per booking' },
    { label: 'You receive', value: '70%', desc: 'Direct deposit' },
    { label: 'Listing fee', value: '$0', desc: 'Always free' },
    { label: 'Payout time', value: '48hrs', desc: 'After booking' }
  ];

  return (
    <div className="min-h-screen bg-parkshare-bg-primary pt-16">
      {/* Hero */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-transparent" />
        <div className="max-w-7xl mx-auto px-4 sm:px-7 lg:px-10 relative z-10">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="text-center max-w-3xl mx-auto">
            <Badge className="bg-accent/10 text-accent mb-4">Pricing</Badge>
            <h1 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl text-parkshare-text-primary mb-6">
              Simple, transparent <span className="text-accent">pricing</span>
            </h1>
            <p className="text-lg text-parkshare-text-secondary mb-8">
              Save up to 38% compared to city parking rates. No hidden fees, 
              no surprises—just fair prices for everyone.
            </p>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-2xl mx-auto bg-parkshare-surface rounded-card p-8 shadow-card mt-12">
            <div className="flex items-center justify-between mb-6">
              <div>
                <div className="text-sm text-parkshare-text-secondary mb-1">City parking average</div>
                <div className="font-display font-bold text-3xl text-parkshare-text-primary line-through opacity-50">$35/day</div>
              </div>
              <div className="text-right">
                <div className="text-sm text-parkshare-text-secondary mb-1">ParkShare average</div>
                <div className="font-display font-bold text-4xl text-accent">$22/day</div>
              </div>
            </div>
            <div className="flex items-center justify-center gap-2 p-4 bg-parkshare-status-success/10 rounded-xl">
              <CheckCircle className="w-5 h-5 text-parkshare-status-success" />
              <span className="font-medium text-parkshare-status-success">Save an average of $13 per day</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* City Comparison */}
      <section className="section-padding bg-parkshare-bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-7 lg:px-10">
          <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-12">
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-parkshare-text-primary mb-4">Compare city rates</h2>
            <p className="text-parkshare-text-secondary max-w-xl mx-auto">See how much you can save in major cities</p>
          </motion.div>

          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {cityComparison.map((city, index) => (
              <motion.div key={index} variants={fadeInUp} className="bg-parkshare-surface rounded-card p-6 shadow-card">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-display font-bold text-lg text-parkshare-text-primary">{city.city}</h3>
                  <Badge className="bg-parkshare-status-success/10 text-parkshare-status-success">Save {city.savings}</Badge>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-parkshare-text-secondary">City rate</span>
                    <span className="text-parkshare-text-primary line-through">{city.cityRate}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-parkshare-text-secondary">ParkShare</span>
                    <span className="font-display font-bold text-accent">{city.parkshareRate}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Subscription Plans */}
      <section className="section-padding bg-parkshare-bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-7 lg:px-10">
          <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-12">
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-parkshare-text-primary mb-4">Driver subscription plans</h2>
            <p className="text-parkshare-text-secondary max-w-xl mx-auto">Choose the plan that fits your parking needs</p>
          </motion.div>

          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid md:grid-cols-3 gap-6">
            {subscriptionPlans.map((plan, index) => (
              <motion.div key={index} variants={fadeInUp} className={`bg-parkshare-surface rounded-card p-8 shadow-card relative ${plan.popular ? 'ring-2 ring-accent' : ''}`}>
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <Badge className="bg-accent text-white">Most Popular</Badge>
                  </div>
                )}
                <div className="text-center mb-6">
                  <h3 className="font-display font-bold text-xl text-parkshare-text-primary mb-1">{plan.name}</h3>
                  <p className="text-sm text-parkshare-text-secondary">{plan.description}</p>
                </div>
                <div className="text-center mb-6">
                  <span className="font-display font-bold text-4xl text-parkshare-text-primary">{plan.price}</span>
                  <span className="text-parkshare-text-secondary">{plan.period}</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-center gap-2 text-sm text-parkshare-text-primary">
                      <CheckCircle className="w-4 h-4 text-parkshare-status-success flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link to="/register">
                  <Button className={`w-full rounded-xl h-12 font-semibold ${plan.popular ? 'bg-accent hover:bg-accent-dark text-white' : 'bg-parkshare-bg-primary hover:bg-parkshare-bg-secondary text-parkshare-text-primary'}`}>
                    {plan.cta}
                  </Button>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Host Fees */}
      <section className="section-padding bg-parkshare-bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-7 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <Badge className="bg-accent/10 text-accent mb-4">For Hosts</Badge>
              <h2 className="font-display font-bold text-3xl sm:text-4xl text-parkshare-text-primary mb-6">
                Keep 70% of every booking
              </h2>
              <p className="text-parkshare-text-secondary mb-6">
                We believe in fair pricing for hosts too. List your spot for free and 
                earn money with every booking. No monthly fees, no setup costs.
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  'Free to list your spot',
                  'No monthly subscription required',
                  'Get paid within 48 hours',
                  '$1M liability coverage included'
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-parkshare-status-success/10 flex items-center justify-center">
                      <CheckCircle className="w-4 h-4 text-parkshare-status-success" />
                    </div>
                    <span className="text-parkshare-text-primary">{item}</span>
                  </li>
                ))}
              </ul>
              <Link to="/list-spot">
                <Button className="bg-accent hover:bg-accent-dark text-white rounded-pill px-8 h-12 font-semibold">
                  Start earning today
                  <ChevronRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="bg-parkshare-surface rounded-card p-8 shadow-card">
              <h3 className="font-display font-bold text-xl text-parkshare-text-primary mb-6">Host fee breakdown</h3>
              <div className="space-y-4">
                {hostFees.map((fee, index) => (
                  <div key={index} className="flex justify-between items-center p-4 bg-parkshare-bg-primary rounded-xl">
                    <div>
                      <div className="font-medium text-parkshare-text-primary">{fee.label}</div>
                      <div className="text-sm text-parkshare-text-secondary">{fee.desc}</div>
                    </div>
                    <div className="font-display font-bold text-xl text-accent">{fee.value}</div>
                  </div>
                ))}
              </div>
              <div className="mt-6 p-4 bg-accent/10 rounded-xl flex items-start gap-3">
                <Info className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <p className="text-sm text-parkshare-text-secondary">
                  Example: For a $20 booking, you receive $14 (70%) and ParkShare keeps $6 (30%) 
                  to cover platform costs, support, and insurance.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-parkshare-bg-secondary">
        <div className="max-w-3xl mx-auto px-4 sm:px-7 lg:px-10">
          <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-12">
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-parkshare-text-primary mb-4">Frequently asked questions</h2>
          </motion.div>

          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} className="space-y-4">
            {[
              { q: 'Are there any hidden fees?', a: 'No hidden fees. The price you see is the price you pay. Hosts receive 70% and ParkShare keeps 30% to cover platform costs.' },
              { q: 'Can I cancel my subscription anytime?', a: 'Yes, you can upgrade, downgrade, or cancel your subscription at any time with no penalties.' },
              { q: 'How do I get paid as a host?', a: 'Payments are deposited directly to your linked bank account within 48 hours of each completed booking.' },
              { q: 'Is there a minimum booking duration?', a: 'Most spots have a minimum of 1 hour, but some hosts may require longer minimums. Check the listing details.' }
            ].map((faq, index) => (
              <motion.div key={index} variants={fadeInUp} className="bg-parkshare-surface rounded-card p-6 shadow-card">
                <h3 className="font-display font-bold text-lg text-parkshare-text-primary mb-2">{faq.q}</h3>
                <p className="text-parkshare-text-secondary">{faq.a}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Pricing;
