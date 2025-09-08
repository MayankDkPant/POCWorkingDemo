import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import bgImage from "../../assets/images/SignIn_BackgroundImage.jpeg"; // adjust relative path

interface SignInScreenProps {
  onSignIn: () => void;
}

export function SignInScreen({ onSignIn }: SignInScreenProps) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white flex flex-col">
      {/* Header with city image */}
      <div className="relative h-48 overflow-hidden">
        <ImageWithFallback 
          src="https://images.unsplash.com/photo-1658316342181-1b90e17734ce?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXNpZGVudGlhbCUyMGNvbXBsYWludCUyMG1haW50ZW5hbmNlfGVufDF8fHx8MTc1NzE3MzUwMXww&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Dehradun City"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="absolute bottom-4 left-4 text-white">
          <h1 className="text-2xl font-bold">Resident Engagement Platform</h1>
          <p className="text-sm opacity-90">Connecting you to your City</p>
        </div>
      </div>

      {/* Sign in form */}
      <div className="flex-1 p-6 flex items-center justify-center">
        <Card className="w-full max-w-md">
          <CardHeader className="text-center">
            <CardTitle>Welcome Back</CardTitle>
            <CardDescription>
              Sign in to access your resident dashboard
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="phone">Phone Number</Label>
              <Input 
                id="phone" 
                type="tel" 
                placeholder="+91 98765 43210"
                className="bg-input-background"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input 
                id="password" 
                type="password"
                className="bg-input-background"
              />
            </div>
            <Button 
              onClick={onSignIn}
              className="w-full bg-blue-600 hover:bg-blue-700"
            >
              Sign In
            </Button>
            <div className="text-center">
              <Button variant="link" className="text-sm">
                Forgot Password?
              </Button>
            </div>
            <div className="text-center text-sm text-muted-foreground">
              Sign Up
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}