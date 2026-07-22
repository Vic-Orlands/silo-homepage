import { NavItem, RaycastCommand, BentoCardData } from "./types";

export const NAVIGATION_ITEMS: NavItem[] = [
  { label: "Store", href: "#store" },
  { label: "Pro", href: "#pro" },
  { label: "AI", href: "#ai", isNew: true },
  { label: "iOS", href: "#ios" },
  { label: "Windows", href: "#windows" },
  { label: "Teams", href: "#teams" },
  { label: "Developers", href: "#developers" },
  { label: "Blog", href: "#blog" },
  { label: "Pricing", href: "#pricing" },
];

export const RAYCAST_COMMANDS: RaycastCommand[] = [
  {
    id: "schedule",
    title: "My Schedule",
    subtitle: "Calendar",
    icon: "Calendar",
    category: "Commands",
    shortcut: "⌥ S",
  },
  {
    id: "ai-chat",
    title: "AI Chat",
    subtitle: "Raycast AI",
    icon: "Sparkles",
    category: "AI",
    shortcut: "⌥ C",
  },
  {
    id: "klar",
    title: "Klar",
    subtitle: "Application",
    icon: "Monitor",
    category: "Applications",
  },
  {
    id: "store",
    title: "Store",
    subtitle: "Raycast",
    icon: "ShoppingBag",
    category: "Commands",
    shortcut: "⌥ R",
  },
  {
    id: "dictate",
    title: "Dictate",
    subtitle: "Dictation",
    icon: "Mic",
    category: "Commands",
    shortcut: "⌥ D",
  },
  {
    id: "captured-area",
    title: "Send Captured Area to AI Chat",
    subtitle: "CleanShot X",
    icon: "Camera",
    category: "Suggestions",
  },
  {
    id: "translate",
    title: "Translate",
    subtitle: "Translator",
    icon: "Languages",
    category: "Suggestions",
    shortcut: "⌥ T",
  },
  {
    id: "glaze",
    title: "Glaze",
    subtitle: "Application",
    icon: "Flame",
    category: "Recent",
  }
];

export const BENTO_CARDS: BentoCardData[] = [
  {
    id: "bento1",
    title: "A widget for any workspace",
    description: "Keep calendar meetings, active timers, weather forecasts, or quick shortcuts visible directly in your menu bar.",
    imageUrl: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80",
    badge: "Menu Bar",
    category: "Workspace Customization",
  },
  {
    id: "bento2",
    title: "Infinite expansion with Store",
    description: "Access over 1,000+ community extensions. Search, install, and configure keys from Spotify, GitHub, Jira, and more in seconds.",
    imageUrl: "https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?auto=format&fit=crop&w=800&q=80",
    badge: "Extensions",
    category: "Ecosystem Builder",
  }
];
