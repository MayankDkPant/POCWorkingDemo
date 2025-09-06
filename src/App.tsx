import { useState } from "react";
import { SignInScreen } from "./components/SignInScreen";
import { DashboardScreen } from "./components/DashboardScreen";
import { MyComplaintsScreen } from "./components/MyComplaintsScreen";
import { AllComplaintsScreen } from "./components/AllComplaintsScreen";
import { AnnouncementsScreen } from "./components/AnnouncementsScreen";
import { CampaignsEventsScreen } from "./components/CampaignsEventsScreen";
import { SurveysScreen } from "./components/SurveysScreen";
import { EmergencyScreen } from "./components/EmergencyScreen";
import { PaymentsScreen } from "./components/PaymentsScreen";
import { CommunityScreen } from "./components/CommunityScreen";
import { ProfileScreen } from "./components/ProfileScreen";
import { BottomNavigation } from "./components/BottomNavigation";

export default function App() {
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [activeScreen, setActiveScreen] = useState("dashboard");

  const handleSignIn = () => {
    setIsSignedIn(true);
    setActiveScreen("dashboard");
  };

  const handleScreenChange = (screen: string) => {
    setActiveScreen(screen);
  };

  const handleNavigate = (screen: string) => {
    setActiveScreen(screen);
  };

  if (!isSignedIn) {
    return <SignInScreen onSignIn={handleSignIn} />;
  }

  const renderScreen = () => {
    switch (activeScreen) {
      case "dashboard":
        return <DashboardScreen onNavigate={handleNavigate} />;
      case "myComplaints":
        return (
          <MyComplaintsScreen
            onBack={() => setActiveScreen("dashboard")}
          />
        );
      case "allComplaints":
        return (
          <AllComplaintsScreen
            onBack={() => setActiveScreen("dashboard")}
          />
        );
      case "announcements":
        return (
          <AnnouncementsScreen
            onBack={() => setActiveScreen("dashboard")}
          />
        );
      case "events":
        return (
          <CampaignsEventsScreen
            onBack={() => setActiveScreen("dashboard")}
          />
        );
      case "surveys":
        return (
          <SurveysScreen
            onBack={() => setActiveScreen("dashboard")}
          />
        );
      case "emergency":
        return (
          <EmergencyScreen
            onBack={() => setActiveScreen("dashboard")}
          />
        );
      case "payments":
        return (
          <PaymentsScreen
            onBack={() => setActiveScreen("dashboard")}
          />
        );
      case "community":
        return (
          <CommunityScreen
            onBack={() => setActiveScreen("dashboard")}
          />
        );
      case "profile":
        return (
          <ProfileScreen
            onBack={() => setActiveScreen("dashboard")}
          />
        );
      default:
        return <DashboardScreen onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className="size-full bg-background">
      {renderScreen()}
      <BottomNavigation
        activeScreen={activeScreen}
        onScreenChange={handleScreenChange}
      />
    </div>
  );
}