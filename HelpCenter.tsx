import { motion, type Transition } from 'framer-motion';
import { MapPin, Search, Clock, TrendingUp, DollarSign, Users, Lightbulb, Building2 } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

const smoothEase: Transition['ease'] = [0.22, 0.61, 0.36, 1];

const fadeInUp = {
  hidden: { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: smoothEase } }
};

const CityGuides = () => {
  const tips = [
    'Book in advance during peak hours',
    'Check availability windows carefully',
    'Allow time for arrival and departure'
  ];

  const popularAreas = [
    { name: 'City Centers', description: 'High demand, premium locations' },
    { name: 'Business Districts', description: 'Weekday availability' },
    { name: 'Transit Hubs', description: 'Near train and bus stations' }
  ];

  return (
    <div className="min-h-screen bg-parkshare-bg-primary pt-16">
      {/* Hero */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-transparent" />
        <div className="max-w-4xl mx-auto px-4 sm:px-7 lg:px-10 relative z-10">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="text-center">
            <Badge className="bg-accent/10 text-accent mb-4">Guides</Badge>
            <h1 className="font-display font-bold text-4xl sm:text-5xl text-parkshare-text-primary mb-6">
              City Guides
            </h1>
            <p className="text-lg text-parkshare-text-secondary leading-relaxed">
              ParkShare helps you navigate parking in busy urban environments.
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
                  <MapPin className="w-5 h-5 text-accent" />
                </div>
                <h2 className="font-display font-bold text-2xl text-parkshare-text-primary">How It Works in Your City</h2>
              </div>
              <p className="text-parkshare-text-secondary leading-relaxed">
                Parking availability and pricing vary by location. ParkShare provides access to private parking spaces that are often more affordable and convenient than traditional parking options.
              </p>
            </div>

            <div className="bg-parkshare-surface rounded-card p-8 shadow-card">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center">
                  <Search className="w-5 h-5 text-accent" />
                </div>
                <h2 className="font-display font-bold text-2xl text-parkshare-text-primary">Finding the Best Spots</h2>
              </div>
              <p className="text-parkshare-text-secondary leading-relaxed">
                Search by street, postal code, or city to find parking near your destination. Use filters to narrow results by price, distance, and availability.
              </p>
            </div>

            <div className="bg-parkshare-surface rounded-card p-8 shadow-card">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center">
                  <Lightbulb className="w-5 h-5 text-accent" />
                </div>
                <h2 className="font-display font-bold text-2xl text-parkshare-text-primary">Tips for Urban Parking</h2>
              </div>
              <ul className="space-y-3">
                {tips.map((tip, index) => (
                  <li key={index} className="flex items-start gap-3 text-parkshare-text-secondary">
                    <Clock className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span>{tip}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-parkshare-surface rounded-card p-8 shadow-card">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center">
                  <Building2 className="w-5 h-5 text-accent" />
                </div>
                <h2 className="font-display font-bold text-2xl text-parkshare-text-primary">Popular Areas</h2>
              </div>
              <p className="text-parkshare-text-secondary mb-4">
                City centers, business districts, and transit hubs typically have the highest demand. ParkShare helps you find alternatives nearby.
              </p>
              <div className="grid sm:grid-cols-3 gap-4">
                {popularAreas.map((area, index) => (
                  <div key={index} className="bg-parkshare-bg-primary rounded-xl p-4 text-center">
                    <div className="font-medium text-parkshare-text-primary mb-1">{area.name}</div>
                    <div className="text-sm text-parkshare-text-secondary">{area.description}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-parkshare-surface rounded-card p-8 shadow-card">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center">
                  <DollarSign className="w-5 h-5 text-accent" />
                </div>
                <h2 className="font-display font-bold text-2xl text-parkshare-text-primary">Save Money</h2>
              </div>
              <p className="text-parkshare-text-secondary leading-relaxed">
                All listings are priced competitively—typically at least 20% lower than standard city parking rates.
              </p>
              <div className="mt-4 p-4 bg-parkshare-status-success/10 rounded-xl">
                <div className="flex items-center justify-between">
                  <span className="text-parkshare-text-secondary">Average savings</span>
                  <span className="font-display font-bold text-xl text-parkshare-status-success">20-30%</span>
                </div>
              </div>
            </div>

            <div className="bg-parkshare-surface rounded-card p-8 shadow-card">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center">
                  <Users className="w-5 h-5 text-accent" />
                </div>
                <h2 className="font-display font-bold text-2xl text-parkshare-text-primary">Community Impact</h2>
              </div>
              <p className="text-parkshare-text-secondary leading-relaxed">
                By using ParkShare, you help reduce congestion and make better use of existing urban space, supporting a more efficient and connected city.
              </p>
              <div className="grid grid-cols-2 gap-4 mt-4">
                <div className="bg-parkshare-bg-primary rounded-lg p-4 text-center">
                  <TrendingUp className="w-6 h-6 text-accent mx-auto mb-2" />
                  <div className="font-medium text-parkshare-text-primary">Reduce Congestion</div>
                </div>
                <div className="bg-parkshare-bg-primary rounded-lg p-4 text-center">
                  <MapPin className="w-6 h-6 text-accent mx-auto mb-2" />
                  <div className="font-medium text-parkshare-text-primary">Better Space Use</div>
                </div>
              </div>
            </div>

          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default CityGuides;
