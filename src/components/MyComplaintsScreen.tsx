import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import {
  Plus,
  Clock,
  CheckCircle,
  AlertCircle,
} from "lucide-react";

const myComplaints = [
  {
    id: "C001",
    title:
      "Garbage not collected in my neighborhood for 3 days",
    description:
      "Garbage collection trucks have not come to our lane (Vivek Vihar,Ballupur) for the past three days.",
    status: "In Progress",
    priority: "High",
    dateSubmitted: "Sep 2, 2025",
    category: "Waste Management",
  },
  {
    id: "C002",
    title: "Streetlight not working outside my house",
    description:
      "he streetlight outside House No. 45, Sector 9 (near the corner park) has not been working for the past 5 days. The area becomes very dark at night, creating safety concerns for residents, especially senior citizens and school children. It has also increased the risk of theft and stray animals roaming around in the dark.",
    status: "Resolved",
    priority: "Medium",
    dateSubmitted: "Aug 28, 2025",
    category: "Civic",
  },
  {
    id: "C003",
    title: "Drainage blockage leading to foul smell",
    description:
      "There is a drainage blockage near House No. 27, Green Park Lane, which has caused wastewater to accumulate on the street.",
    status: "Pending",
    priority: "Low",
    dateSubmitted: "Sep 1, 2025",
    category: "Sanitation",
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

interface MyComplaintsScreenProps {
  onBack: () => void;
}

export function MyComplaintsScreen({
  onBack,
}: MyComplaintsScreenProps) {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm p-4">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-xl">My Complaints</h1>
            <p className="text-sm text-muted-foreground">
              Track your submitted issues
            </p>
          </div>
          <Button
            size="sm"
            className="bg-blue-600 hover:bg-blue-700"
          >
            <Plus className="h-4 w-4 mr-1" />
            New Complaint
          </Button>
        </div>
      </div>

      {/* Complaints List */}
      <div className="p-4 space-y-4">
        {myComplaints.map((complaint) => (
          <Card
            key={complaint.id}
            className="border-l-4 border-l-blue-500"
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