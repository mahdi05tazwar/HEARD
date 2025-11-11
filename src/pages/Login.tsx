import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { MailIcon, LockIcon } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import logo from "@/assets/logo.png";
import { useAuth } from '@/contexts/AuthContext'; // <- adjust path to where AuthContext lives

export function Login() {
  const [activeTab, setActiveTab] = useState('login');
  const { login } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // simple handler that uses the AuthContext and navigates to home or conversation page
  const handleAuthSuccess = (redirectTo = '/') => {
    login();
    // after login, redirect to a conversation area or home
    navigate(redirectTo);
  };

  return (
    <div className="min-h-screen pt-32 pb-20 bg-gradient-1">
      <div className="container mx-auto px-8 lg:px-16">
        <div className="max-w-md mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <Link to="/" className="inline-block mb-8">
              <img
                src={logo}
                alt="Heard Logo"
                className="h-12"
                loading="eager"
              />
            </Link>
            <h1 className="font-sans font-bold text-4xl text-gray-900 mb-4">
              Welcome to Heard
            </h1>
            <p className="text-lg text-gray-600">
              Your safe space to be heard
            </p>
          </div>

          {/* Login/Signup Card */}
          <Card className="p-8 bg-card border border-border rounded-lg">
            <Tabs value={activeTab} onValueChange={setActiveTab}>
              <TabsList className="grid w-full grid-cols-2 mb-8">
                <TabsTrigger value="login" className="text-base font-normal">
                  Login
                </TabsTrigger>
                <TabsTrigger value="signup" className="text-base font-normal">
                  Sign Up
                </TabsTrigger>
              </TabsList>

              <TabsContent value="login" className="space-y-6">
                <div className="space-y-4">
                  <div className="relative">
                    <MailIcon
                      size={20}
                      strokeWidth={1.5}
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"
                    />
                    <Input
                      type="email"
                      placeholder="Email address"
                      className="pl-12 h-12 bg-background border-border text-foreground"
                    />
                  </div>
                  <div className="relative">
                    <LockIcon
                      size={20}
                      strokeWidth={1.5}
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"
                    />
                    <Input
                      type="password"
                      placeholder="Password"
                      className="pl-12 h-12 bg-background border-border text-foreground"
                    />
                  </div>
                </div>

                <Button
                  onClick={() => handleAuthSuccess('/')}
                  className="w-full h-12 bg-primary text-primary-foreground hover:bg-primary/90 font-normal text-base"
                >
                  Login
                </Button>

                <div className="text-center">
                  <Link
                    to="/forgot-password"
                    className="text-primary hover:text-primary/80 text-sm cursor-pointer transition-colors"
                  >
                    Forgot Password?
                  </Link>
                </div>

                <p className="text-center text-sm text-gray-600 pt-4 border-t border-border">
                  Anonymous, secure, and always confidential
                </p>
              </TabsContent>

              <TabsContent value="signup" className="space-y-6">
                <div className="space-y-4">
                  <div className="relative">
                    <MailIcon
                      size={20}
                      strokeWidth={1.5}
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"
                    />
                    <Input
                      type="email"
                      placeholder="Email address"
                      className="pl-12 h-12 bg-background border-border text-foreground"
                    />
                  </div>
                  <div className="relative">
                    <LockIcon
                      size={20}
                      strokeWidth={1.5}
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"
                    />
                    <Input
                      type="password"
                      placeholder="Password"
                      className="pl-12 h-12 bg-background border-border text-foreground"
                    />
                  </div>
                  <div className="relative">
                    <LockIcon
                      size={20}
                      strokeWidth={1.5}
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"
                    />
                    <Input
                      type="password"
                      placeholder="Confirm Password"
                      className="pl-12 h-12 bg-background border-border text-foreground"
                    />
                  </div>
                </div>

                <Button
                  onClick={() => handleAuthSuccess('/')}
                  className="w-full h-12 bg-primary text-primary-foreground hover:bg-primary/90 font-normal text-base"
                >
                  Sign Up
                </Button>

                <p className="text-center text-sm text-gray-600 pt-4 border-t border-border">
                  Anonymous, secure, and always confidential
                </p>
              </TabsContent>
            </Tabs>
          </Card>
        </div>
      </div>
    </div>
  );
}
