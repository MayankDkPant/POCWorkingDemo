import { useState } from "react";
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "./ui/sheet";
import { ScrollArea } from "./ui/scroll-area";
import { 
  Home, 
  FileText, 
  MessageSquare, 
  Bell, 
  Calendar,
  MoreHorizontal,
  BarChart3,
  AlertTriangle,
  CreditCard,
  Users,
  User
} from "lucide-react";

interface BottomNavigationProps {
  activeScreen: string;
  onScreenChange: (screen: string) => void;
}

export function BottomNavigation({ activeScreen, onScreenChange }: BottomNavigationProps) {
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const mainNavItems = [
    { id: "dashboard", label: "Home", icon: Home },
    { id: "myComplaints", label: "My Issues", icon: FileText },
    { id: "announcements", label: "News", icon: Bell },
    { id: "events", label: "Events", icon: Calendar },
  ];

  const moreNavItems = [
    { id: "allComplaints", label: "All Complaints", icon: MessageSquare, description: "View community issues" },
    { id: "surveys", label: "Surveys & Feedback", icon: BarChart3, description: "Participate in polls and surveys" },
    { id: "emergency", label: "Emergency & Helplines", icon: AlertTriangle, description: "Access emergency services" },
    { id: "payments", label: "Payments & Services", icon: CreditCard, description: "Pay bills and access services" },
    { id: "community", label: "Community Forum", icon: Users, description: "Connect with neighbors" },
    { id: "profile", label: "Profile & Settings", icon: User, description: "Manage your account" },
  ];

  const isMoreActive = moreNavItems.some(item => item.id === activeScreen);

  const handleMoreNavigation = (screen: string) => {
    onScreenChange(screen);
    setIsSheetOpen(false);
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-border">
      <div className="flex items-center justify-around py-2">
        {mainNavItems.map((item) => {
          const IconComponent = item.icon;
          const isActive = activeScreen === item.id;
          
          return (
            <Button
              key={item.id}
              variant="ghost"
              size="sm"
              onClick={() => onScreenChange(item.id)}
              className={`flex flex-col items-center gap-1 h-auto py-2 px-2 ${
                isActive 
                  ? "text-blue-600 bg-blue-50" 
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <IconComponent className="h-4 w-4" />
              <span className="text-xs">{item.label}</span>
            </Button>
          );
        })}
        
        {/* More Menu */}
        <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              size="sm"
              className={`flex flex-col items-center gap-1 h-auto py-2 px-2 ${
                isMoreActive 
                  ? "text-blue-600 bg-blue-50" 
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <MoreHorizontal className="h-4 w-4" />
              <span className="text-xs">More</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="bottom" className="h-[70vh] max-h-[500px]">
            <SheetHeader className="pb-4">
              <SheetTitle>More Options</SheetTitle>
            </SheetHeader>
            <ScrollArea className="h-full pr-4">
              <div className="grid grid-cols-1 gap-3">
                {moreNavItems.map((item) => {
                  const IconComponent = item.icon;
                  const isActive = activeScreen === item.id;
                  
                  return (
                    <Button
                      key={item.id}
                      variant="ghost"
                      onClick={() => handleMoreNavigation(item.id)}
                      className={`flex items-center gap-3 justify-start h-auto p-4 ${
                        isActive 
                          ? "text-blue-600 bg-blue-50" 
                          : "text-muted-foreground hover:text-foreground"
                      }`}
                    >
                      <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                        isActive ? "bg-blue-600" : "bg-gray-100"
                      }`}>
                        <IconComponent className={`h-5 w-5 ${isActive ? "text-white" : "text-gray-600"}`} />
                      </div>
                      <div className="text-left">
                        <div className="font-medium">{item.label}</div>
                        <div className="text-xs text-muted-foreground">{item.description}</div>
                      </div>
                    </Button>
                  );
                })}
              </div>
            </ScrollArea>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
}