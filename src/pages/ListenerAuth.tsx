import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { MailIcon, LockIcon, PhoneIcon, MapPin } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import logo from '@/assets/logo.png';
import { useAuth } from '@/contexts/AuthContext';

export function ListenerAuth() {
  const [activeTab, setActiveTab] = useState<'login' | 'signup'>('login');
  const [signupData, setSignupData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    phone: '',
    address: '',
  });
  const [loginData, setLoginData] = useState({ email: '', password: '' });
  const { login } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleLogin = () => {
    // replace with real auth call; here we simulate success
    login({ role: 'listener' });
    navigate('/listener-verification');
  };

  const handleSignup = () => {
    // replace with real signup API call; simulate success
    login({ role: 'listener' });
    navigate('/listener-verification');
  };

  return (
    <div className="min-h-screen pt-32 pb-20 bg-gradient-1">
      <div className="container mx-auto px-8 lg:px-16">
        <div className="max-w-md mx-auto">
          <div className="text-center mb-12">
            <img src={logo} alt="Heard Logo" className="h-12 mx-auto mb-6" />
            <h1 className="font-sans font-bold text-4xl text-gray-900 mb-4">Listener sign in</h1>
            <p className="text-lg text-gray-600">Sign in or create an account to apply as a listener</p>
          </div>

          <Card className="p-8 bg-card border border-border rounded-lg">
            <Tabs value={activeTab} onValueChange={(v) => setActiveTab(v as any)}>
              <TabsList className="grid w-full grid-cols-2 mb-6">
                <TabsTrigger value="login" className="text-base font-normal">Login</TabsTrigger>
                <TabsTrigger value="signup" className="text-base font-normal">Sign Up</TabsTrigger>
              </TabsList>

              <TabsContent value="login" className="space-y-4">
                <div className="space-y-4">
                  <div className="relative">
                    <MailIcon size={20} strokeWidth={1.5} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" />
                    <Input value={loginData.email} onChange={(e) => setLoginData(s => ({ ...s, email: e.target.value }))} type="email" placeholder="Email address" className="pl-12 h-12 bg-background border-border text-foreground" />
                  </div>
                  <div className="relative">
                    <LockIcon size={20} strokeWidth={1.5} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" />
                    <Input value={loginData.password} onChange={(e) => setLoginData(s => ({ ...s, password: e.target.value }))} type="password" placeholder="Password" className="pl-12 h-12 bg-background border-border text-foreground" />
                  </div>
                </div>

                <Button onClick={handleLogin} className="w-full h-12 bg-primary text-primary-foreground hover:bg-primary/90 font-normal text-base">Login</Button>
                <p className="text-center text-sm text-gray-600 pt-4 border-t border-border">This login is for listener accounts</p>
              </TabsContent>

              <TabsContent value="signup" className="space-y-4">
                <div className="space-y-4">
                  <div className="relative">
                    <MailIcon size={20} strokeWidth={1.5} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" />
                    <Input value={signupData.email} onChange={(e) => setSignupData(s => ({ ...s, email: e.target.value }))} type="email" placeholder="Email address" className="pl-12 h-12 bg-background border-border text-foreground" />
                  </div>

                  <div className="relative">
                    <LockIcon size={20} strokeWidth={1.5} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" />
                    <Input value={signupData.password} onChange={(e) => setSignupData(s => ({ ...s, password: e.target.value }))} type="password" placeholder="Password" className="pl-12 h-12 bg-background border-border text-foreground" />
                  </div>

                  <div className="relative">
                    <LockIcon size={20} strokeWidth={1.5} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" />
                    <Input value={signupData.confirmPassword} onChange={(e) => setSignupData(s => ({ ...s, confirmPassword: e.target.value }))} type="password" placeholder="Confirm password" className="pl-12 h-12 bg-background border-border text-foreground" />
                  </div>

                  <div className="relative">
                    <PhoneIcon size={20} strokeWidth={1.5} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" />
                    <Input value={signupData.phone} onChange={(e) => setSignupData(s => ({ ...s, phone: e.target.value }))} type="tel" placeholder="Phone number" className="pl-12 h-12 bg-background border-border text-foreground" />
                  </div>

                  <div className="relative">
                    <MapPin size={20} strokeWidth={1.5} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" />
                    <Input value={signupData.address} onChange={(e) => setSignupData(s => ({ ...s, address: e.target.value }))} type="text" placeholder="Address" className="pl-12 h-12 bg-background border-border text-foreground" />
                  </div>
                </div>

                <Button onClick={handleSignup} className="w-full h-12 bg-primary text-primary-foreground hover:bg-primary/90 font-normal text-base">Sign Up</Button>
                <p className="text-center text-sm text-gray-600 pt-4 border-t border-border">We will review your application and verify your details before you can accept calls</p>
              </TabsContent>
            </Tabs>
          </Card>
        </div>
      </div>
    </div>
  );
}
