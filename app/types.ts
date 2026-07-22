export interface NavItem {
  label: string;
  href: string;
  isNew?: boolean;
}

export interface RaycastCommand {
  id: string;
  title: string;
  subtitle?: string;
  icon: string; // lucide icon name or emoji
  category: "Commands" | "Applications" | "Recent" | "AI" | "Suggestions";
  shortcut?: string;
}

export interface BentoCardData {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  badge?: string;
  category?: string;
}
