import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Badge } from "./ui/badge";
import { Input } from "./ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import {
  Search,
  MapPin,
  Clock,
  CheckCircle,
  AlertCircle,
} from "lucide-react";

const allComplaints = [
  {
    id: "C105",
    title: "Garbage Collection Delayed",
    description:
      "Garbage hasn't been collected for 2 days in PremNagar",
    status: "In Progress",
    priority: "High",
    location: "Block C",
    submittedBy: "Resident (Anonymous)",
    dateSubmitted: "Sep 4, 2025",
    category: "Sanitation",
  },
  {
    id: "C104",
    title: "Mosquito breeding in GMS Road",
    description:
      "Stagnant water has collected in Sector 4 public park after recent rains. This has led to heavy mosquito breeding, which is a health hazard for nearby families.",
    status: "Pending",
    priority: "High",
    location: "Main Gate",
    submittedBy: "Resident (Anonymous)",
    dateSubmitted: "Sep 4, 2025",
    category: "Mosquito Breeding",
  },
  {
    id: "C103",
    title: "Traffic signal not working at Clock Tower",
    description:
      "The main traffic signal at Clock Tower junction has been out of order for the last two days. This is a busy crossing with heavy traffic throughout the day, and the malfunction is leading to traffic jams and accidents.",
    status: "Resolved",
    priority: "Medium",
    location: "Playground Area",
    submittedBy: "Resident (Anonymous)",
    dateSubmitted: "Sep 3, 2025",
    category: "Traffic",
  },
  {
    id: "C102",
    title: "Stray dog menace in Dalwanwala",
    description:
      "There are around 7–8 stray dogs roaming around in Vivek Colony. They chase vehicles and bark aggressively at residents, especially children walking to school early in the morning.",
    status: "In Progress",
    priority: "Low",
    location: "Community Hall",
    submittedBy: "Resident (Anonymous)",
    dateSubmitted: "Sep 1, 2025",
    category: "Animals",
  },
  {
    id: "C101",
    title:
      "Open plots being used for dumping construction debris",
    description:
      "An open plot near Shastri Nagar Block C is being used by contractors and local builders to dump construction waste.",
    status: "Pending",
    priority: "Medium",
    location: "Parking Area",
    submittedBy: "Resident (Anonymous)",
    dateSubmitted: "Aug 30, 2025",
    category: "Waste Dumping",
  },
];

const getStatusIcon = (status: string) => {
  switch (status) {
    case "Resolved":
      return <CheckCircle className="h-4 w-4 text-green-600" />;
    case "In Progress":
      return <Clock className="h-4 w-4 text-yellow-600" />;
    default:
      return <AlertCircle className="h-4 w-4 text-red-600" />;
  }
};

const getStatusColor = (status: string) => {
  switch (status) {
    case "Resolved":
      return "bg-green-100 text-green-800";
    case "In Progress":
      return "bg-yellow-100 text-yellow-800";
    default:
      return "bg-red-100 text-red-800";
  }
};

const getPriorityColor = (priority: string) => {
  switch (priority) {
    case "High":
      return "bg-red-100 text-red-800";
    case "Medium":
      return "bg-yellow-100 text-yellow-800";
    default:
      return "bg-green-100 text-green-800";
  }
};

interface AllComplaintsScreenProps {
  onBack: () => void;
}

export function AllComplaintsScreen({
  onBack,
}: AllComplaintsScreenProps) {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm p-4">
        <h1 className="text-xl mb-3">Community Complaints</h1>

        {/* Search and Filter */}
        <div className="space-y-3">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search complaints..."
              className="pl-9 bg-input-background"
            />
          </div>
          <div className="flex gap-2">
            <Select defaultValue="all">
              <SelectTrigger className="flex-1 bg-input-background">
                <SelectValue placeholder="Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Status</SelectItem>
                <SelectItem value="pending">Pending</SelectItem>
                <SelectItem value="progress">
                  In Progress
                </SelectItem>
                <SelectItem value="resolved">
                  Resolved
                </SelectItem>
              </SelectContent>
            </Select>
            <Select defaultValue="all">
              <SelectTrigger className="flex-1 bg-input-background">
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">
                  All Categories
                </SelectItem>
                <SelectItem value="maintenance">
                  Maintenance
                </SelectItem>
                <SelectItem value="security">
                  Security
                </SelectItem>
                <SelectItem value="sanitation">
                  Sanitation
                </SelectItem>
                <SelectItem value="parking">Parking</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>

      {/* Complaints List */}
      <div className="p-4 space-y-4">
        {allComplaints.map((complaint) => (
          <Card
            key={complaint.id}
            className="border-l-4 border-l-orange-500"
          >
            <CardHeader className="pb-3">
              <div className="flex items-start justify-between">
                <div>
                  <CardTitle className="text-base">
                    {complaint.title}
                  </CardTitle>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="text-xs text-muted-foreground">
                      #{complaint.id}
                    </span>
                    <Badge
                      variant="outline"
                      className="text-xs"
                    >
                      {complaint.category}
                    </Badge>
                  </div>
                </div>
                <div className="flex items-center gap-1">
                  {getStatusIcon(complaint.status)}
                </div>
              </div>
            </CardHeader>
            <CardContent className="pt-0">
              <p className="text-sm text-muted-foreground mb-3">
                {complaint.description}
              </p>
              <div className="flex items-center gap-2 mb-3">
                <MapPin className="h-3 w-3 text-muted-foreground" />
                <span className="text-xs text-muted-foreground">
                  {complaint.location}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Badge
                    className={`text-xs ${getStatusColor(complaint.status)}`}
                  >
                    {complaint.status}
                  </Badge>
                  <Badge
                    className={`text-xs ${getPriorityColor(complaint.priority)}`}
                  >
                    {complaint.priority}
                  </Badge>
                </div>
                <span className="text-xs text-muted-foreground">
                  {complaint.dateSubmitted}
                </span>
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