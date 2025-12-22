import React from "react";
import { Dashboard } from "@/components/Dashboard";
import Preloader from "@/components/Preloader";
import { useAuthStore } from "@/stores/authStore";

export const DashboardPage: React.FC = () => {
  const { user } = useAuthStore();

  if (!user) {
    return <Preloader text="FUTURUM XR" />;
  }

  return <Dashboard userProfile={user} />;
};
