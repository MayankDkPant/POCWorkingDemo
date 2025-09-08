import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Badge } from "./ui/badge";
import { toast } from "sonner@2.0.3";
import {
  ArrowLeft,
  Upload,
  MapPin,
  Plus,
  X,
  FileText,
  AlertCircle,
  Camera
} from "lucide-react";

const categories = [
  { value: "waste-management", label: "Waste Management" },
  { value: "civic", label: "Civic Infrastructure" },
  { value: "sanitation", label: "Sanitation" },
  { value: "water-supply", label: "Water Supply" },
  { value: "road-maintenance", label: "Road Maintenance" },
  { value: "drainage", label: "Drainage" },
  { value: "electricity", label: "Electricity" },
  { value: "public-safety", label: "Public Safety" },
  { value: "noise-pollution", label: "Noise Pollution" },
  { value: "other", label: "Other" }
];

const priorities = [
  { value: "low", label: "Low", color: "bg-green-100 text-green-800" },
  { value: "medium", label: "Medium", color: "bg-yellow-100 text-yellow-800" },
  { value: "high", label: "High", color: "bg-red-100 text-red-800" }
];

const dehradunAreas = [
  "Rajpur Road",
  "Saharanpur Road",
  "Clement Town",
  "Patel Nagar",
  "Race Course",
  "Ballupur",
  "Jakhan",
  "Dalanwala", 
  "Niranjanpur",
  "Kanwali",
  "Vivek Vihar",
  "Green Park",
  "Sector 7",
  "Sector 9",
  "Haridwar Road",
  "Mussoorie Road",
  "Other"
];

interface NewComplaintScreenProps {
  onBack: () => void;
  onNavigate?: (screen: string) => void;
}

export function NewComplaintScreen({ onBack, onNavigate }: NewComplaintScreenProps) {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    category: "",
    priority: "",
    area: "",
    address: "",
    landmark: "",
    contactNumber: "",
    anonymous: false
  });
  
  const [attachments, setAttachments] = useState<string[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleAddAttachment = () => {
    // Simulate file upload
    const newAttachment = `photo_${Date.now()}.jpg`;
    setAttachments(prev => [...prev, newAttachment]);
    toast.success("Photo added successfully");
  };

  const handleRemoveAttachment = (index: number) => {
    setAttachments(prev => prev.filter((_, i) => i !== index));
  };

  const handleSubmit = async () => {
    if (!formData.title || !formData.description || !formData.category || !formData.priority) {
      toast.error("Please fill in all required fields");
      return;
    }

    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    toast.success("Complaint submitted successfully! You will receive updates via SMS.");
    
    // Navigate back to My Complaints screen
    if (onNavigate) {
      onNavigate("myComplaints");
    } else {
      onBack();
    }
  };

  const getPriorityColor = (priority: string) => {
    const found = priorities.find(p => p.value === priority);
    return found ? found.color : "";
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm p-4 sticky top-0 z-10">
        <div className="flex items-center gap-3">
          <Button 
            variant="ghost" 
            size="sm" 
            onClick={onBack}
            className="p-1"
          >
            <ArrowLeft className="h-5 w-5" />
          </Button>
          <div>
            <h1 className="text-xl">Submit New Complaint</h1>
            <p className="text-sm text-muted-foreground">
              Report an issue in your area
            </p>
          </div>
        </div>
      </div>

      <div className="p-4 space-y-4">
        {/* Basic Information */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FileText className="h-5 w-5" />
              Basic Information
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label htmlFor="title">Issue Title *</Label>
              <Input
                id="title"
                placeholder="Brief description of the issue"
                value={formData.title}
                onChange={(e) => handleInputChange("title", e.target.value)}
                className="mt-1"
              />
            </div>

            <div>
              <Label htmlFor="description">Detailed Description *</Label>
              <Textarea
                id="description"
                placeholder="Provide detailed information about the issue, including when it started and how it affects you..."
                value={formData.description}
                onChange={(e) => handleInputChange("description", e.target.value)}
                className="mt-1 min-h-[100px]"
              />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <Label>Category *</Label>
                <Select value={formData.category} onValueChange={(value) => handleInputChange("category", value)}>
                  <SelectTrigger className="mt-1">
                    <SelectValue placeholder="Select category" />
                  </SelectTrigger>
                  <SelectContent>
                    {categories.map((category) => (
                      <SelectItem key={category.value} value={category.value}>
                        {category.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label>Priority *</Label>
                <Select value={formData.priority} onValueChange={(value) => handleInputChange("priority", value)}>
                  <SelectTrigger className="mt-1">
                    <SelectValue placeholder="Select priority" />
                  </SelectTrigger>
                  <SelectContent>
                    {priorities.map((priority) => (
                      <SelectItem key={priority.value} value={priority.value}>
                        <div className="flex items-center gap-2">
                          <div className={`w-2 h-2 rounded-full ${priority.color.split(' ')[0]}`}></div>
                          {priority.label}
                        </div>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            {formData.priority && (
              <Badge className={`w-fit ${getPriorityColor(formData.priority)}`}>
                {priorities.find(p => p.value === formData.priority)?.label} Priority
              </Badge>
            )}
          </CardContent>
        </Card>

        {/* Location Information */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <MapPin className="h-5 w-5" />
              Location Details
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label>Area/Locality</Label>
              <Select value={formData.area} onValueChange={(value) => handleInputChange("area", value)}>
                <SelectTrigger className="mt-1">
                  <SelectValue placeholder="Select your area" />
                </SelectTrigger>
                <SelectContent>
                  {dehradunAreas.map((area) => (
                    <SelectItem key={area} value={area.toLowerCase().replace(/\s+/g, '-')}>
                      {area}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label htmlFor="address">Full Address</Label>
              <Textarea
                id="address"
                placeholder="House/Shop No., Street, Colony name..."
                value={formData.address}
                onChange={(e) => handleInputChange("address", e.target.value)}
                className="mt-1"
                rows={2}
              />
            </div>

            <div>
              <Label htmlFor="landmark">Nearby Landmark</Label>
              <Input
                id="landmark"
                placeholder="e.g., Near Paltan Bazaar, Behind ISBT..."
                value={formData.landmark}
                onChange={(e) => handleInputChange("landmark", e.target.value)}
                className="mt-1"
              />
            </div>
          </CardContent>
        </Card>

        {/* Photo Attachments */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Camera className="h-5 w-5" />
              Photo Evidence
              <Badge variant="outline" className="text-xs ml-2">Optional</Badge>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <Button
                type="button"
                variant="outline"
                onClick={handleAddAttachment}
                className="w-full border-dashed"
              >
                <Upload className="h-4 w-4 mr-2" />
                Add Photo
              </Button>
              
              {attachments.length > 0 && (
                <div className="space-y-2">
                  {attachments.map((attachment, index) => (
                    <div key={index} className="flex items-center justify-between bg-gray-50 p-2 rounded">
                      <span className="text-sm text-muted-foreground">{attachment}</span>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => handleRemoveAttachment(index)}
                        className="h-6 w-6 p-0"
                      >
                        <X className="h-3 w-3" />
                      </Button>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </CardContent>
        </Card>

        {/* Contact Information */}
        <Card>
          <CardHeader>
            <CardTitle>Contact Information</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label htmlFor="contact">Mobile Number</Label>
              <Input
                id="contact"
                type="tel"
                placeholder="Your mobile number for updates"
                value={formData.contactNumber}
                onChange={(e) => handleInputChange("contactNumber", e.target.value)}
                className="mt-1"
              />
              <p className="text-xs text-muted-foreground mt-1">
                You'll receive SMS updates about your complaint status
              </p>
            </div>

            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                id="anonymous"
                checked={formData.anonymous}
                onChange={(e) => handleInputChange("anonymous", e.target.checked)}
                className="w-4 h-4"
              />
              <Label htmlFor="anonymous" className="text-sm">
                Submit anonymously (your personal details won't be shared)
              </Label>
            </div>
          </CardContent>
        </Card>

        {/* Important Notice */}
        <Card className="border-yellow-200 bg-yellow-50">
          <CardContent className="pt-4">
            <div className="flex gap-3">
              <AlertCircle className="h-5 w-5 text-yellow-600 flex-shrink-0 mt-0.5" />
              <div className="text-sm">
                <p className="font-medium text-yellow-800 mb-1">Important Guidelines:</p>
                <ul className="text-yellow-700 space-y-1 list-disc list-inside text-xs">
                  <li>Provide accurate information for faster resolution</li>
                  <li>For emergencies, call 112 or contact local authorities directly</li>
                  <li>You'll receive a complaint ID via SMS within 24 hours</li>
                  <li>Track your complaint status in the "My Complaints" section</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Submit Button */}
        <div className="sticky bottom-16 bg-white p-4 border-t border-gray-200 -mx-4">
          <Button
            onClick={handleSubmit}
            disabled={isSubmitting}
            className="w-full bg-blue-600 hover:bg-blue-700"
            size="lg"
          >
            {isSubmitting ? "Submitting..." : "Submit Complaint"}
          </Button>
        </div>
      </div>

      {/* Bottom navigation placeholder */}
      <div className="h-20"></div>
    </div>
  );
}