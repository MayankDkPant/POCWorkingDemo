import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Calendar, MapPin, Bell, AlertTriangle, Info, Heart } from "lucide-react";

const announcements = [
  {
    id: "A001",
    title: "Water Supply Maintenance",
    content: "Water supply will be interrupted tomorrow (Sep 7) from 9 AM to 2 PM for pipeline maintenance work. Please store water accordingly.",
    type: "Important",
    date: "Sep 6, 2025",
    time: "10:30 AM",
    author: "Society Management",
    priority: "High",
    image: "https://images.unsplash.com/photo-1547938094-b000547cbeb9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXNpZGVudGlhbCUyMGNvbXBsYWludCUyMG1haW50ZW5hbmNlfGVufDF8fHx8MTc1NzE3MzUwMXww&ixlib=rb-4.1.0&q=80&w=1080"
  },
  {
    id: "A002",
    title: "Dussehra Celebration Plans",
    content: "Join us for Dussehra celebrations on Oct 12 at the community hall. Cultural programs, food stalls, and fun activities for children. Registration open now!",
    type: "Event",
    date: "Sep 5, 2025", 
    time: "6:00 PM",
    author: "Cultural Committee",
    priority: "Medium",
    image: null
  },
  {
    id: "A003",
    title: "New Security Protocols",
    content: "Enhanced security measures now in place. All visitors must register at the main gate with valid ID. Delivery personnel will be escorted to your door.",
    type: "Notice",
    date: "Sep 4, 2025",
    time: "2:15 PM", 
    author: "Security Team",
    priority: "Medium",
    image: null
  },
  {
    id: "A004",
    title: "Maintenance Fee Due",
    content: "Monthly maintenance fees for September are now due. Please clear your dues by Sep 15 to avoid late fees. Online payment options available.",
    type: "Payment",
    date: "Sep 2, 2025",
    time: "11:00 AM",
    author: "Accounts Department",
    priority: "High",
    image: null
  },
  {
    id: "A005",
    title: "Yoga Classes Starting",
    content: "Free morning yoga sessions starting from Sep 10. Every Tuesday and Thursday at 6:30 AM in the community garden. All age groups welcome!",
    type: "Activity",
    date: "Sep 1, 2025", 
    time: "7:45 PM",
    author: "Wellness Committee",
    priority: "Low",
    image: null
  }
];

const getTypeIcon = (type: string) => {
  switch (type) {
    case "Important":
      return <AlertTriangle className="h-4 w-4 text-red-600" />;
    case "Event":
      return <Calendar className="h-4 w-4 text-purple-600" />;
    case "Activity":
      return <Heart className="h-4 w-4 text-pink-600" />;
    default:
      return <Info className="h-4 w-4 text-blue-600" />;
  }
};

const getTypeColor = (type: string) => {
  switch (type) {
    case "Important":
      return "bg-red-100 text-red-800";
    case "Event":
      return "bg-purple-100 text-purple-800";
    case "Activity":
      return "bg-pink-100 text-pink-800";
    case "Payment":
      return "bg-orange-100 text-orange-800";
    default:
      return "bg-blue-100 text-blue-800";
  }
};

const getPriorityColor = (priority: string) => {
  switch (priority) {
    case "High":
      return "border-l-red-500";
    case "Medium":
      return "border-l-yellow-500";
    default:
      return "border-l-green-500";
  }
};

interface AnnouncementsScreenProps {
  onBack: () => void;
}

export function AnnouncementsScreen({ onBack }: AnnouncementsScreenProps) {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm p-4">
        <div className="flex items-center gap-2 mb-2">
          <Bell className="h-5 w-5 text-blue-600" />
          <h1 className="text-xl">Announcements</h1>
        </div>
        <p className="text-sm text-muted-foreground">Stay updated with community news</p>
      </div>

      {/* Announcements List */}
      <div className="p-4 space-y-4">
        {announcements.map((announcement) => (
          <Card key={announcement.id} className={`border-l-4 ${getPriorityColor(announcement.priority)}`}>
            <CardHeader className="pb-3">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    {getTypeIcon(announcement.type)}
                    <Badge className={`text-xs ${getTypeColor(announcement.type)}`}>
                      {announcement.type}
                    </Badge>
                  </div>
                  <CardTitle className="text-base">{announcement.title}</CardTitle>
                </div>
              </div>
            </CardHeader>
            <CardContent className="pt-0">
              {announcement.image && (
                <div className="mb-3 rounded-lg overflow-hidden">
                  <ImageWithFallback 
                    src={announcement.image}
                    alt={announcement.title}
                    className="w-full h-40 object-cover"
                  />
                </div>
              )}
              <p className="text-sm text-muted-foreground mb-4">
                {announcement.content}
              </p>
              <div className="flex items-center justify-between text-xs text-muted-foreground">
                <div className="flex items-center gap-4">
                  <span>By {announcement.author}</span>
                  <span>{announcement.date} • {announcement.time}</span>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Bottom navigation placeholder */}
      <div className="h-20"></div>
    </div>
  );
}