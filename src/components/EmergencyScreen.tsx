import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Alert, AlertDescription } from "./ui/alert";
import { 
  Phone, 
  Shield, 
  Flame, 
  Heart, 
  Users, 
  AlertTriangle,
  MapPin,
  Clock,
  Cloud,
  Zap
} from "lucide-react";

const emergencyContacts = [
  {
    id: "police",
    name: "Police",
    number: "100",
    localNumber: "+91-135-2621100",
    description: "For crime, theft, or security emergencies",
    icon: Shield,
    color: "bg-blue-600 hover:bg-blue-700",
    available: "24/7"
  },
  {
    id: "fire",
    name: "Fire Brigade", 
    number: "101",
    localNumber: "+91-135-2623456",
    description: "Fire emergencies and rescue operations",
    icon: Flame,
    color: "bg-red-600 hover:bg-red-700",
    available: "24/7"
  },
  {
    id: "ambulance",
    name: "Ambulance",
    number: "108",
    localNumber: "+91-135-2627890",
    description: "Medical emergencies and ambulance service",
    icon: Heart,
    color: "bg-green-600 hover:bg-green-700",
    available: "24/7"
  },
  {
    id: "women-helpline",
    name: "Women's Helpline",
    number: "1091",
    localNumber: "+91-135-2625555",
    description: "Support for women in distress",
    icon: Users,
    color: "bg-purple-600 hover:bg-purple-700",
    available: "24/7"
  }
];

const localContacts = [
  {
    name: "Dehradun District Collector",
    number: "+91-135-2715600",
    department: "Administration",
    description: "District administration and governance"
  },
  {
    name: "Traffic Police Control Room",
    number: "+91-135-2714100", 
    department: "Traffic",
    description: "Traffic violations and road safety"
  },
  {
    name: "Electricity Board Emergency",
    number: "+91-135-2719000",
    department: "Power",
    description: "Power outages and electrical emergencies"
  },
  {
    name: "Water Supply Department",
    number: "+91-135-2718500",
    department: "Water",
    description: "Water supply issues and complaints"
  }
];

const weatherAlerts = [
  {
    id: "heavy-rain",
    type: "Weather Warning",
    title: "Heavy Rainfall Expected",
    description: "Moderate to heavy rainfall predicted for next 48 hours. Avoid low-lying areas.",
    severity: "Medium",
    issued: "2 hours ago",
    validUntil: "Sep 8, 2025"
  }
];

const safetyTips = [
  "Keep emergency numbers saved in your phone",
  "Know the quickest route to the nearest hospital",
  "Keep a first aid kit at home",
  "Have backup power sources during monsoon",
  "Store extra water during summer months"
];

interface EmergencyScreenProps {
  onBack: () => void;
}

export function EmergencyScreen({ onBack }: EmergencyScreenProps) {
  const handleEmergencyCall = (number: string) => {
    // In a real app, this would initiate a call
    alert(`Calling ${number}...`);
  };

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case "High":
        return "bg-red-100 text-red-800 border-red-200";
      case "Medium":
        return "bg-yellow-100 text-yellow-800 border-yellow-200";
      default:
        return "bg-blue-100 text-blue-800 border-blue-200";
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-red-600 text-white p-4">
        <div className="flex items-center gap-2 mb-2">
          <AlertTriangle className="h-5 w-5" />
          <h1 className="text-xl">Emergency & Helplines</h1>
        </div>
        <p className="text-sm opacity-90">Quick access to emergency services</p>
      </div>

      <div className="p-4 space-y-6">
        {/* Weather Alerts */}
        {weatherAlerts.length > 0 && (
          <div>
            <h2 className="text-lg mb-3 flex items-center gap-2">
              <Cloud className="h-4 w-4 text-blue-600" />
              Active Alerts
            </h2>
            <div className="space-y-3">
              {weatherAlerts.map((alert) => (
                <Alert key={alert.id} className={getSeverityColor(alert.severity)}>
                  <AlertTriangle className="h-4 w-4" />
                  <AlertDescription>
                    <div className="flex items-start justify-between">
                      <div>
                        <div className="font-medium">{alert.title}</div>
                        <div className="text-sm mt-1">{alert.description}</div>
                        <div className="text-xs mt-2 opacity-75">
                          Valid until {alert.validUntil} • Issued {alert.issued}
                        </div>
                      </div>
                      <Badge variant="outline" className="text-xs">
                        {alert.type}
                      </Badge>
                    </div>
                  </AlertDescription>
                </Alert>
              ))}
            </div>
          </div>
        )}

        {/* Emergency Contacts */}
        <div>
          <h2 className="text-lg mb-3">Emergency Numbers</h2>
          <div className="grid grid-cols-1 gap-3">
            {emergencyContacts.map((contact) => {
              const IconComponent = contact.icon;
              return (
                <Card key={contact.id} className="border-l-4 border-l-red-500">
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className={`w-12 h-12 rounded-full ${contact.color} flex items-center justify-center`}>
                          <IconComponent className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <h3 className="font-medium">{contact.name}</h3>
                          <p className="text-sm text-muted-foreground">{contact.description}</p>
                          <div className="text-xs text-muted-foreground mt-1">
                            Available {contact.available}
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <Button
                          size="sm"
                          onClick={() => handleEmergencyCall(contact.number)}
                          className={contact.color}
                        >
                          <Phone className="h-4 w-4 mr-1" />
                          {contact.number}
                        </Button>
                        <div className="text-xs text-muted-foreground mt-1">
                          {contact.localNumber}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Local Department Contacts */}
        <div>
          <h2 className="text-lg mb-3">Local Department Contacts</h2>
          <Card>
            <CardContent className="p-0">
              {localContacts.map((contact, index) => (
                <div 
                  key={index}
                  className={`p-4 flex items-center justify-between ${
                    index !== localContacts.length - 1 ? "border-b border-border" : ""
                  }`}
                >
                  <div className="flex-1">
                    <h4 className="font-medium">{contact.name}</h4>
                    <p className="text-sm text-muted-foreground">{contact.description}</p>
                    <Badge variant="outline" className="text-xs mt-1">
                      {contact.department}
                    </Badge>
                  </div>
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => handleEmergencyCall(contact.number)}
                  >
                    <Phone className="h-3 w-3 mr-1" />
                    Call
                  </Button>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        {/* Safety Tips */}
        <div>
          <h2 className="text-lg mb-3">Safety Tips</h2>
          <Card>
            <CardHeader>
              <CardTitle className="text-base">Emergency Preparedness</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {safetyTips.map((tip, index) => (
                  <li key={index} className="flex items-start gap-2 text-sm">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-2 flex-shrink-0"></div>
                    <span>{tip}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* My Location */}
        <div>
          <h2 className="text-lg mb-3">Current Location</h2>
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <MapPin className="h-5 w-5 text-blue-600" />
                <div>
                  <div className="font-medium">Rajpur Road, Dehradun</div>
                  <div className="text-sm text-muted-foreground">
                    Nearest Hospital: Doon Hospital (2.3 km)
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Nearest Police Station: Rajpur Road Police Station (1.8 km)
                  </div>
                </div>
              </div>
              <Button variant="outline" size="sm" className="w-full mt-3">
                Share Location with Emergency Services
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Bottom navigation placeholder */}
      <div className="h-20"></div>
    </div>
  );
}