import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Switch } from "./ui/switch";
import { Avatar, AvatarContent, AvatarFallback } from "./ui/avatar";
import { Separator } from "./ui/separator";
import { 
  User, 
  Phone, 
  Mail, 
  Home, 
  CreditCard, 
  Bell, 
  Shield, 
  Languages, 
  HelpCircle,
  LogOut,
  Edit,
  Camera,
  MapPin,
  Calendar
} from "lucide-react";

const userProfile = {
  name: "Rajesh Kumar",
  phone: "+91 98765 43210",
  email: "rajesh.kumar@email.com",
  aadhaar: "****-****-1234",
  address: "Tower A, Flat 402, Green Valley Society",
  area: "Rajpur Road, Dehradun",
  memberSince: "Jan 2022",
  verificationStatus: "Verified"
};

const notificationSettings = [
  {
    id: "complaints",
    title: "Complaint Updates",
    description: "Get notified about your complaint status changes",
    enabled: true
  },
  {
    id: "announcements", 
    title: "Announcements",
    description: "Receive important community announcements",
    enabled: true
  },
  {
    id: "events",
    title: "Events & Activities",
    description: "Updates about upcoming events and activities",
    enabled: true
  },
  {
    id: "payments",
    title: "Payment Reminders", 
    description: "Reminders for due payments and bills",
    enabled: false
  },
  {
    id: "community",
    title: "Community Forum",
    description: "Notifications from community discussions",
    enabled: false
  }
];

const languages = [
  { code: "en", name: "English", selected: true },
  { code: "hi", name: "हिंदी (Hindi)", selected: false },
  { code: "pa", name: "ਪੰਜਾਬੀ (Punjabi)", selected: false }
];

const accountStats = [
  {
    title: "Complaints Filed",
    value: "8",
    description: "3 resolved, 2 in progress"
  },
  {
    title: "Events Attended", 
    value: "12",
    description: "This year"
  },
  {
    title: "Forum Posts",
    value: "5",
    description: "Community discussions"
  }
];

interface ProfileScreenProps {
  onBack: () => void;
}

export function ProfileScreen({ onBack }: ProfileScreenProps) {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-4">
        <div className="flex items-center gap-3 mb-4">
          <div className="relative">
            <Avatar className="w-16 h-16 border-2 border-white/20">
              <AvatarFallback className="text-xl bg-white/20">
                {userProfile.name.split(' ').map(n => n[0]).join('')}
              </AvatarFallback>
            </Avatar>
            <Button 
              size="sm" 
              className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full p-0 bg-white text-blue-600 hover:bg-white/90"
            >
              <Camera className="h-3 w-3" />
            </Button>
          </div>
          <div className="flex-1">
            <h1 className="text-xl">{userProfile.name}</h1>
            <p className="text-sm opacity-90">{userProfile.address}</p>
            <div className="flex items-center gap-2 mt-1">
              <Badge className="bg-green-600 text-white text-xs">
                {userProfile.verificationStatus}
              </Badge>
              <span className="text-xs opacity-75">
                Member since {userProfile.memberSince}
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="p-4 space-y-6">
        {/* Account Stats */}
        <div className="grid grid-cols-3 gap-3">
          {accountStats.map((stat, index) => (
            <Card key={index}>
              <CardContent className="p-3 text-center">
                <div className="text-lg font-semibold">{stat.value}</div>
                <div className="text-xs text-muted-foreground">{stat.title}</div>
                <div className="text-xs text-muted-foreground mt-1">{stat.description}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Personal Information */}
        <div>
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-lg">Personal Information</h2>
            <Button variant="outline" size="sm">
              <Edit className="h-4 w-4 mr-1" />
              Edit
            </Button>
          </div>
          <Card>
            <CardContent className="p-4 space-y-4">
              <div className="flex items-center gap-3">
                <User className="h-4 w-4 text-muted-foreground" />
                <div>
                  <Label className="text-sm">Full Name</Label>
                  <div className="text-sm">{userProfile.name}</div>
                </div>
              </div>
              <Separator />
              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-muted-foreground" />
                <div>
                  <Label className="text-sm">Phone Number</Label>
                  <div className="text-sm">{userProfile.phone}</div>
                </div>
              </div>
              <Separator />
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-muted-foreground" />
                <div>
                  <Label className="text-sm">Email Address</Label>
                  <div className="text-sm">{userProfile.email}</div>
                </div>
              </div>
              <Separator />
              <div className="flex items-center gap-3">
                <CreditCard className="h-4 w-4 text-muted-foreground" />
                <div>
                  <Label className="text-sm">Aadhaar Number</Label>
                  <div className="text-sm">{userProfile.aadhaar}</div>
                </div>
              </div>
              <Separator />
              <div className="flex items-center gap-3">
                <MapPin className="h-4 w-4 text-muted-foreground" />
                <div>
                  <Label className="text-sm">Address</Label>
                  <div className="text-sm">{userProfile.address}</div>
                  <div className="text-xs text-muted-foreground">{userProfile.area}</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Language Preferences */}
        <div>
          <h2 className="text-lg mb-3">Language Preferences</h2>
          <Card>
            <CardContent className="p-4">
              <div className="space-y-3">
                {languages.map((lang) => (
                  <div key={lang.code} className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Languages className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm">{lang.name}</span>
                    </div>
                    <Switch checked={lang.selected} />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Notification Settings */}
        <div>
          <h2 className="text-lg mb-3">Notification Settings</h2>
          <Card>
            <CardContent className="p-4">
              <div className="space-y-4">
                {notificationSettings.map((setting) => (
                  <div key={setting.id}>
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-sm font-medium">{setting.title}</div>
                        <div className="text-xs text-muted-foreground">{setting.description}</div>
                      </div>
                      <Switch checked={setting.enabled} />
                    </div>
                    {setting.id !== notificationSettings[notificationSettings.length - 1].id && (
                      <Separator className="mt-4" />
                    )}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Privacy & Security */}
        <div>
          <h2 className="text-lg mb-3">Privacy & Security</h2>
          <Card>
            <CardContent className="p-4 space-y-3">
              <Button variant="ghost" className="w-full justify-start h-auto p-3">
                <Shield className="h-4 w-4 mr-3" />
                <div className="text-left">
                  <div className="text-sm font-medium">Change Password</div>
                  <div className="text-xs text-muted-foreground">Update your account password</div>
                </div>
              </Button>
              <Separator />
              <Button variant="ghost" className="w-full justify-start h-auto p-3">
                <User className="h-4 w-4 mr-3" />
                <div className="text-left">
                  <div className="text-sm font-medium">Privacy Settings</div>
                  <div className="text-xs text-muted-foreground">Control who can see your information</div>
                </div>
              </Button>
              <Separator />
              <Button variant="ghost" className="w-full justify-start h-auto p-3">
                <Shield className="h-4 w-4 mr-3" />
                <div className="text-left">
                  <div className="text-sm font-medium">Two-Factor Authentication</div>
                  <div className="text-xs text-muted-foreground">Add extra security to your account</div>
                </div>
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Support & Help */}
        <div>
          <h2 className="text-lg mb-3">Support & Help</h2>
          <Card>
            <CardContent className="p-4 space-y-3">
              <Button variant="ghost" className="w-full justify-start h-auto p-3">
                <HelpCircle className="h-4 w-4 mr-3" />
                <div className="text-left">
                  <div className="text-sm font-medium">Help Center</div>
                  <div className="text-xs text-muted-foreground">Find answers to common questions</div>
                </div>
              </Button>
              <Separator />
              <Button variant="ghost" className="w-full justify-start h-auto p-3">
                <Phone className="h-4 w-4 mr-3" />
                <div className="text-left">
                  <div className="text-sm font-medium">Contact Support</div>
                  <div className="text-xs text-muted-foreground">Get help from our support team</div>
                </div>
              </Button>
              <Separator />
              <Button variant="ghost" className="w-full justify-start h-auto p-3">
                <Mail className="h-4 w-4 mr-3" />
                <div className="text-left">
                  <div className="text-sm font-medium">Send Feedback</div>
                  <div className="text-xs text-muted-foreground">Help us improve the app</div>
                </div>
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Sign Out */}
        <Card>
          <CardContent className="p-4">
            <Button variant="ghost" className="w-full justify-start text-red-600 hover:text-red-700 hover:bg-red-50">
              <LogOut className="h-4 w-4 mr-3" />
              Sign Out
            </Button>
          </CardContent>
        </Card>

        {/* App Info */}
        <div className="text-center text-xs text-muted-foreground pb-4">
          <div>Dehradun Resident Portal v1.0.0</div>
          <div className="mt-1">© 2025 Dehradun Municipal Corporation</div>
        </div>
      </div>

      {/* Bottom navigation placeholder */}
      <div className="h-20"></div>
    </div>
  );
}