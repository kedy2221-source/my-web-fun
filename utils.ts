import { motion } from 'framer-motion';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Mail, Lock, Eye, EyeOff, Car, ArrowLeft, User, Phone, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';
// import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [step, setStep] = useState(1);
  const [userType, setUserType] = useState<'driver' | 'host'>('driver');
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    password: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (step < 3) {
      setStep(step + 1);
    } else {
      navigate('/dashboard');
    }
  };

  return (
    <div className="min-h-screen bg-parkshare-bg-primary flex">
      {/* Left Side - Image */}
      <div className="hidden lg:flex lg:w-1/2 relative">
        <img src="/images/host-driveway.jpg" alt="" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-accent/80" />
        <div className="relative z-10 flex flex-col justify-center px-16 text-white">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center">
              <Car className="w-6 h-6" />
            </div>
            <span className="font-display font-bold text-2xl">ParkShare</span>
          </div>
          <h2 className="font-display font-bold text-4xl mb-4">Join our community</h2>
          <p className="text-white/80 text-lg max-w-md">
            Find affordable parking or start earning from your empty space. 
            It takes less than 2 minutes to get started.
          </p>
        </div>
      </div>

      {/* Right Side - Form */}
      <div className="flex-1 flex flex-col justify-center px-6 sm:px-12 lg:px-16 py-12">
        <div className="max-w-md w-full mx-auto">
          <Link to="/" className="inline-flex items-center gap-2 text-parkshare-text-secondary hover:text-parkshare-text-primary mb-8">
            <ArrowLeft className="w-4 h-4" />
            Back to home
          </Link>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            {/* Progress Steps */}
            <div className="flex items-center justify-center gap-2 mb-8">
              {[1, 2, 3].map((s) => (
                <div key={s} className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                  s === step ? 'bg-accent text-white' : 
                  s < step ? 'bg-parkshare-status-success text-white' : 
                  'bg-parkshare-bg-secondary text-parkshare-text-secondary'
                }`}>
                  {s < step ? <CheckCircle className="w-4 h-4" /> : s}
                </div>
              ))}
            </div>

            <div className="text-center mb-8">
              <h1 className="font-display font-bold text-3xl text-parkshare-text-primary mb-2">
                {step === 1 && 'Create your account'}
                {step === 2 && 'Choose your role'}
                {step === 3 && 'Verify your phone'}
              </h1>
              <p className="text-parkshare-text-secondary">
                {step === 1 && 'Enter your details to get started'}
                {step === 2 && 'Are you looking for parking or listing a spot?'}
                {step === 3 && 'We sent a code to your phone'}
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              {step === 1 && (
                <>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-parkshare-text-secondary mb-2">First name</label>
                      <div className="relative">
                        <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-parkshare-text-secondary" />
                        <Input 
                          name="firstName"
                          placeholder="John"
                          value={formData.firstName}
                          onChange={handleChange}
                          className="pl-12 h-14 rounded-xl"
                          required
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-parkshare-text-secondary mb-2">Last name</label>
                      <Input 
                        name="lastName"
                        placeholder="Doe"
                        value={formData.lastName}
                        onChange={handleChange}
                        className="h-14 rounded-xl"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-parkshare-text-secondary mb-2">Email address</label>
                    <div className="relative">
                      <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-parkshare-text-secondary" />
                      <Input 
                        type="email"
                        name="email"
                        placeholder="you@example.com"
                        value={formData.email}
                        onChange={handleChange}
                        className="pl-12 h-14 rounded-xl"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-parkshare-text-secondary mb-2">Phone number</label>
                    <div className="relative">
                      <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-parkshare-text-secondary" />
                      <Input 
                        type="tel"
                        name="phone"
                        placeholder="(555) 123-4567"
                        value={formData.phone}
                        onChange={handleChange}
                        className="pl-12 h-14 rounded-xl"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-parkshare-text-secondary mb-2">Password</label>
                    <div className="relative">
                      <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-parkshare-text-secondary" />
                      <Input 
                        type={showPassword ? 'text' : 'password'}
                        name="password"
                        placeholder="Create a password"
                        value={formData.password}
                        onChange={handleChange}
                        className="pl-12 pr-12 h-14 rounded-xl"
                        required
                      />
                      <button 
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-4 top-1/2 -translate-y-1/2 text-parkshare-text-secondary hover:text-parkshare-text-primary"
                      >
                        {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                      </button>
                    </div>
                  </div>

                  <div className="flex items-start gap-2">
                    <input type="checkbox" className="mt-1 rounded border-parkshare-text-primary/20" required />
                    <span className="text-sm text-parkshare-text-secondary">
                      I agree to the{' '}
                      <Link to="/terms" className="text-accent hover:underline">Terms of Service</Link>
                      {' '}and{' '}
                      <Link to="/privacy" className="text-accent hover:underline">Privacy Policy</Link>
                    </span>
                  </div>
                </>
              )}

              {step === 2 && (
                <div className="space-y-4">
                  <div 
                    onClick={() => setUserType('driver')}
                    className={`p-6 rounded-card border-2 cursor-pointer transition-all ${
                      userType === 'driver' ? 'border-accent bg-accent/5' : 'border-parkshare-text-primary/10 hover:border-parkshare-text-primary/20'
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${userType === 'driver' ? 'bg-accent text-white' : 'bg-parkshare-bg-secondary text-parkshare-text-secondary'}`}>
                        <Car className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="font-display font-bold text-lg text-parkshare-text-primary">I need parking</h3>
                        <p className="text-sm text-parkshare-text-secondary">Find and book parking spots in your area</p>
                      </div>
                      {userType === 'driver' && <CheckCircle className="w-6 h-6 text-accent ml-auto" />}
                    </div>
                  </div>

                  <div 
                    onClick={() => setUserType('host')}
                    className={`p-6 rounded-card border-2 cursor-pointer transition-all ${
                      userType === 'host' ? 'border-accent bg-accent/5' : 'border-parkshare-text-primary/10 hover:border-parkshare-text-primary/20'
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${userType === 'host' ? 'bg-accent text-white' : 'bg-parkshare-bg-secondary text-parkshare-text-secondary'}`}>
                        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
                          <polyline points="9 22 9 12 15 12 15 22"/>
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-display font-bold text-lg text-parkshare-text-primary">I have a spot</h3>
                        <p className="text-sm text-parkshare-text-secondary">List your parking space and earn money</p>
                      </div>
                      {userType === 'host' && <CheckCircle className="w-6 h-6 text-accent ml-auto" />}
                    </div>
                  </div>
                </div>
              )}

              {step === 3 && (
                <div className="space-y-4">
                  <p className="text-center text-parkshare-text-secondary">
                    We sent a 6-digit code to <span className="text-parkshare-text-primary font-medium">{formData.phone || '(555) 123-4567'}</span>
                  </p>
                  <div className="flex gap-2 justify-center">
                    {[1, 2, 3, 4, 5, 6].map((i) => (
                      <Input 
                        key={i}
                        type="text"
                        maxLength={1}
                        className="w-12 h-14 text-center text-xl rounded-xl"
                      />
                    ))}
                  </div>
                  <p className="text-center text-sm text-parkshare-text-secondary">
                    Didn&apos;t receive it?{' '}
                    <button type="button" className="text-accent hover:underline">Resend code</button>
                  </p>
                </div>
              )}

              <Button type="submit" className="w-full h-14 bg-accent hover:bg-accent-dark text-white rounded-xl font-semibold text-base">
                {step === 3 ? 'Complete registration' : 'Continue'}
              </Button>
            </form>

            {step === 1 && (
              <>
                <div className="mt-6">
                  <div className="relative">
                    <div className="absolute inset-0 flex items-center">
                      <Separator />
                    </div>
                    <div className="relative flex justify-center text-sm">
                      <span className="px-2 bg-parkshare-bg-primary text-parkshare-text-secondary">Or sign up with</span>
                    </div>
                  </div>

                  <div className="mt-6 grid grid-cols-2 gap-4">
                    <button className="flex items-center justify-center gap-2 h-12 rounded-xl border border-parkshare-text-primary/10 hover:bg-parkshare-bg-secondary transition-colors">
                      <svg className="w-5 h-5" viewBox="0 0 24 24">
                        <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                        <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                        <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                        <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                      </svg>
                      Google
                    </button>
                    <button className="flex items-center justify-center gap-2 h-12 rounded-xl border border-parkshare-text-primary/10 hover:bg-parkshare-bg-secondary transition-colors">
                      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M17.05 20.28c-.98.95-2.05.88-3.08.4-1.09-.5-2.08-.48-3.24 0-1.44.62-2.2.44-3.06-.4C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.53 4.09zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
                      </svg>
                      Apple
                    </button>
                  </div>
                </div>

                <p className="mt-8 text-center text-parkshare-text-secondary">
                  Already have an account?{' '}
                  <Link to="/login" className="text-accent hover:underline font-medium">
                    Sign in
                  </Link>
                </p>
              </>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Register;
