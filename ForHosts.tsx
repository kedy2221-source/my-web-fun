import { motion } from 'framer-motion';
import { useState } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock, Star, Shield, CheckCircle, CreditCard, ChevronRight, User, MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';

const Booking = () => {
  const { id: _spotId } = useParams();
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [date, setDate] = useState('');
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');

  const spot = {
    id: 1,
    address: '123 Main Street',
    city: 'Downtown',
    price: 12,
    rating: 4.9,
    reviews: 24,
    distance: '0.3 km',
    image: '/images/host-driveway.jpg',
    features: ['Covered', 'Security camera', '24/7 access'],
    host: { name: 'Sarah M.', image: null, verified: true, response: 'Usually responds in 10 min' }
  };

  const handleNext = () => {
    if (step < 3) {
      setStep(step + 1);
    } else {
      navigate('/dashboard');
    }
  };

  const calculateTotal = () => {
    const hours = 4; // Mock calculation
    return spot.price * (hours / 24) || spot.price;
  };

  const serviceFee = calculateTotal() * 0.3;
  const total = calculateTotal() + serviceFee;

  return (
    <div className="min-h-screen bg-parkshare-bg-primary pt-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-7 lg:px-10 py-8">
        {/* Header */}
        <div className="flex items-center gap-4 mb-8">
          <Link to="/search" className="p-2 hover:bg-parkshare-bg-secondary rounded-lg transition-colors">
            <ArrowLeft className="w-5 h-5" />
          </Link>
          <div className="flex-1">
            <div className="flex items-center justify-between">
              <h1 className="font-display font-bold text-2xl text-parkshare-text-primary">
                {step === 1 && 'Select date & time'}
                {step === 2 && 'Review & confirm'}
                {step === 3 && 'Payment'}
              </h1>
              <span className="text-sm text-parkshare-text-secondary">Step {step} of 3</span>
            </div>
            <div className="h-2 bg-parkshare-bg-secondary rounded-full overflow-hidden mt-2">
              <div className="h-full bg-accent transition-all duration-300" style={{ width: `${(step / 3) * 100}%` }} />
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <motion.div 
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }}
              key={step}
              className="bg-parkshare-surface rounded-card p-6 shadow-card"
            >
              {step === 1 && (
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-parkshare-text-secondary mb-2">Date</label>
                    <div className="relative">
                      <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-parkshare-text-secondary" />
                      <Input 
                        type="date" 
                        className="pl-12 h-14 rounded-xl"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-parkshare-text-secondary mb-2">Start time</label>
                      <div className="relative">
                        <Clock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-parkshare-text-secondary" />
                        <Input 
                          type="time" 
                          className="pl-12 h-14 rounded-xl"
                          value={startTime}
                          onChange={(e) => setStartTime(e.target.value)}
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-parkshare-text-secondary mb-2">End time</label>
                      <div className="relative">
                        <Clock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-parkshare-text-secondary" />
                        <Input 
                          type="time" 
                          className="pl-12 h-14 rounded-xl"
                          value={endTime}
                          onChange={(e) => setEndTime(e.target.value)}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="bg-parkshare-bg-primary rounded-xl p-4">
                    <h3 className="font-medium text-parkshare-text-primary mb-3">Available time slots</h3>
                    <div className="flex flex-wrap gap-2">
                      {['6:00 AM', '8:00 AM', '10:00 AM', '12:00 PM', '2:00 PM', '4:00 PM', '6:00 PM'].map((time) => (
                        <button 
                          key={time}
                          onClick={() => setStartTime(time)}
                          className="px-4 py-2 rounded-lg bg-parkshare-surface border border-parkshare-text-primary/10 hover:border-accent hover:text-accent transition-colors text-sm"
                        >
                          {time}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {step === 2 && (
                <div className="space-y-6">
                  <div className="flex items-start gap-4 p-4 bg-parkshare-bg-primary rounded-xl">
                    <img src={spot.image} alt="" className="w-24 h-24 rounded-xl object-cover" />
                    <div>
                      <h3 className="font-display font-bold text-lg text-parkshare-text-primary">{spot.address}</h3>
                      <p className="text-parkshare-text-secondary">{spot.city}</p>
                      <div className="flex items-center gap-2 mt-2">
                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        <span className="text-sm">{spot.rating} ({spot.reviews} reviews)</span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="font-medium text-parkshare-text-primary mb-3">Trip details</h3>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between p-3 bg-parkshare-bg-primary rounded-lg">
                        <div className="flex items-center gap-3">
                          <Calendar className="w-5 h-5 text-parkshare-text-secondary" />
                          <span className="text-parkshare-text-secondary">Date</span>
                        </div>
                        <span className="font-medium">{date || 'Dec 20, 2024'}</span>
                      </div>
                      <div className="flex items-center justify-between p-3 bg-parkshare-bg-primary rounded-lg">
                        <div className="flex items-center gap-3">
                          <Clock className="w-5 h-5 text-parkshare-text-secondary" />
                          <span className="text-parkshare-text-secondary">Time</span>
                        </div>
                        <span className="font-medium">{startTime || '2:00 PM'} - {endTime || '6:00 PM'}</span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="font-medium text-parkshare-text-primary mb-3">Host information</h3>
                    <div className="flex items-center gap-4 p-4 bg-parkshare-bg-primary rounded-xl">
                      <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                        <span className="font-display font-bold text-accent">{spot.host.name[0]}</span>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2">
                          <span className="font-medium text-parkshare-text-primary">{spot.host.name}</span>
                          {spot.host.verified && <Badge className="bg-parkshare-status-success/10 text-parkshare-status-success text-xs">Verified</Badge>}
                        </div>
                        <p className="text-sm text-parkshare-text-secondary">{spot.host.response}</p>
                      </div>
                      <Button variant="outline" size="sm" className="rounded-lg">
                        <MessageSquare className="w-4 h-4 mr-2" />
                        Message
                      </Button>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-4 bg-accent/10 rounded-xl">
                    <Shield className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium text-parkshare-text-primary">Cancellation policy</p>
                      <p className="text-sm text-parkshare-text-secondary">Free cancellation up to 24 hours before your reservation starts.</p>
                    </div>
                  </div>
                </div>
              )}

              {step === 3 && (
                <div className="space-y-6">
                  <div className="text-center mb-6">
                    <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center mx-auto mb-4">
                      <CreditCard className="w-8 h-8 text-accent" />
                    </div>
                    <h2 className="font-display font-bold text-2xl text-parkshare-text-primary">Payment details</h2>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-parkshare-text-secondary mb-2">Card number</label>
                      <div className="relative">
                        <CreditCard className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-parkshare-text-secondary" />
                        <Input placeholder="1234 5678 9012 3456" className="pl-12 h-14 rounded-xl" />
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-parkshare-text-secondary mb-2">Expiry</label>
                        <Input placeholder="MM/YY" className="h-14 rounded-xl" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-parkshare-text-secondary mb-2">CVC</label>
                        <Input placeholder="123" className="h-14 rounded-xl" />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-parkshare-text-secondary mb-2">Name on card</label>
                      <div className="relative">
                        <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-parkshare-text-secondary" />
                        <Input placeholder="John Doe" className="pl-12 h-14 rounded-xl" />
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-4 bg-parkshare-status-success/10 rounded-xl">
                    <CheckCircle className="w-5 h-5 text-parkshare-status-success flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium text-parkshare-text-primary">Secure payment</p>
                      <p className="text-sm text-parkshare-text-secondary">Your payment is protected by our secure payment system.</p>
                    </div>
                  </div>
                </div>
              )}

              <div className="flex gap-4 mt-8">
                {step > 1 && (
                  <Button 
                    variant="outline" 
                    onClick={() => setStep(step - 1)}
                    className="flex-1 h-14 rounded-xl border-parkshare-text-primary/20"
                  >
                    Back
                  </Button>
                )}
                <Button 
                  onClick={handleNext}
                  className="flex-1 h-14 bg-accent hover:bg-accent-dark text-white rounded-xl font-semibold"
                >
                  {step === 3 ? `Pay $${total.toFixed(2)}` : 'Continue'}
                  <ChevronRight className="w-5 h-5 ml-2" />
                </Button>
              </div>
            </motion.div>
          </div>

          {/* Sidebar Summary */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 bg-parkshare-surface rounded-card p-6 shadow-card">
              <img src={spot.image} alt="" className="w-full h-40 rounded-xl object-cover mb-4" />
              <h3 className="font-display font-bold text-lg text-parkshare-text-primary">{spot.address}</h3>
              <div className="flex items-center gap-2 mt-1 mb-4">
                <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                <span className="text-sm">{spot.rating} · {spot.reviews} reviews</span>
              </div>

              <Separator className="my-4" />

              <h4 className="font-medium text-parkshare-text-primary mb-3">Price details</h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-parkshare-text-secondary">${spot.price} × 1 day</span>
                  <span>${calculateTotal().toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-parkshare-text-secondary">Service fee</span>
                  <span>${serviceFee.toFixed(2)}</span>
                </div>
                <Separator className="my-2" />
                <div className="flex justify-between font-display font-bold text-lg">
                  <span>Total</span>
                  <span className="text-accent">${total.toFixed(2)}</span>
                </div>
              </div>

              <div className="mt-6 p-4 bg-parkshare-bg-primary rounded-xl">
                <div className="flex items-center gap-2 mb-2">
                  <CheckCircle className="w-4 h-4 text-parkshare-status-success" />
                  <span className="text-sm font-medium">Free cancellation</span>
                </div>
                <p className="text-xs text-parkshare-text-secondary">Until 24 hours before check-in</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Booking;
