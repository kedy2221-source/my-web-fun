import { motion } from 'framer-motion';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, MapPin, Camera, DollarSign, Clock, CheckCircle, Home, Car, Upload, ChevronRight, Info } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Slider } from '@/components/ui/slider';
import { Switch } from '@/components/ui/switch';

const ListSpot = () => {
  const [step, setStep] = useState(1);
  const [price, setPrice] = useState(12);
  const navigate = useNavigate();

  const handleNext = () => {
    if (step < 4) {
      setStep(step + 1);
    } else {
      navigate('/dashboard');
    }
  };

  const features = [
    'Covered parking',
    'Security camera',
    'Well-lit',
    'Gated',
    'EV charging',
    '24/7 access',
    'Handicap accessible',
    'Large vehicle friendly'
  ];

  return (
    <div className="min-h-screen bg-parkshare-bg-primary pt-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-7 lg:px-10 py-8">
        {/* Header */}
        <div className="flex items-center gap-4 mb-8">
          <Link to="/" className="p-2 hover:bg-parkshare-bg-secondary rounded-lg transition-colors">
            <ArrowLeft className="w-5 h-5" />
          </Link>
          <div className="flex-1">
            <div className="flex items-center justify-between mb-2">
              <h1 className="font-display font-bold text-2xl text-parkshare-text-primary">List your parking spot</h1>
              <span className="text-sm text-parkshare-text-secondary">Step {step} of 4</span>
            </div>
            <div className="h-2 bg-parkshare-bg-secondary rounded-full overflow-hidden">
              <div 
                className="h-full bg-accent transition-all duration-300"
                style={{ width: `${(step / 4) * 100}%` }}
              />
            </div>
          </div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }}
          key={step}
          className="bg-parkshare-surface rounded-card p-8 shadow-card"
        >
          {step === 1 && (
            <>
              <div className="text-center mb-8">
                <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-8 h-8 text-accent" />
                </div>
                <h2 className="font-display font-bold text-2xl text-parkshare-text-primary mb-2">Where is your spot?</h2>
                <p className="text-parkshare-text-secondary">Enter the address of your parking space</p>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-parkshare-text-secondary mb-2">Street address</label>
                  <div className="relative">
                    <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-parkshare-text-secondary" />
                    <Input placeholder="e.g. 123 Main Street" className="pl-12 h-14 rounded-xl" />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-parkshare-text-secondary mb-2">City</label>
                    <Input placeholder="City" className="h-14 rounded-xl" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-parkshare-text-secondary mb-2">ZIP code</label>
                    <Input placeholder="12345" className="h-14 rounded-xl" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-parkshare-text-secondary mb-2">Spot type</label>
                  <div className="grid grid-cols-3 gap-3">
                    {['Driveway', 'Garage', 'Lot'].map((type) => (
                      <button 
                        key={type}
                        className="p-4 rounded-xl border border-parkshare-text-primary/10 hover:border-accent hover:bg-accent/5 transition-colors text-center"
                      >
                        <div className="w-10 h-10 rounded-lg bg-parkshare-bg-primary flex items-center justify-center mx-auto mb-2">
                          {type === 'Driveway' && <Home className="w-5 h-5 text-parkshare-text-secondary" />}
                          {type === 'Garage' && <Car className="w-5 h-5 text-parkshare-text-secondary" />}
                          {type === 'Lot' && <MapPin className="w-5 h-5 text-parkshare-text-secondary" />}
                        </div>
                        <span className="text-sm font-medium">{type}</span>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </>
          )}

          {step === 2 && (
            <>
              <div className="text-center mb-8">
                <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center mx-auto mb-4">
                  <Camera className="w-8 h-8 text-accent" />
                </div>
                <h2 className="font-display font-bold text-2xl text-parkshare-text-primary mb-2">Add photos</h2>
                <p className="text-parkshare-text-secondary">Help drivers see what your spot looks like</p>
              </div>

              <div className="space-y-4">
                <div className="border-2 border-dashed border-parkshare-text-primary/20 rounded-card p-12 text-center hover:border-accent hover:bg-accent/5 transition-colors cursor-pointer">
                  <Upload className="w-12 h-12 text-parkshare-text-secondary mx-auto mb-4" />
                  <p className="font-medium text-parkshare-text-primary mb-2">Drag & drop photos here</p>
                  <p className="text-sm text-parkshare-text-secondary mb-4">or click to browse</p>
                  <Button variant="outline" className="rounded-pill">Select photos</Button>
                </div>
                <p className="text-sm text-parkshare-text-secondary text-center">
                  Add at least 3 photos showing different angles of your parking space
                </p>
              </div>
            </>
          )}

          {step === 3 && (
            <>
              <div className="text-center mb-8">
                <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center mx-auto mb-4">
                  <DollarSign className="w-8 h-8 text-accent" />
                </div>
                <h2 className="font-display font-bold text-2xl text-parkshare-text-primary mb-2">Set your price</h2>
                <p className="text-parkshare-text-secondary">How much do you want to charge per day?</p>
              </div>

              <div className="space-y-6">
                <div className="text-center">
                  <div className="font-display font-bold text-5xl text-accent mb-2">${price}</div>
                  <p className="text-parkshare-text-secondary">per day</p>
                </div>
                <Slider value={[price]} onValueChange={(v) => setPrice(v[0])} min={5} max={50} step={1} />
                <div className="flex justify-between text-sm text-parkshare-text-secondary">
                  <span>$5</span>
                  <span>$50</span>
                </div>

                <div className="bg-parkshare-bg-primary rounded-xl p-4">
                  <div className="flex items-center gap-3 mb-3">
                    <Info className="w-5 h-5 text-accent" />
                    <span className="font-medium text-parkshare-text-primary">Pricing suggestion</span>
                  </div>
                  <p className="text-sm text-parkshare-text-secondary">
                    Similar spots in your area charge between $10-$18 per day. 
                    We recommend ${Math.max(10, price - 2)}-${price} to stay competitive.
                  </p>
                </div>

                <div>
                  <label className="block text-sm font-medium text-parkshare-text-secondary mb-3">Features & amenities</label>
                  <div className="flex flex-wrap gap-2">
                    {features.map((feature) => (
                      <Badge 
                        key={feature} 
                        variant="outline" 
                        className="cursor-pointer hover:bg-accent hover:text-white hover:border-accent transition-colors py-2 px-3"
                      >
                        {feature}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </>
          )}

          {step === 4 && (
            <>
              <div className="text-center mb-8">
                <div className="w-16 h-16 rounded-2xl bg-parkshare-status-success/10 flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-parkshare-status-success" />
                </div>
                <h2 className="font-display font-bold text-2xl text-parkshare-text-primary mb-2">Set availability</h2>
                <p className="text-parkshare-text-secondary">When is your spot available for booking?</p>
              </div>

              <div className="space-y-6">
                <div className="grid grid-cols-7 gap-2">
                  {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day) => (
                    <button 
                      key={day}
                      className="p-3 rounded-xl bg-accent text-white text-center"
                    >
                      <div className="text-xs opacity-80">{day}</div>
                      <div className="font-medium">✓</div>
                    </button>
                  ))}
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-parkshare-text-secondary mb-2">Available from</label>
                    <div className="relative">
                      <Clock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-parkshare-text-secondary" />
                      <Input defaultValue="06:00" className="pl-12 h-14 rounded-xl" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-parkshare-text-secondary mb-2">Available until</label>
                    <div className="relative">
                      <Clock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-parkshare-text-secondary" />
                      <Input defaultValue="22:00" className="pl-12 h-14 rounded-xl" />
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between p-4 bg-parkshare-bg-primary rounded-xl">
                  <div>
                    <div className="font-medium text-parkshare-text-primary">Instant booking</div>
                    <div className="text-sm text-parkshare-text-secondary">Allow drivers to book without approval</div>
                  </div>
                  <Switch defaultChecked />
                </div>

                <div className="bg-accent/10 rounded-xl p-4">
                  <h3 className="font-display font-bold text-lg text-parkshare-text-primary mb-2">Preview your listing</h3>
                  <div className="flex items-center gap-4">
                    <div className="w-20 h-20 rounded-xl bg-parkshare-bg-secondary flex items-center justify-center">
                      <Home className="w-8 h-8 text-parkshare-text-secondary" />
                    </div>
                    <div>
                      <p className="font-medium text-parkshare-text-primary">123 Main Street</p>
                      <p className="text-accent font-display font-bold">${price}/day</p>
                      <p className="text-sm text-parkshare-text-secondary">Available 7 days/week</p>
                    </div>
                  </div>
                </div>
              </div>
            </>
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
              {step === 4 ? 'Publish listing' : 'Continue'}
              <ChevronRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ListSpot;
