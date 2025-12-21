import {
  GraduationCap,
  Presentation,
  PenTool,
  Users,
  Heart,
  Eye,
  type LucideIcon,
} from "lucide-react";
import type { UserRole } from "@/types/user";

/**
 * Публічні ролі, які користувач може обрати сам
 */
export const PUBLIC_ROLES: {
  id: UserRole;
  label: string;
  icon: LucideIcon;
  color: string;
  desc: string;
}[] = [
  {
    id: "student",
    label: "Учень",
    icon: GraduationCap,
    color: "text-emerald-500",
    desc: "Отримання знань",
  },
  {
    id: "educator",
    label: "Викладач",
    icon: Presentation,
    color: "text-blue-500",
    desc: "Навчання та курси",
  },
  {
    id: "author",
    label: "Автор контенту",
    icon: PenTool,
    color: "text-pink-500",
    desc: "Створення уроків",
  },
  {
    id: "parent",
    label: "Батько/Опікун",
    icon: Heart,
    color: "text-orange-500",
    desc: "Нагляд за прогресом",
  },
  {
    id: "ta",
    label: "Асистент",
    icon: Users,
    color: "text-cyan-500",
    desc: "Допомога вчителю",
  },
  {
    id: "guest",
    label: "Гість",
    icon: Eye,
    color: "text-slate-400",
    desc: "Ознайомлення",
  },
];

