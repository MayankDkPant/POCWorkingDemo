import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Progress } from "./ui/progress";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import { BarChart3, Users, Clock, CheckCircle } from "lucide-react";

const activeSurveys = [
  {
    id: "S001",
    title: "Dehradun Park Renovation Project",
    description: "Share your thoughts on the proposed renovation of Rajpur Road Park",
    type: "Community Development",
    responses: 156,
    totalTarget: 200,
    deadline: "Sep 15, 2025",
    status: "Active",
    priority: "High"
  },
  {
    id: "S002", 
    title: "Traffic Management Survey",
    description: "Help us understand traffic issues in your area",
    type: "Infrastructure",
    responses: 89,
    totalTarget: 150,
    deadline: "Sep 20, 2025", 
    status: "Active",
    priority: "Medium"
  },
  {
    id: "S003",
    title: "Waste Management Feedback",
    description: "Rate the effectiveness of current garbage collection services",
    type: "Sanitation",
    responses: 134,
    totalTarget: 100,
    deadline: "Sep 10, 2025",
    status: "Completed",
    priority: "Medium"
  }
];

const quickPolls = [
  {
    id: "P001",
    question: "Should the society invest in solar panels for common areas?",
    options: ["Yes, strongly support", "Yes, but with conditions", "No, not needed", "Need more information"],
    votes: [45, 23, 8, 12],
    totalVotes: 88,
    endsIn: "2 days"
  },
  {
    id: "P002",
    question: "Preferred timing for society meetings?",
    options: ["Weekday evening", "Weekend morning", "Weekend evening", "Online only"],
    votes: [12, 34, 28, 14],
    totalVotes: 88,
    endsIn: "5 days"
  }
];

interface SurveysScreenProps {
  onBack: () => void;
}

export function SurveysScreen({ onBack }: SurveysScreenProps) {
  const getStatusColor = (status: string) => {
    switch (status) {
      case "Active":
        return "bg-green-100 text-green-800";
      case "Completed":
        return "bg-gray-100 text-gray-800";
      default:
        return "bg-blue-100 text-blue-800";
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case "Community Development":
        return "bg-purple-100 text-purple-800";
      case "Infrastructure":
        return "bg-blue-100 text-blue-800";
      case "Sanitation":
        return "bg-green-100 text-green-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm p-4">
        <div className="flex items-center gap-2 mb-2">
          <BarChart3 className="h-5 w-5 text-blue-600" />
          <h1 className="text-xl">Surveys & Feedback</h1>
        </div>
        <p className="text-sm text-muted-foreground">Share your voice on community matters</p>
      </div>

      <div className="p-4 space-y-6">
        {/* Quick Polls */}
        <div>
          <h2 className="text-lg mb-3">Quick Polls</h2>
          <div className="space-y-4">
            {quickPolls.map((poll) => (
              <Card key={poll.id} className="border-l-4 border-l-orange-500">
                <CardHeader className="pb-3">
                  <CardTitle className="text-base">{poll.question}</CardTitle>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Users className="h-3 w-3" />
                      <span>{poll.totalVotes} votes</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      <span>Ends in {poll.endsIn}</span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <RadioGroup className="space-y-3">
                    {poll.options.map((option, index) => {
                      const percentage = Math.round((poll.votes[index] / poll.totalVotes) * 100);
                      return (
                        <div key={index} className="space-y-2">
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value={`option-${index}`} id={`poll-${poll.id}-option-${index}`} />
                            <Label htmlFor={`poll-${poll.id}-option-${index}`} className="flex-1">
                              {option}
                            </Label>
                            <span className="text-sm text-muted-foreground">{percentage}%</span>
                          </div>
                          <Progress value={percentage} className="h-2" />
                        </div>
                      );
                    })}
                  </RadioGroup>
                  <Button size="sm" className="w-full mt-4 bg-blue-600 hover:bg-blue-700">
                    Submit Vote
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Active Surveys */}
        <div>
          <h2 className="text-lg mb-3">Active Surveys</h2>
          <div className="space-y-4">
            {activeSurveys.map((survey) => (
              <Card key={survey.id} className="border-l-4 border-l-blue-500">
                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <Badge className={`text-xs ${getTypeColor(survey.type)}`}>
                          {survey.type}
                        </Badge>
                        <Badge className={`text-xs ${getStatusColor(survey.status)}`}>
                          {survey.status}
                        </Badge>
                      </div>
                      <CardTitle className="text-base">{survey.title}</CardTitle>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-sm text-muted-foreground mb-4">
                    {survey.description}
                  </p>
                  
                  {survey.status === "Active" && (
                    <div className="space-y-3 mb-4">
                      <div className="flex items-center justify-between text-sm">
                        <span>Response Progress</span>
                        <span>{survey.responses}/{survey.totalTarget}</span>
                      </div>
                      <Progress 
                        value={(survey.responses / survey.totalTarget) * 100} 
                        className="h-2"
                      />
                    </div>
                  )}

                  <div className="flex items-center justify-between text-xs text-muted-foreground mb-3">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-1">
                        <Users className="h-3 w-3" />
                        <span>{survey.responses} responses</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        <span>Deadline: {survey.deadline}</span>
                      </div>
                    </div>
                  </div>

                  {survey.status === "Active" ? (
                    <Button size="sm" className="w-full bg-blue-600 hover:bg-blue-700">
                      Participate in Survey
                    </Button>
                  ) : (
                    <Button size="sm" variant="outline" className="w-full" disabled>
                      <CheckCircle className="h-3 w-3 mr-1" />
                      Survey Completed
                    </Button>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Feedback Form */}
        <div>
          <h2 className="text-lg mb-3">General Feedback</h2>
          <Card>
            <CardHeader>
              <CardTitle className="text-base">Share Your Thoughts</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="feedback-category">Category</Label>
                <select className="w-full mt-1 p-2 border border-border rounded-md bg-input-background">
                  <option>City Services</option>
                  <option>Infrastructure</option>
                  <option>Transportation</option>
                  <option>Environment</option>
                  <option>Other</option>
                </select>
              </div>
              <div>
                <Label htmlFor="feedback-text">Your Feedback</Label>
                <Textarea 
                  id="feedback-text"
                  placeholder="Tell us what you think about city services or suggest improvements..."
                  className="mt-1 bg-input-background"
                  rows={4}
                />
              </div>
              <Button className="w-full bg-blue-600 hover:bg-blue-700">
                Submit Feedback
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