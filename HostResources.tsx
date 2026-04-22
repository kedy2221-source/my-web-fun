import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Car, Calendar, MessageSquare, Star, 
  TrendingUp, Clock, ChevronRight, Plus,
  Home, DollarSign
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const Dashboard = () => {
  const userType = 'both'; // 'driver', 'host', or 'both'

  const stats = {
    driver: [
      { label: 'Total bookings', value: '24', icon: <Calendar className="w-5 h-5" /> },
      { label: 'Money saved', value: '$342', icon: <DollarSign className="w-5 h-5" /> },
      { label: 'Favorite spots', value: '8', icon: <Star className="w-5 h-5" /> },
      { label: 'Hours parked', value: '156', icon: <Clock className="w-5 h-5" /> }
    ],
    host: [
      { label: 'Total earnings', value: '$1,284', icon: <DollarSign className="w-5 h-5" /> },
      { label: 'Active listings', value: '2', icon: <Home className="w-5 h-5" /> },
      { label: 'Total bookings', value: '47', icon: <Calendar className="w-5 h-5" /> },
      { label: 'Rating', value: '4.9', icon: <Star className="w-5 h-5" /> }
    ]
  };

  const upcomingBookings = [
    { id: 1, spot: '123 Main Street', date: 'Today', time: '2:00 PM - 6:00 PM', status: 'active', price: '$12' },
    { id: 2, spot: '456 Oak Avenue', date: 'Tomorrow', time: '9:00 AM - 5:00 PM', status: 'confirmed', price: '$15' },
    { id: 3, spot: '789 Pine Road', date: 'Dec 28', time: '10:00 AM - 2:00 PM', status: 'confirmed', price: '$10' }
  ];

  const recentActivity = [
    { id: 1, type: 'booking', message: 'New booking for 123 Main Street', time: '2 hours ago', amount: '+$12' },
    { id: 2, type: 'review', message: 'Sarah M. left a 5-star review', time: '1 day ago' },
    { id: 3, type: 'payout', message: 'Payout of $284 processed', time: '2 days ago', amount: '+$284' },
    { id: 4, type: 'message', message: 'New message from David K.', time: '3 days ago' }
  ];

  const listings = [
    { id: 1, address: '123 Main Street', price: 12, status: 'active', bookings: 24, earnings: 288, image: '/images/host-driveway.jpg' },
    { id: 2, address: '456 Oak Avenue', price: 15, status: 'active', bookings: 18, earnings: 270, image: '/images/trust-lot.jpg' }
  ];

  return (
    <div className="min-h-screen bg-parkshare-bg-primary pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-7 lg:px-10 py-8">
        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-8">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <h1 className="font-display font-bold text-3xl text-parkshare-text-primary">Dashboard</h1>
              <p className="text-parkshare-text-secondary">Welcome back! Here&apos;s what&apos;s happening.</p>
            </div>
            <div className="flex gap-3">
              <Link to="/list-spot">
                <Button className="bg-accent hover:bg-accent-dark text-white rounded-pill">
                  <Plus className="w-4 h-4 mr-2" />
                  List a spot
                </Button>
              </Link>
              <Link to="/search">
                <Button variant="outline" className="rounded-pill border-parkshare-text-primary/20">
                  <Car className="w-4 h-4 mr-2" />
                  Find parking
                </Button>
              </Link>
            </div>
          </div>
        </motion.div>

        {/* Stats Grid */}
        {userType === 'both' || userType === 'host' ? (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="mb-8">
            <h2 className="font-display font-bold text-lg text-parkshare-text-primary mb-4">Host Stats</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {stats.host.map((stat, index) => (
                <div key={index} className="bg-parkshare-surface rounded-card p-5 shadow-card">
                  <div className="flex items-center justify-between mb-2">
                    <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center text-accent">
                      {stat.icon}
                    </div>
                    <TrendingUp className="w-4 h-4 text-parkshare-status-success" />
                  </div>
                  <div className="font-display font-bold text-2xl text-parkshare-text-primary">{stat.value}</div>
                  <div className="text-sm text-parkshare-text-secondary">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        ) : null}

        {/* Main Content Tabs */}
        <Tabs defaultValue="bookings" className="space-y-6">
          <TabsList className="bg-parkshare-surface rounded-xl p-1">
            <TabsTrigger value="bookings" className="rounded-lg">My Bookings</TabsTrigger>
            <TabsTrigger value="listings" className="rounded-lg">My Listings</TabsTrigger>
            <TabsTrigger value="activity" className="rounded-lg">Activity</TabsTrigger>
            <TabsTrigger value="messages" className="rounded-lg">Messages</TabsTrigger>
          </TabsList>

          <TabsContent value="bookings" className="space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="font-display font-bold text-xl text-parkshare-text-primary">Upcoming Bookings</h2>
              <Link to="/dashboard/bookings" className="text-accent text-sm hover:underline">View all</Link>
            </div>
            <div className="space-y-4">
              {upcomingBookings.map((booking) => (
                <div key={booking.id} className="bg-parkshare-surface rounded-card p-5 shadow-card">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center text-accent">
                        <Car className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="font-display font-bold text-lg text-parkshare-text-primary">{booking.spot}</h3>
                        <div className="flex items-center gap-3 text-sm text-parkshare-text-secondary">
                          <span className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            {booking.date}
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            {booking.time}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-display font-bold text-xl text-accent">{booking.price}</div>
                      <Badge className={booking.status === 'active' ? 'bg-parkshare-status-success/10 text-parkshare-status-success' : 'bg-accent/10 text-accent'}>
                        {booking.status}
                      </Badge>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="listings" className="space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="font-display font-bold text-xl text-parkshare-text-primary">My Listings</h2>
              <Link to="/list-spot">
                <Button size="sm" className="bg-accent hover:bg-accent-dark text-white rounded-lg">
                  <Plus className="w-4 h-4 mr-2" />
                  Add new
                </Button>
              </Link>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              {listings.map((listing) => (
                <div key={listing.id} className="bg-parkshare-surface rounded-card overflow-hidden shadow-card">
                  <img src={listing.image} alt="" className="w-full h-40 object-cover" />
                  <div className="p-5">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className="font-display font-bold text-lg text-parkshare-text-primary">{listing.address}</h3>
                        <p className="text-accent font-medium">${listing.price}/day</p>
                      </div>
                      <Badge className="bg-parkshare-status-success/10 text-parkshare-status-success">{listing.status}</Badge>
                    </div>
                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <div className="bg-parkshare-bg-primary rounded-lg p-3 text-center">
                        <div className="font-display font-bold text-lg text-parkshare-text-primary">{listing.bookings}</div>
                        <div className="text-xs text-parkshare-text-secondary">Bookings</div>
                      </div>
                      <div className="bg-parkshare-bg-primary rounded-lg p-3 text-center">
                        <div className="font-display font-bold text-lg text-accent">${listing.earnings}</div>
                        <div className="text-xs text-parkshare-text-secondary">Earned</div>
                      </div>
                    </div>
                    <Button variant="outline" className="w-full rounded-lg border-parkshare-text-primary/20">
                      Manage listing
                      <ChevronRight className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="activity" className="space-y-4">
            <h2 className="font-display font-bold text-xl text-parkshare-text-primary">Recent Activity</h2>
            <div className="bg-parkshare-surface rounded-card shadow-card divide-y divide-parkshare-text-primary/5">
              {recentActivity.map((activity) => (
                <div key={activity.id} className="p-5 flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center text-accent">
                      {activity.type === 'booking' && <Calendar className="w-5 h-5" />}
                      {activity.type === 'review' && <Star className="w-5 h-5" />}
                      {activity.type === 'payout' && <DollarSign className="w-5 h-5" />}
                      {activity.type === 'message' && <MessageSquare className="w-5 h-5" />}
                    </div>
                    <div>
                      <p className="text-parkshare-text-primary">{activity.message}</p>
                      <p className="text-sm text-parkshare-text-secondary">{activity.time}</p>
                    </div>
                  </div>
                  {activity.amount && (
                    <div className="font-display font-bold text-parkshare-status-success">{activity.amount}</div>
                  )}
                </div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="messages" className="space-y-4">
            <h2 className="font-display font-bold text-xl text-parkshare-text-primary">Messages</h2>
            <div className="bg-parkshare-surface rounded-card shadow-card">
              {[1, 2, 3].map((i) => (
                <div key={i} className="p-5 flex items-center gap-4 hover:bg-parkshare-bg-primary cursor-pointer transition-colors border-b border-parkshare-text-primary/5 last:border-0">
                  <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                    <span className="font-display font-bold text-accent">{['S', 'D', 'A'][i-1]}</span>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <h3 className="font-medium text-parkshare-text-primary">{['Sarah M.', 'David K.', 'Amanda R.'][i-1]}</h3>
                      <span className="text-sm text-parkshare-text-secondary">{['2h ago', '1d ago', '2d ago'][i-1]}</span>
                    </div>
                    <p className="text-sm text-parkshare-text-secondary truncate">
                      {['Thanks for the great parking spot!', 'Is the spot available next week?', 'Quick question about access hours...'][i-1]}
                    </p>
                  </div>
                  {i === 1 && <div className="w-2 h-2 rounded-full bg-accent" />}
                </div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Dashboard;
