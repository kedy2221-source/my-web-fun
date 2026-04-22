import { motion, type Transition } from 'framer-motion';
import { Car, Users, Shield, Globe, Mail, Target, Lightbulb } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

const smoothEase: Transition['ease'] = [0.22, 0.61, 0.36, 1];

const fadeInUp = {
  hidden: { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: smoothEase } }
};

const About = () => {
  return (
    <div className="min-h-screen bg-parkshare-bg-primary pt-16">
      {/* Hero */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-transparent" />
        <div className="max-w-4xl mx-auto px-4 sm:px-7 lg:px-10 relative z-10">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="text-center">
            <Badge className="bg-accent/10 text-accent mb-4">About Us</Badge>
            <h1 className="font-display font-bold text-4xl sm:text-5xl text-parkshare-text-primary mb-6">
              About ParkShare
            </h1>
            <p className="text-lg text-parkshare-text-secondary leading-relaxed">
              ParkShare is a digital platform and social enterprise designed to solve one of the most persistent challenges in urban life: access to affordable, reliable parking.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding bg-parkshare-bg-primary">
        <div className="max-w-3xl mx-auto px-4 sm:px-7 lg:px-10">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="space-y-12">
            
            {/* Founder */}
            <div className="bg-parkshare-surface rounded-card p-8 shadow-card">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center">
                  <Lightbulb className="w-5 h-5 text-accent" />
                </div>
                <h2 className="font-display font-bold text-2xl text-parkshare-text-primary">Our Story</h2>
              </div>
              <p className="text-parkshare-text-secondary leading-relaxed">
                Founded by Keiday Ali, ParkShare was created to rethink how cities use space—by transforming underutilized private parking into accessible, community-driven solutions. In many cities, parking shortages create daily stress for commuters, while countless private parking spaces remain unused for large portions of the day. ParkShare bridges this gap.
              </p>
            </div>

            {/* Mission */}
            <div className="bg-parkshare-surface rounded-card p-8 shadow-card">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center">
                  <Target className="w-5 h-5 text-accent" />
                </div>
                <h2 className="font-display font-bold text-2xl text-parkshare-text-primary">Our Mission</h2>
              </div>
              <p className="text-parkshare-text-secondary leading-relaxed">
                Our mission is to make urban parking more efficient, affordable, and community-oriented by connecting people who have unused parking spaces with those who need them.
              </p>
            </div>

            {/* What We Do */}
            <div className="bg-parkshare-surface rounded-card p-8 shadow-card">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center">
                  <Car className="w-5 h-5 text-accent" />
                </div>
                <h2 className="font-display font-bold text-2xl text-parkshare-text-primary">What We Do</h2>
              </div>
              <p className="text-parkshare-text-secondary mb-4">ParkShare enables individuals to:</p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start gap-2 text-parkshare-text-secondary">
                  <span className="text-accent">•</span>
                  Find affordable parking within their desired location
                </li>
                <li className="flex items-start gap-2 text-parkshare-text-secondary">
                  <span className="text-accent">•</span>
                  Book short-term (starting at 8 hours) or long-term parking options
                </li>
                <li className="flex items-start gap-2 text-parkshare-text-secondary">
                  <span className="text-accent">•</span>
                  Access parking that is typically priced at least 20% lower than standard city rates
                </li>
              </ul>
              <p className="text-parkshare-text-secondary mb-4">At the same time, we empower homeowners and private parking space owners to:</p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2 text-parkshare-text-secondary">
                  <span className="text-accent">•</span>
                  List and rent out their unused parking spaces
                </li>
                <li className="flex items-start gap-2 text-parkshare-text-secondary">
                  <span className="text-accent">•</span>
                  Generate additional income
                </li>
                <li className="flex items-start gap-2 text-parkshare-text-secondary">
                  <span className="text-accent">•</span>
                  Participate in a shared urban solution
                </li>
              </ul>
            </div>

            {/* Social Enterprise */}
            <div className="bg-parkshare-surface rounded-card p-8 shadow-card">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center">
                  <Globe className="w-5 h-5 text-accent" />
                </div>
                <h2 className="font-display font-bold text-2xl text-parkshare-text-primary">A Social Enterprise Approach</h2>
              </div>
              <p className="text-parkshare-text-secondary mb-4">ParkShare is more than a marketplace—it is a social enterprise rooted in inclusion, access, and efficiency. The platform is designed to:</p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2 text-parkshare-text-secondary">
                  <span className="text-accent">•</span>
                  Reduce urban congestion
                </li>
                <li className="flex items-start gap-2 text-parkshare-text-secondary">
                  <span className="text-accent">•</span>
                  Improve access to workplaces for commuters
                </li>
                <li className="flex items-start gap-2 text-parkshare-text-secondary">
                  <span className="text-accent">•</span>
                  Support individuals who struggle with high parking costs
                </li>
                <li className="flex items-start gap-2 text-parkshare-text-secondary">
                  <span className="text-accent">•</span>
                  Encourage more sustainable and collaborative use of city infrastructure
                </li>
              </ul>
            </div>

            {/* Trust & Safety */}
            <div className="bg-parkshare-surface rounded-card p-8 shadow-card">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center">
                  <Shield className="w-5 h-5 text-accent" />
                </div>
                <h2 className="font-display font-bold text-2xl text-parkshare-text-primary">Trust, Safety, and Community</h2>
              </div>
              <p className="text-parkshare-text-secondary leading-relaxed">
                To ensure a secure and reliable experience, all users are required to complete a verified profile, including identity confirmation. ParkShare integrates safety measures such as user verification systems and smart monitoring technologies to build trust across the platform.
              </p>
            </div>

            {/* Founder Vision */}
            <div className="bg-parkshare-surface rounded-card p-8 shadow-card">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center">
                  <Users className="w-5 h-5 text-accent" />
                </div>
                <h2 className="font-display font-bold text-2xl text-parkshare-text-primary">Founder Vision</h2>
              </div>
              <p className="text-parkshare-text-secondary leading-relaxed">
                ParkShare was founded with the belief that technology can be used not only to create convenience, but to solve real-world challenges in ways that strengthen communities. By combining research, innovation, and practical solutions, ParkShare aims to redefine how cities manage parking—making it more equitable, accessible, and efficient for everyone.
              </p>
            </div>

            {/* Looking Ahead */}
            <div className="bg-parkshare-surface rounded-card p-8 shadow-card">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center">
                  <Globe className="w-5 h-5 text-accent" />
                </div>
                <h2 className="font-display font-bold text-2xl text-parkshare-text-primary">Looking Ahead</h2>
              </div>
              <p className="text-parkshare-text-secondary leading-relaxed mb-6">
                As ParkShare grows, we aim to expand across cities, continuously improving how urban space is shared and experienced. Our long-term vision is to contribute to smarter, more connected cities where resources are used more efficiently and communities are brought closer together.
              </p>
              <div className="flex items-center gap-2 p-4 bg-parkshare-bg-primary rounded-xl">
                <Mail className="w-5 h-5 text-accent" />
                <span className="text-parkshare-text-secondary">For inquiries, partnerships, or collaborations:</span>
                <a href="mailto:hello@parkshare.com" className="text-accent hover:underline">hello@parkshare.com</a>
              </div>
            </div>

          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;
