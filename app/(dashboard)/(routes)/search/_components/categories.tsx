"use client";

import { Category } from "@prisma/client";
import {
  FcEngineering,
  FcDatabase,
  FcLinux,
  FcParallelTasks,
  FcSmartphoneTablet,
  FcGlobe,
  FcKindle,

} from "react-icons/fc";
import { IconType } from "react-icons";

import { CategoryItem } from "./category-item";

interface CategoriesProps {
  items: Category[];
}

const iconMap: Record<Category["name"], IconType> = {
  "Backend Development": FcDatabase,
  "DevOps": FcLinux,
  "Machine Learning": FcParallelTasks,
  "Mobile Development": FcSmartphoneTablet,
  "Computer Science": FcGlobe,
  "UI/UX": FcKindle,
  "Web Development": FcEngineering,
};

export const Categories = ({
  items,
}: CategoriesProps) => {
  return (
    <div className="flex items-center gap-x-2 overflow-x-auto pb-2">
      {items.map((item) => (
        <CategoryItem
          key={item.id}
          label={item.name}
          icon={iconMap[item.name]}
          value={item.id}
        />
      ))}
    </div>
  )
}