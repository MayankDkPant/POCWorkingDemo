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
  Calendar,
  MapPin,
  Clock,
  Users,
  Star,
} from "lucide-react";

const events = [
  {
    id: "E001",
    title: "Dussehra Festival Celebration",
    description:
      "Join us for a grand celebration with cultural performances, traditional food, and fun activities for the whole family.",
    type: "Festival",
    date: "Oct 12, 2025",
    time: "6:00 PM - 10:00 PM",
    location: "Community Hall",
    organizer: "Cultural Committee",
    participants: 85,
    maxParticipants: 150,
    status: "Upcoming",
    image:
      "https://images.unsplash.com/photo-1723713297361-54ee5fa7fc99?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsb2NhbCUyMGNvbW11bml0eSUyMGV2ZW50fGVufDF8fHx8MTc1NzE3MzUwMXww&ixlib=rb-4.1.0&q=80&w=1080",
    featured: true,
  },

  {
    id: "E003",
    title: "Children's Art Competition",
    description:
      "Calling all young artists! Submit your best artwork and win exciting prizes. Theme: 'My Beautiful Dehradun'",
    type: "Competition",
    date: "Sep 20, 2025",
    time: "10:00 AM - 4:00 PM",
    location: "Activity Center",
    organizer: "Kids Club",
    participants: 18,
    maxParticipants: 50,
    status: "Registration Open",
    image: null,
    featured: false,
  },
  {
    id: "E004",
    title: "Blood Donation Camp",
    description:
      "Save lives by donating blood. Organized in partnership with Dehradun General Hospital. Light refreshments provided.",
    type: "Social Service",
    date: "Sep 25, 2025",
    time: "9:00 AM - 2:00 PM",
    location: "Community Hall",
    organizer: "Social Welfare Committee",
    participants: 12,
    maxParticipants: 100,
    status: "Registration Open",
    image: null,
    featured: false,
  },
  {
    id: "E005",
    title: "Ganesh Chaturthi Celebration",
    description:
      "Celebrated with traditional prayers, music, and delicious prasad. Thank you to everyone who participated!",
    type: "Festival",
    date: "Aug 19, 2025",
    time: "7:00 PM - 9:00 PM",
    location: "Community Hall",
    organizer: "Cultural Committee",
    participants: 120,
    maxParticipants: 120,
    status: "Completed",
    image: null,
    featured: false,
  },
  {
    id: "E002",
    title: "Morning Yoga Sessions",
    description:
      "Start your day with peaceful yoga sessions in our beautiful garden area. Suitable for all fitness levels.",
    type: "Wellness",
    date: "Sep 10, 2025",
    time: "6:30 AM - 7:30 AM",
    location: "Community Garden",
    organizer: "Wellness Committee",
    participants: 24,
    maxParticipants: 30,
    status: "Ongoing",
    image: null,
    featured: false,
  },
];

const getStatusColor = (status: string) => {
  switch (status) {
    case "Upcoming":
      return "bg-blue-100 text-blue-800";
    case "Ongoing":
      return "bg-green-100 text-green-800";
    case "Registration Open":
      return "bg-purple-100 text-purple-800";
    case "Completed":
      return "bg-gray-100 text-gray-800";
    default:
      return "bg-gray-100 text-gray-800";
  }
};

const getTypeColor = (type: string) => {
  switch (type) {
    case "Festival":
      return "bg-orange-100 text-orange-800";
    case "Wellness":
      return "bg-green-100 text-green-800";
    case "Competition":
      return "bg-purple-100 text-purple-800";
    case "Social Service":
      return "bg-red-100 text-red-800";
    default:
      return "bg-blue-100 text-blue-800";
  }
};

interface CampaignsEventsScreenProps {
  onBack: () => void;
}

export function CampaignsEventsScreen({
  onBack,
}: CampaignsEventsScreenProps) {
  const featuredEvent = events.find((event) => event.featured);
  const otherEvents = events.filter((event) => !event.featured);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm p-4">
        <div className="flex items-center gap-2 mb-2">
          <Calendar className="h-5 w-5 text-blue-600" />
          <h1 className="text-xl">Events & Campaigns</h1>
        </div>
        <p className="text-sm text-muted-foreground">
          Community activities and programs
        </p>
      </div>

      <div className="p-4 space-y-6">
        {/* Featured Event */}
        {featuredEvent && (
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Star className="h-4 w-4 text-yellow-500 fill-current" />
              <span className="text-sm">Featured Event</span>
            </div>
            <Card className="border-l-4 border-l-yellow-500 overflow-hidden">
              <div className="relative">
                <ImageWithFallback
                  src={featuredEvent.image!}
                  alt={featuredEvent.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-3 right-3">
                  <Badge
                    className={`${getStatusColor(featuredEvent.status)}`}
                  >
                    {featuredEvent.status}
                  </Badge>
                </div>
              </div>
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <Badge
                        className={`text-xs ${getTypeColor(featuredEvent.type)}`}
                      >
                        {featuredEvent.type}
                      </Badge>
                    </div>
                    <CardTitle className="text-lg">
                      {featuredEvent.title}
                    </CardTitle>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-sm text-muted-foreground mb-4">
                  {featuredEvent.description}
                </p>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2 text-sm">
                    <Calendar className="h-4 w-4 text-muted-foreground" />
                    <span>{featuredEvent.date}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Clock className="h-4 w-4 text-muted-foreground" />
                    <span>{featuredEvent.time}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <MapPin className="h-4 w-4 text-muted-foreground" />
                    <span>{featuredEvent.location}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Users className="h-4 w-4 text-muted-foreground" />
                    <span>
                      {featuredEvent.participants}/
                      {featuredEvent.maxParticipants}{" "}
                      participants
                    </span>
                  </div>
                </div>
                <Button className="w-full bg-blue-600 hover:bg-blue-700">
                  Register Now
                </Button>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Other Events */}
        <div>
          <h2 className="text-lg mb-3">All Events</h2>
          <div className="space-y-4">
            {otherEvents.map((event) => (
              <Card
                key={event.id}
                className="border-l-4 border-l-blue-500"
              >
                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between">
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <Badge
                          className={`text-xs ${getTypeColor(event.type)}`}
                        >
                          {event.type}
                        </Badge>
                        <Badge
                          className={`text-xs ${getStatusColor(event.status)}`}
                        >
                          {event.status}
                        </Badge>
                      </div>
                      <CardTitle className="text-base">
                        {event.title}
                      </CardTitle>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-sm text-muted-foreground mb-3">
                    {event.description}
                  </p>
                  <div className="grid grid-cols-2 gap-2 text-xs text-muted-foreground mb-3">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="h-3 w-3" />
                      <span>{event.location}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="h-3 w-3" />
                      <span>
                        {event.participants}/
                        {event.maxParticipants}
                      </span>
                    </div>
                  </div>
                  {event.status !== "Completed" && (
                    <Button
                      size="sm"
                      variant="outline"
                      className="w-full"
                      disabled={event.status === "Completed"}
                    >
                      {event.status === "Ongoing"
                        ? "Join Now"
                        : "Register"}
                    </Button>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom navigation placeholder */}
      <div className="h-20"></div>
    </div>
  );
}