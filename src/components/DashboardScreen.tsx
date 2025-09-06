import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import {
  Bell,
  FileText,
  Calendar,
  Users,
  AlertTriangle,
  CheckCircle,
  Clock,
  Plus,
  MapPin,
} from "lucide-react";

const quickStats = [
  {
    title: "My Complaints",
    value: "3",
    subtitle: "1 in progress",
    icon: FileText,
    color: "text-blue-600",
    bgColor: "bg-blue-50",
  },
  {
    title: "Active Events",
    value: "4",
    subtitle: "2 upcoming",
    icon: Calendar,
    color: "text-purple-600",
    bgColor: "bg-purple-50",
  },
  {
    title: "New Announcements",
    value: "2",
    subtitle: "This week",
    icon: Bell,
    color: "text-orange-600",
    bgColor: "bg-orange-50",
  },
];

const recentActivity = [
  {
    id: "1",
    type: "complaint",
    title: "Water leakage complaint updated",
    description: "Status changed to 'In Progress'",
    time: "2 hours ago",
    icon: Clock,
    iconColor: "text-yellow-600",
  },
  {
    id: "2",
    type: "announcement",
    title: "Water supply maintenance notice",
    description: "Tomorrow's maintenance schedule announced",
    time: "5 hours ago",
    icon: Bell,
    iconColor: "text-blue-600",
  },
  {
    id: "3",
    type: "event",
    title: "Dussehra celebration registration",
    description: "85 residents registered so far",
    time: "1 day ago",
    icon: Users,
    iconColor: "text-purple-600",
  },
];

const quickActions = [
  {
    title: "New Complaint",
    description: "Report an issue",
    icon: Plus,
    color: "bg-red-600 hover:bg-red-700",
  },
  {
    title: "Check Events",
    description: "View upcoming activities",
    icon: Calendar,
    color: "bg-purple-600 hover:bg-purple-700",
  },
  {
    title: "Emergency Contact",
    description: "Security & maintenance",
    icon: AlertTriangle,
    color: "bg-orange-600 hover:bg-orange-700",
  },
];

interface DashboardScreenProps {
  onNavigate: (screen: string) => void;
}

export function DashboardScreen({
  onNavigate,
}: DashboardScreenProps) {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-4">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h1 className="text-lg">Welcome back, Mayank</h1>
            <p className="text-sm opacity-90">
              Vivek Vihar, Ballupur
            </p>
          </div>
          <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
            <span className="text-sm">MP</span>
          </div>
        </div>

        {/* Weather/Location Info */}
        <div className="flex items-center gap-2 text-sm opacity-90">
          <MapPin className="h-4 w-4" />
          <span>
            Dehradun, Uttarakhand • 24°C • Partly Cloudy
          </span>
        </div>
      </div>

      <div className="p-4 space-y-6">
        {/* Quick Stats */}
        <div className="grid grid-cols-3 gap-3">
          {quickStats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <Card key={index} className="text-center">
                <CardContent className="p-3">
                  <div
                    className={`w-8 h-8 rounded-full ${stat.bgColor} flex items-center justify-center mx-auto mb-2`}
                  >
                    <IconComponent
                      className={`h-4 w-4 ${stat.color}`}
                    />
                  </div>
                  <div className="text-lg font-semibold">
                    {stat.value}
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {stat.title}
                  </div>
                  <div className="text-xs text-muted-foreground mt-1">
                    {stat.subtitle}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Quick Actions */}
        <div>
          <h2 className="text-lg mb-3">Quick Actions</h2>
          <div className="grid grid-cols-1 gap-3">
            {quickActions.map((action, index) => {
              const IconComponent = action.icon;
              return (
                <Button
                  key={index}
                  variant="outline"
                  className="flex items-center justify-between p-4 h-auto"
                  onClick={() => {
                    if (action.title === "Check Events") {
                      onNavigate("events");
                    } else if (
                      action.title === "New Complaint"
                    ) {
                      onNavigate("myComplaints");
                    }
                  }}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-10 h-10 rounded-lg ${action.color} flex items-center justify-center`}
                    >
                      <IconComponent className="h-5 w-5 text-white" />
                    </div>
                    <div className="text-left">
                      <div className="font-medium">
                        {action.title}
                      </div>
                      <div className="text-xs text-muted-foreground">
                        {action.description}
                      </div>
                    </div>
                  </div>
                </Button>
              );
            })}
          </div>
        </div>

        {/* Recent Activity */}
        <div>
          <h2 className="text-lg mb-3">Recent Activity</h2>
          <Card>
            <CardContent className="p-0">
              {recentActivity.map((activity, index) => {
                const IconComponent = activity.icon;
                return (
                  <div
                    key={activity.id}
                    className={`p-4 flex items-start gap-3 ${
                      index !== recentActivity.length - 1
                        ? "border-b border-border"
                        : ""
                    }`}
                  >
                    <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <IconComponent
                        className={`h-4 w-4 ${activity.iconColor}`}
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium">
                        {activity.title}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {activity.description}
                      </p>
                      <p className="text-xs text-muted-foreground mt-1">
                        {activity.time}
                      </p>
                    </div>
                  </div>
                );
              })}
            </CardContent>
          </Card>
        </div>

        {/* Featured Announcement */}
        <div>
          <h2 className="text-lg mb-3">Latest Announcement</h2>
          <Card className="border-l-4 border-l-red-500">
            <CardContent className="p-4">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <AlertTriangle className="h-4 w-4 text-red-600" />
                </div>
                <div className="flex-1">
                  <h3 className="font-medium">
                    Water Supply Maintenance
                  </h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    Water supply will be interrupted tomorrow
                    from 9 AM to 2 PM
                  </p>
                  <Button
                    variant="link"
                    size="sm"
                    className="p-0 h-auto text-blue-600"
                    onClick={() => onNavigate("announcements")}
                  >
                    Read more
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Bottom navigation placeholder */}
      <div className="h-20"></div>
    </div>
  );
}