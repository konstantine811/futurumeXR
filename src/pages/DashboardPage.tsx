import React from "react";
import { useParams } from "react-router-dom";
import { TeacherDashboard } from "@/components/dashboard/TeacherDashboard";
import { StudentDashboard } from "@/components/dashboard/StudentDashboard";
import { AdminDashboard } from "@/components/dashboard/AdminDashboard";
import { getDashboardRole, USER_ROLES } from "@/config/roles";
import { useAuthStore } from "@/stores/authStore";

export const DashboardPage: React.FC = () => {
  const { role } = useParams<{ role: string }>();
  const { user: userProfile } = useAuthStore();

  // Визначаємо який dashboard показувати на основі параметра role або профілю користувача
  const userRole = (role ||
    userProfile?.role ||
    USER_ROLES.STUDENT) as import("@/types/user").UserRole;
  const dashboardRole = getDashboardRole(userRole);

  switch (dashboardRole) {
    case "teacher":
      return (
        <div className="min-h-screen bg-background py-8 px-4">
          <div className="max-w-7xl mx-auto">
            <TeacherDashboard userProfile={userProfile} />
          </div>
        </div>
      );
    case "admin":
      return (
        <div className="min-h-screen bg-background py-8 px-4">
          <div className="max-w-7xl mx-auto">
            <AdminDashboard userProfile={userProfile} />
          </div>
        </div>
      );
    case "student":
    default:
      return (
        <div className="min-h-screen bg-background py-8 px-4">
          <div className="max-w-7xl mx-auto">
            <StudentDashboard userProfile={userProfile} />
          </div>
        </div>
      );
  }
};
