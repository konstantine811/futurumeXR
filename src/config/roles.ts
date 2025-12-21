import { RoutePath } from "./route-config";
import type { UserRole } from "@/types/user";

/**
 * Константи ролей користувачів
 */
export const USER_ROLES = {
  STUDENT: "student",
  EDUCATOR: "educator",
  TEACHER: "teacher",
  ADMIN: "admin",
  SUPERADMIN: "superadmin",
  AUTHOR: "author",
  PARENT: "parent",
  TA: "ta",
  GUEST: "guest",
} as const;

/**
 * Ролі, які не потребують onboarding
 */
export const ADMIN_ROLES: readonly UserRole[] = [
  USER_ROLES.ADMIN,
  USER_ROLES.SUPERADMIN,
];

/**
 * Ролі вчителів (для визначення dashboard)
 */
export const TEACHER_ROLES: readonly UserRole[] = [
  USER_ROLES.EDUCATOR,
  USER_ROLES.TEACHER,
];

/**
 * Перевірка, чи роль є адмінською
 */
export const isAdminRole = (role: UserRole): boolean => {
  return ADMIN_ROLES.includes(role);
};

/**
 * Перевірка, чи роль є вчительською
 */
export const isTeacherRole = (role: UserRole): boolean => {
  return TEACHER_ROLES.includes(role);
};

/**
 * Отримати шлях до dashboard на основі ролі
 */
export const getDashboardPathByRole = (role: UserRole): string => {
  switch (role) {
    case USER_ROLES.STUDENT:
      return RoutePath.STUDENT_DASHBOARD;
    case USER_ROLES.EDUCATOR:
    case USER_ROLES.TEACHER:
      return RoutePath.TEACHER_DASHBOARD;
    case USER_ROLES.ADMIN:
    case USER_ROLES.SUPERADMIN:
      return RoutePath.ADMIN_DASHBOARD;
    default:
      return RoutePath.STUDENT_DASHBOARD;
  }
};

/**
 * Отримати роль для dashboard (нормалізація ролей для вибору dashboard)
 */
export const getDashboardRole = (
  role: UserRole
): "student" | "teacher" | "admin" => {
  if (isAdminRole(role)) {
    return "admin";
  }
  if (isTeacherRole(role)) {
    return "teacher";
  }
  return "student";
};
