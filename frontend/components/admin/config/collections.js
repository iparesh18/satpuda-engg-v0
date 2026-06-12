import { BookOpen, Mail, MessageSquare } from "lucide-react";

export const ADMIN_COLLECTION_TEMPLATES = {
  admissions: {
    key: "admissions",
    label: "Admissions",
    description: "Admission applications and course requests.",
    icon: BookOpen,
    accent: "from-emerald-500/20 to-cyan-500/20"
  },
  contacts: {
    key: "contacts",
    label: "Contacts",
    description: "Enquiries submitted through the contact form.",
    icon: Mail,
    accent: "from-amber-500/20 to-orange-500/20"
  },
  feedbacks: {
    key: "feedbacks",
    label: "Feedbacks",
    description: "Student feedback awaiting moderation.",
    icon: MessageSquare,
    accent: "from-violet-500/20 to-fuchsia-500/20"
  }
};

export function getAdminCollectionTemplate(key) {
  return ADMIN_COLLECTION_TEMPLATES[key] || {
    key,
    label: key,
    description: "",
    icon: BookOpen,
    accent: "from-slate-500/20 to-slate-700/20"
  };
}

export function getDefaultAdminCollectionKey(collections = []) {
  return collections?.[0]?.key || "admissions";
}
